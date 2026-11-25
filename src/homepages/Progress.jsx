
const progressStats = [
  {
    number: "4+",
    label: "Years of Experience",
  },
  {
    number: "50+",
    label: "Satisfied Clients",
  },
  {
    number: "17+",
    label: "Countries We Operate",
  },
  {
    number: "$200K+",
    label: "Managed Marketing Fund",
  },
  {
    number: "$2.9M+",
    label: "Clients Gain",
  },
];

export default function Progress() {
  return (
    <section className="progress-section [width:100%] [padding:75px_6%] [background:#f8f9fc] [font-family:'Poppins',_sans-serif] max-[600px]:[padding:50px_6%]">
      <div className="progress-container [max-width:1100px] [margin:0_auto] [text-align:center] [&_h2]:[margin:0_0_12px] [&_h2]:[color:#111] [&_h2]:[font-size:38px] [&_h2]:[font-weight:600] [&_h2_span]:[color:#0d3bb8] max-[600px]:[&_h2]:[font-size:30px]">
        <h2>
          Our <span>Progress</span>
        </h2>

        <p className="progress-description [max-width:750px] [margin:0_auto_42px] [color:#555] [font-size:16px] [line-height:1.7] max-[600px]:[font-size:14px] max-[600px]:[margin-bottom:30px]">
          TOJO GLOBAL connects your business directly to your target
          audience, eliminating the need to search for clients. With
          us, they'll find their way to you.
        </p>

        <div className="progress-stats [display:grid] [grid-template-columns:repeat(5,_minmax(0,_1fr))] [gap:24px] max-[900px]:[grid-template-columns:repeat(3,_minmax(0,_1fr))] max-[900px]:[gap:18px] max-[600px]:[grid-template-columns:repeat(2,_minmax(0,_1fr))] max-[600px]:[gap:14px] max-[350px]:[grid-template-columns:1fr]">
          {progressStats.map((stat) => (
            <div className="progress-card [display:flex] [min-height:140px] [flex-direction:column] [align-items:center] [justify-content:center] [padding:18px_12px] [border-radius:13px] [background:linear-gradient(135deg,_#060145,_#176bd1)] [color:#fff] [transition:transform_0.3s_ease] [&:hover]:[transform:translateY(-5px)] [&_h3]:[margin:0_0_10px] [&_h3]:[font-size:30px] [&_h3]:[font-weight:600] [&_p]:[margin:0] [&_p]:[font-size:13px] [&_p]:[line-height:1.5] max-[600px]:[min-height:120px] max-[600px]:[&_h3]:[font-size:25px]" key={stat.label}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
