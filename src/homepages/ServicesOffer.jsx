import { useState } from "react";

const services = [
  {
    title: "Web Development",
    items: [
      "Business Websites",
      "E-commerce Websites",
      "Responsive Web Design",
      "React Development",
    ],
  },
  {
    title: "UI / UX Design",
    items: [
      "Website UI Design",
      "Mobile App Design",
      "User Experience",
      "Prototyping",
    ],
  },
  {
    title: "Software Development",
    items: [
      "Custom Software",
      "Database Solutions",
      "Business Applications",
      "System Integration",
    ],
  },
  {
    title: "Digital Solutions",
    items: [
      "Website Maintenance",
      "Performance Optimization",
      "Technical Support",
      "Website Improvements",
    ],
  },
];

export default function ServicesOffer() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="offer [padding:80px_8%] [background:#fff] [text-align:center]">
      <h2 className="offer-title [font-size:clamp(2rem,_5vw,_3.2rem)] [color:var(--ink)] [margin-bottom:12px] [&_span]:[color:var(--blue-700)]">
        What We <span>Offer</span>
      </h2>

      <p className="offer-sub [max-width:780px] [margin:0_auto_48px] [color:var(--muted)]">
        We provide creative, reliable, and modern digital solutions
        to help your business grow.
      </p>

      <div className="offer-body [display:grid] [grid-template-columns:340px_1fr] [gap:48px] [align-items:start] [max-width:1100px] [margin:0_auto] [text-align:left] max-[800px]:[grid-template-columns:1fr]">
        <div className="offer-tabs [display:grid] [gap:14px]">
          {services.map((service, index) => (
            <button
              key={service.title}
              type="button"
              className={`offer-tab ${
                activeService === index ? "active" : ""
              } [font:inherit] [font-size:1.15rem] [font-weight:500] [padding:14px_20px] [border-radius:999px] [border:1.5px_solid_#d5deea] [background:#fff] [color:var(--ink)] [cursor:pointer] [text-align:center] [box-shadow:0_4px_12px_rgba(10,_42,_138,_0.06)] [transition:background_0.25s,_color_0.25s,_transform_0.2s,_box-shadow_0.25s] [&:hover]:[border-color:var(--blue-500)] [&:hover]:[background:var(--blue-700)] [&:hover]:[color:#f4f7fc] [&:hover]:[transform:translateX(4px)] [&.active]:[background:var(--blue-900)] [&.active]:[border-color:var(--blue-700)] [&.active]:[color:#fff] [&.active]:[box-shadow:0_8px_20px_rgba(10,_42,_138,_0.3)]`}
              onClick={() => setActiveService(index)}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="offer-items [display:flex] [flex-wrap:wrap] [align-content:center] [gap:26px_40px] [min-height:260px] [animation:offerFade_0.35s_ease] [&_span]:[font-weight:500] [&_span]:[font-size:1.05rem] [&_span]:[color:var(--ink)] max-[800px]:[min-height:0]" key={activeService}>
          {services[activeService].items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}