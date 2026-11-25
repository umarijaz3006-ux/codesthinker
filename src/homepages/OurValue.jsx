
const values = [
  {
    icon: "♧",
    title: "Integrity",
    description:
      "We hold ourselves to a strong ethical and moral code.",
  },
  {
    icon: "✓",
    title: "Trust",
    description:
      "We are dependable, loyal, and hardworking to achieve the same goal.",
  },
  {
    icon: "⚙",
    title: "Excellence",
    description:
      "We consistently strive to deliver high-quality work without room for error.",
  },
];

export default function OurValue() {
  return (
    <section className="our-value-section [width:100%] [padding:65px_8%] [background:#f8f9fc] [font-family:'Poppins',_sans-serif] max-[600px]:[padding:45px_6%] max-[700px]:[padding:30px_20px_45px]">
      <div className="our-value-container [max-width:1100px] [margin:0_auto] [&_h2]:[margin:0_0_6px] [&_h2]:[color:#111] [&_h2]:[font-size:38px] [&_h2]:[font-weight:600] [&_h2_span]:[color:#0d3bb8] max-[600px]:[&_h2]:[font-size:30px]">
        <h2>
          OUR <span>VALUE</span>
        </h2>

        <p className="our-value-subtitle [margin:0_0_28px] [color:#222] [font-size:19px] max-[600px]:[font-size:16px]">
          A melting pot for the best ideas
        </p>

        <div className="our-value-list [display:flex] [flex-direction:column] [gap:24px] [max-width:570px]">
          {values.map((value) => (
            <div className="our-value-item [display:flex] [align-items:center] [gap:14px]" key={value.title}>
              <div className="our-value-icon [display:flex] [flex-shrink:0] [align-items:center] [justify-content:center] [width:60px] [height:60px] [border-radius:12px] [background:#060145] [color:#38a0ff] [font-size:36px] max-[600px]:[width:50px] max-[600px]:[height:50px] max-[600px]:[font-size:30px]">
                {value.icon}
              </div>

              <div className="our-value-text [&_h3]:[margin:0_0_3px] [&_h3]:[color:#161616] [&_h3]:[font-size:20px] [&_h3]:[font-weight:600] [&_p]:[margin:0] [&_p]:[color:#444] [&_p]:[font-size:14px] [&_p]:[line-height:1.6] max-[600px]:[&_h3]:[font-size:18px] max-[600px]:[&_p]:[font-size:13px]">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
