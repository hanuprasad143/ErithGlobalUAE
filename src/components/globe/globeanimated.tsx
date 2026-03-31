"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface RotatingEarthProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function RotatingEarth({
  width = 800,
  height = 600,
  className = "",
}: RotatingEarthProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (!context) return;

    const containerWidth = Math.min(width, window.innerWidth - 40);
    const containerHeight = Math.min(height, window.innerHeight - 100);

    const radius = Math.min(containerWidth, containerHeight) / 2.5;

    const dpr = window.devicePixelRatio || 1;

    canvas.width = containerWidth * dpr;
    canvas.height = containerHeight * dpr;

    canvas.style.width = `${containerWidth}px`;
    canvas.style.height = `${containerHeight}px`;

    context.scale(dpr, dpr);

    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([containerWidth / 2, containerHeight / 2])
      .clipAngle(90);

    const path = d3.geoPath().projection(projection).context(context);

    const pointInPolygon = (
      point: [number, number],
      polygon: number[][],
    ): boolean => {
      const [x, y] = point;
      let inside = false;

      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i];
        const [xj, yj] = polygon[j];

        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
          inside = !inside;
        }
      }

      return inside;
    };

    const pointInFeature = (point: [number, number], feature: any): boolean => {
      const geometry = feature.geometry;

      if (geometry.type === "Polygon") {
        const coordinates = geometry.coordinates;

        if (!pointInPolygon(point, coordinates[0])) return false;

        for (let i = 1; i < coordinates.length; i++) {
          if (pointInPolygon(point, coordinates[i])) return false;
        }

        return true;
      }

      if (geometry.type === "MultiPolygon") {
        for (const polygon of geometry.coordinates) {
          if (pointInPolygon(point, polygon[0])) {
            let inHole = false;

            for (let i = 1; i < polygon.length; i++) {
              if (pointInPolygon(point, polygon[i])) {
                inHole = true;
                break;
              }
            }

            if (!inHole) return true;
          }
        }
      }

      return false;
    };

    const generateDotsInPolygon = (feature: any, spacing = 16) => {
      const dots: [number, number][] = [];

      const bounds = d3.geoBounds(feature);
      const [[minLng, minLat], [maxLng, maxLat]] = bounds;

      const stepSize = spacing * 0.08;

      for (let lng = minLng; lng <= maxLng; lng += stepSize) {
        for (let lat = minLat; lat <= maxLat; lat += stepSize) {
          const point: [number, number] = [lng, lat];

          if (pointInFeature(point, feature)) {
            dots.push(point);
          }
        }
      }

      return dots;
    };

    interface Dot {
      lng: number;
      lat: number;
    }

    const dots: Dot[] = [];
    let landFeatures: any;

    const render = () => {
      context.clearRect(0, 0, containerWidth, containerHeight);

      const currentScale = projection.scale();
      const scaleFactor = currentScale / radius;

      const centerX = containerWidth / 2;
      const centerY = containerHeight / 2;

      /* Globe Outline */
      context.beginPath();
      context.arc(centerX, centerY, currentScale, 0, 2 * Math.PI);

      context.strokeStyle = "#fff";
      context.lineWidth = 0.5 * scaleFactor;

      context.shadowColor = "#fff";
      context.shadowBlur = 20;

      context.stroke();
      context.shadowBlur = 0;

      /* Glass Inner Highlight */
      const gradient = context.createRadialGradient(
        centerX - currentScale / 3,
        centerY - currentScale / 3,
        currentScale * 0.2,
        centerX,
        centerY,
        currentScale,
      );

      gradient.addColorStop(0, "rgba(255,255,255,0.18)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");

      context.beginPath();
      context.arc(centerX, centerY, currentScale, 0, 2 * Math.PI);
      context.fillStyle = gradient;
      context.fill();

      if (landFeatures) {
        const graticule = d3.geoGraticule();

        context.beginPath();
        path(graticule());
        context.strokeStyle = "#ffffff";
        context.globalAlpha = 0.2;
        context.stroke();
        context.globalAlpha = 1;

        context.beginPath();

        landFeatures.features.forEach((feature: any) => {
          path(feature);
        });

        context.strokeStyle = "#fff";
        context.stroke();

        dots.forEach((dot) => {
          const projected = projection([dot.lng, dot.lat]);

          if (!projected) return;

          context.beginPath();
          context.arc(
            projected[0],
            projected[1],
            1.2 * scaleFactor,
            0,
            2 * Math.PI,
          );

          context.fillStyle = "#f7d35c";
          context.fill();
        });
      }
    };

    const loadWorld = async () => {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/master/110m/physical/ne_110m_land.json",
        );

        landFeatures = await res.json();

        landFeatures.features.forEach((feature: any) => {
          const generated = generateDotsInPolygon(feature);

          generated.forEach(([lng, lat]) => {
            dots.push({ lng, lat });
          });
        });

        render();
      } catch {
        setError("Failed to load world map");
      }
    };

    /* Rotation */

    const rotation = [0, 0];
    let autoRotate = true;

    const rotate = () => {
      if (!autoRotate) return;

      rotation[0] += 0.4;

      projection.rotate(rotation);

      render();
    };

    const timer = d3.timer(rotate);

    const handleMouseDown = (event: MouseEvent) => {
      autoRotate = false;

      const startX = event.clientX;
      const startY = event.clientY;

      const startRotation = [...rotation];

      const move = (e: MouseEvent) => {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        rotation[0] = startRotation[0] + dx * 0.5;
        rotation[1] = startRotation[1] - dy * 0.5;

        rotation[1] = Math.max(-90, Math.min(90, rotation[1]));

        projection.rotate(rotation);

        render();
      };

      const up = () => {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);

        setTimeout(() => {
          autoRotate = true;
        }, 100);
      };

      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", up);
    };

    canvas.addEventListener("mousedown", handleMouseDown);

    loadWorld();

    return () => {
      timer.stop();
      canvas.removeEventListener("mousedown", handleMouseDown);
    };
  }, [width, height]);

  if (error) {
    return (
      <div className="flex items-center justify-center p-10">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <canvas ref={canvasRef} className="w-full h-auto rounded-full" />

      {/* Glass Reflection Overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full
        bg-gradient-to-br
        from-white/30 via-transparent to-white/10
        backdrop-blur-[2px]"
      />
    </div>
  );
}
