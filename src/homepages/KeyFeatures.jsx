const keyFeatures = [
  { icon: "◉", title: "Blockchain Expertise" },
  { icon: "▣", title: "Small Business Support" },
  { icon: "🔒", title: "Crypto Solutions" },
  { icon: "🚀", title: "Startup Business" },
  { icon: "⇄", title: "B2B Integration" },
  { icon: "♟", title: "Fintech Innovation" },
];

export default function KeyFeatures() {
  return (
    <>
      <section className="key-features-section [width:100%] [padding:65px_24px] [background:#f8f9f7] max-[700px]:[padding:45px_20px]">
        <div className="key-features-container [max-width:900px] [min-height:320px] [margin:0_auto] [display:flex] [align-items:center] [justify-content:center] [gap:35px] max-[700px]:[flex-direction:column] max-[700px]:[gap:30px]">
          <div className="key-features-circle [width:260px] [height:260px] [flex-shrink:0] [border:1.5px_solid_#333] [border-radius:50%] [display:flex] [align-items:center] [justify-content:center] [text-align:center] [background:transparent] [&_h2]:[margin:0] [&_h2]:[color:#171717] [&_h2]:[font-size:25px] [&_h2]:[line-height:1.4] [&_h2]:[font-weight:700] max-[700px]:[width:200px] max-[700px]:[height:200px] max-[700px]:[&_h2]:[font-size:22px]">
            <h2>
              KEY
              <br />
              FEATURES
            </h2>
          </div>

          <div className="key-features-list [flex:1] [max-width:430px] [display:flex] [flex-direction:column] [gap:12px] max-[700px]:[width:100%] max-[700px]:[max-width:420px]">
            {keyFeatures.map((feature) => (
              <div className="key-feature-pill [min-height:52px] [padding:12px_18px] [border:1.5px_solid_#333] [border-radius:40px] [display:flex] [align-items:center] [gap:18px] [color:#171717] [font-size:15px] [font-weight:500] [transition:background_0.25s_ease,_color_0.25s_ease,_transform_0.25s_ease] [&:nth-child(even)]:[margin-left:20px] [&:nth-child(odd)]:[margin-right:10px] [&:hover]:[background:#0d3bb8] [&:hover]:[border-color:#0d3bb8] [&:hover]:[color:#fff] [&:hover]:[transform:translateX(4px)] max-[700px]:[&:nth-child(even)]:[margin-left:10px] max-[700px]:[&:nth-child(odd)]:[margin-right:10px]" key={feature.title}>
                <span className="key-feature-icon [width:24px] [flex-shrink:0] [display:inline-flex] [justify-content:center] [align-items:center] [font-size:19px]" aria-hidden="true">
                  {feature.icon}
                </span>

                <span>{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}