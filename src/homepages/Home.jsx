import aboutImg from "../assets/woman.jpg";
import Hero from "./Hero.jsx";
import ServicesOffer from "./ServicesOffer.jsx";
import KeyFeatures from "./KeyFeatures.jsx";
import OurValue from "./OurValue.jsx";
import Progress from "./Progress.jsx";
import ClientReviews from "./ClientReviews.jsx";
import ContactSection from "./ContactSection.jsx";
import Faq from "./Faq.jsx";

const features = [
  {
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/lightbulb.svg",
    title: "Custom Web Experiences",
  },
  {
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/people.svg",
    title: "Innovative UI/UX Design",
  },
  {
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/gear.svg",
    title: "Scalable Tech Solutions",
  },
  {
    icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/clock.svg",
    title: "24/7 Support & Maintenance",
  },
];


const points = [
  "Industry Expert Staff",
  "Client-Centric Focus",
  "Partner rather than Vendor",
  "Solutions Geared to Improve Productivity",
  "Collaborative Approach Throughout the Process",
];

function HomeIntro() {
  return (
    <>
      <section className="features [padding:70px_6%_90px] [background:linear-gradient(_180deg,_#e6edf5_0%,_#eef3f9_55%,_#f6f9fc_100%_)] [text-align:center]">
        <h2 className="features-title [color:var(--blue-700)] [font-size:clamp(1.6rem,_4vw,_2.2rem)] [margin-bottom:44px]">
          What Makes Us Stand Out?
        </h2>

        <div className="features-grid [display:grid] [grid-template-columns:repeat(auto-fit,minmax(210px,_1fr))] [gap:28px] [max-width:1100px] [margin:0_auto]">
          {features.map((feature) => (
            <div className="feature-card [background:#fff] [border-radius:24px] [padding:34px_20px] [min-height:190px] [display:flex] [flex-direction:column] [align-items:center] [gap:16px] [box-shadow:0_10px_28px_rgba(10,_42,_138,_0.12)] [cursor:pointer] [opacity:1] [transform:scale(1)] [transform-origin:top_left] [transition:opacity_0.7s_ease,_transform_0.7s_ease,_background_0.25s,_box-shadow_0.25s] [&.show]:[opacity:1] [&.show]:[transform:scale(1)] [&_p]:[font-weight:500] [&_p]:[color:var(--ink)] [&_p]:[transition:color_0.25s] [&:hover]:[background:var(--blue-700)] [&:hover]:[box-shadow:0_16px_34px_rgba(10,_42,_138,_0.35)] [&:hover_p]:[color:#fff]" key={feature.title}>
              <div className="feature-icon [width:66px] [height:66px] [border-radius:50%] [display:grid] [place-items:center] [font-size:1.8rem] [background:linear-gradient(_135deg,_#1e6bff,_#2ea0ff_)]">
                <img
                  src={feature.icon}
                  alt=""
                  width="34"
                  height="34"
                />
              </div>

              <p>{feature.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-home [overflow:hidden] [display:grid] [grid-template-columns:1.1fr_1fr] [gap:48px] [align-items:center] [padding:80px_8%] [background:#eef3f9] max-[800px]:[grid-template-columns:1fr]">
        <div className="about-text [&_h2]:[font-size:clamp(2rem,_5vw,_3.2rem)] [&_h2]:[line-height:1.15] [&_h2]:[color:var(--ink)] [&_h2]:[margin-bottom:10px] [&_h2_span]:[color:var(--blue-700)] [&_p]:[color:var(--muted)] [&_p]:[margin-bottom:24px] [&_ul]:[list-style:none] [&_ul]:[display:grid] [&_ul]:[gap:14px] [&_li]:[display:inline-flex] [&_li]:[align-items:center] [&_li]:[gap:14px] [&_li]:[width:fit-content] [&_li]:[max-width:100%] [&_li]:[background:#fff] [&_li]:[padding:12px_22px] [&_li]:[border-radius:14px] [&_li]:[box-shadow:0_6px_18px_rgba(10,_42,_138,_0.08)] [&_li]:[font-weight:500] [&_li::before]:[content:''] [&_li::before]:[flex:none] [&_li::before]:[width:16px] [&_li::before]:[height:16px] [&_li::before]:[border-radius:50%] [&_li::before]:[background:var(--blue-500)]">
          <h2>
            About <span>Code's</span> Thinker
          </h2>

          <p>
            We redefine excellence in business solution at
            Code's Thinker...
          </p>

          <ul>
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="about-img [&_img]:[width:100%] [&_img]:[height:100%] [&_img]:[max-height:460px] [&_img]:[object-fit:cover] [&_img]:[border-radius:18px] [&_img]:[box-shadow:0_12px_30px_rgba(10,_42,_138,_0.18)] [&_img]:[display:block]">
          <img src={aboutImg} alt="Code's Thinker team" />
        </div>
      </section>
    </>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <ServicesOffer />
      <KeyFeatures />
      <OurValue />
      <Progress />
      <ClientReviews />
      <ContactSection />
      <Faq />
    </>
  );
}