import { Metadata } from "next";
// import AboutBanner from "@/components/about/banner/about-banner";
// import TutorArea from "@/components/tutor/tutor-area";
// import CounterSix from "@/components/counter/counter-six";
// import MissionArea from "@/components/mission/mission-area";
// import TeamArea from "@/components/team/team-area";
// import BrandArea from "@/components/brand/brand-area";
// import HeroAreaOne from "@/components/hero-area/hero-area-one";
// import HeaderTopArea from "@/components/header/header-top/header-top-area";
// import FooterSeven from "@/components/footer/footer-seven";
// import AboutTwo from "@/components/about/about-two";
// import AboutCampus from "@/components/about/about-campus";
// import Abouterith from "@/components/about/erith-aboutpage";
import ContactForm from "@/components/form/contact-form";
import IndustriesBanner from "@/components/industries/banner/industries-banner";
import AboutIndustries from "@/components/industries/about-industries";
export const metadata: Metadata = {
  title: "Industries - Erith ",
  icons: {
    icon: "/favicon.png",
  },
};

export default function IndustriesPage() {
  return (
    <main>
      {/* <HeaderTopArea />  */}

      {/* about banner area start */}
      <IndustriesBanner />
      {/* about banner area end */}
      <AboutIndustries />

      {/* tutor area start */}
      {/* <TutorArea /> */}
      {/* tutor area end */}

      {/* counter area start */}
      {/* <CounterSix/> */}
      {/* counter area end */}

      {/* mission area start */}
      {/* <AboutTwo spacing="pt-90 pb-90" /> */}
      <ContactForm />
      {/* <MissionArea top_cls="" /> */}

      {/* mission area end */}
      {/* <HeroSlider/> */}

      {/* team area start */}
      {/* <TeamArea/> */}
      {/* team area end */}
      {/* <ContactArea /> */}
      {/* brand area start */}
      {/* <BrandArea/> */}
      {/* brand area end */}
      {/* <FooterSeven/> */}
    </main>
  );
}
