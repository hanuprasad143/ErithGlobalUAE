import { EmailThree, LocationFour, TelSvgTwo } from "../svg";

const contactInfoData = [
  {
    icon: <EmailThree />,
    title: "Feedbacks",
    description: "Speak to our Friendly team.",
    linkText: "info@erithglobal.com",
    href: "mailto:info@erithglobal.com",
  },
  {
    icon: <TelSvgTwo />,
    title: "Call Us",
    description: "Mon-Fri from 8am to 5pm",
    linkText: "+971 7266 2628",
    // href: '+971 7266 2628'
  },
  {
    icon: <LocationFour />,
    title: "Visit Us",
    description: "Visit our office HQ.",
    linkText: "Office No.3,Plot #84,Abu Dhabi",
    href: "#",
  },
];

export default function ContactInfoArea() {
  return (
    <section className="tp-contact-info-area tp-contact-p pb-10 ">
      <div className="container">
        <div
          className="tp-about-wrap mb-20 wow fadeInLeft"
          data-wow-delay=".3s"
        >
          <div className="row justify-content-start">
            <div className="col-lg-12">
              <div className="tp-contact-info-wrapper text-center">
                <h3
                  className="tp-contact-main-title"
                  style={{ fontSize: "25px" }}
                >
                  Let us know how we can help
                </h3>
              </div>
              <div className="row">
                {contactInfoData.map((item, index) => (
                  <div key={index} className="col-lg-4 col-md-6">
                    <div className="tp-contact-info-item mb-30">
                      <div className="tp-contact-info-icon">
                        <span>{item.icon}</span>
                      </div>
                      <h4
                        className="tp-contact-info-title"
                        style={{ fontSize: "18px", color: "#292929" }}
                      >
                        {item.title}
                      </h4>
                      <p>{item.description}</p>
                      <a href={item.href} style={{ fontSize: "18px" }}>
                        {item.linkText}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
