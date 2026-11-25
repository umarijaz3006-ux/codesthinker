import aboutImg from "../../assets/woman.jpg";
import Vision from "./Vision.jsx";
import OurValue from "./OurValue.jsx";
import ClientReviews from "./ClientReviews.jsx";

export default function AboutPage() {
  return (
    <>
      <section className="about-section [width:100%] [padding:70px_0] [background:linear-gradient(_110deg,_#f5f8ff_0%,_#eef3ff_100%_)] [font-family:'Poppins',_sans-serif] [&_.about-content]:[display:grid] [&_.about-content]:[grid-template-columns:1fr_1fr] [&_.about-content]:[align-items:center] [&_.about-content]:[gap:55px] [&_.about-content]:[width:100%] [&_.about-text]:[width:100%] [&_.about-text_h1]:[font-size:36px] [&_.about-text_h1]:[font-weight:700] [&_.about-text_h1]:[line-height:1.2] [&_.about-text_h1]:[color:#111111] [&_.about-text_h1]:[margin-bottom:25px] [&_.about-text_h1_span]:[color:#1746a2] [&_.about-text_p]:[font-size:15px] [&_.about-text_p]:[line-height:1.65] [&_.about-text_p]:[color:#333333] [&_.about-text_p]:[text-align:justify] [&_.about-text_p]:[margin:0] [&_.about-image]:[width:100%] [&_.about-image]:[height:360px] [&_.about-image]:[overflow:hidden] [&_.about-image_img]:[width:100%] [&_.about-image_img]:[height:100%] [&_.about-image_img]:[object-fit:cover] [&_.about-image_img]:[display:block] max-[900px]:[&_.about-content]:[gap:30px] max-[900px]:[&_.about-text_h1]:[font-size:30px] max-[900px]:[&_.about-text_p]:[font-size:14px] max-[900px]:[&_.about-image]:[height:320px] max-[650px]:[padding:55px_0] max-[650px]:[&_.about-content]:[grid-template-columns:1fr] max-[650px]:[&_.about-content]:[gap:35px] max-[650px]:[&_.about-text_h1]:[font-size:32px] max-[650px]:[&_.about-text_p]:[font-size:14px] max-[650px]:[&_.about-image]:[height:280px]">
      <div className="about-container [width:88%] [max-width:1200px] [margin:0_auto] max-[900px]:[width:90%]">

        <div className="about-content">

          <div className="about-text [&_h2]:[font-size:clamp(2rem,_5vw,_3.2rem)] [&_h2]:[line-height:1.15] [&_h2]:[color:var(--ink)] [&_h2]:[margin-bottom:10px] [&_h2_span]:[color:var(--blue-700)] [&_p]:[color:var(--muted)] [&_p]:[margin-bottom:24px] [&_ul]:[list-style:none] [&_ul]:[display:grid] [&_ul]:[gap:14px] [&_li]:[display:inline-flex] [&_li]:[align-items:center] [&_li]:[gap:14px] [&_li]:[width:fit-content] [&_li]:[max-width:100%] [&_li]:[background:#fff] [&_li]:[padding:12px_22px] [&_li]:[border-radius:14px] [&_li]:[box-shadow:0_6px_18px_rgba(10,_42,_138,_0.08)] [&_li]:[font-weight:500] [&_li::before]:[content:''] [&_li::before]:[flex:none] [&_li::before]:[width:16px] [&_li::before]:[height:16px] [&_li::before]:[border-radius:50%] [&_li::before]:[background:var(--blue-500)]">
            <h1>
              Building <span>Future-Ready</span>
              <br />
              <span>Software</span>
            </h1>

            <p>
              We are a team of passionate developers, designers,
              and thinkers building scalable solutions for tomorrow.
              At Code's Thinker, we don't just build software —
              we craft scalable, intelligent solutions that drive
              real-world impact. Our team of developers, designers,
              and strategists work together to deliver innovative
              digital products tailored for tomorrow's challenges.
              Rooted in collaboration, quality, and forward thinking,
              we're committed to helping businesses grow through
              technology.
            </p>
          </div>

          <div className="about-image">
            <img
              src={aboutImg}
              alt="Code's Thinker Team"
            />
          </div>

        </div>

      </div>
      </section>
      <Vision />
      <OurValue />
      <ClientReviews />
    </>
  );
}