import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="hero [position:relative] [min-height:80vh] [display:flex] [align-items:center] [justify-content:center] [text-align:center] [padding:60px_6%] [color:#fff] [overflow:hidden] [background:linear-gradient(_rgba(10,_42,_138,_0.15),rgba(10,_42,_138,_0.35)),var(--hero-img)_center_/_cover_no-repeat,_#0a2a8a] [&_h1]:[font-size:clamp(2.2rem,_6vw,_4.2rem)] [&_h1]:[line-height:1.15] [&_h1]:[margin-bottom:18px] [&_h1]:[text-shadow:0_2px_12px_rgba(0,_0,_0,_0.35)] [&_h1_span]:[color:var(--blue-500)] [&_p]:[font-size:1.15rem] [&_p]:[margin:0_auto_28px] [&_p]:[max-width:600px] [&_p]:[text-shadow:0_1px_8px_rgba(0,_0,_0,_0.4)]"
      style={{
        "--hero-img":
          "url(https://codesthinker.vercel.app/assets/header1-BIXukauP.webp)",
      }}
    >
      <div className="hero-content [max-width:820px]">
        <h1>
          Transform Ideas Into <span>Digital Reality</span>
        </h1>

        <p>
          Our team blends creative design and clean code to deliver impactful
          digital experiences.
        </p>

        <div className="hero-actions [display:flex] [flex-wrap:wrap] [justify-content:center] [gap:14px]">
          <Link to="/projects" className="btn btn-cyan [display:inline-block] [padding:11px_28px] [border-radius:999px] [font-weight:500] [font-family:inherit] [font-size:1rem] [cursor:pointer] [transition:transform_0.15s,_background_0.2s] [border:2px_solid_transparent] [&:hover]:[transform:translateY(-2px)] [background:var(--blue-700)] [color:#fff] [&:hover]:[background:var(--blue-500)]">
            View Our Work
          </Link>

          <Link to="/contact" className="btn btn-outline [display:inline-block] [padding:11px_28px] [border-radius:999px] [font-weight:500] [font-family:inherit] [font-size:1rem] [cursor:pointer] [transition:transform_0.15s,_background_0.2s] [border:2px_solid_transparent] [&:hover]:[transform:translateY(-2px)] [border-color:#fff] [color:#fff] [&:hover]:[background:rgba(255,_255,_255,_0.15)]">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}