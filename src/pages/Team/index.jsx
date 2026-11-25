import { teamMembers } from "./teamMembers";

export default function TeamPage() {
  return (
    <section className="team-section [width:100%] [min-height:550px] [padding:45px_0_70px] [background:#ffffff] [font-family:'Poppins',_sans-serif] [color:#060145] max-[600px]:[padding:40px_0_60px]">

      <div className="team-container [width:88%] [max-width:1150px] [margin:auto] max-[850px]:[width:92%]">

        <div className="team-heading [text-align:center] [max-width:650px] [margin:0_auto_55px] [&_h1]:[font-size:36px] [&_h1]:[font-weight:700] [&_h1]:[color:#111111] [&_h1]:[margin-bottom:12px] [&_h1_span]:[color:#1746a2] [&_p]:[color:#444444] [&_p]:[font-size:15px] [&_p]:[line-height:1.7] max-[600px]:[&_h1]:[font-size:30px] max-[600px]:[&_p]:[font-size:14px]">
          <h1>
            Meet Our <span>Team</span>
          </h1>

          <p>
            Our team of passionate and experienced professionals
            is dedicated to driving your success. From strategy
            to execution, we combine creativity, innovation,
            and insight to deliver exceptional results.
          </p>
        </div>

        
        <div className="team-category [margin-bottom:25px] [& h2]:[font-size:25px] [&_h2]:[color:#111111] [&_h2_span]:[color:#1746a2] max-[600px]:[&_h2]:[font-size:22px]">
          <h2>
            Global <span>Leadership</span>
          </h2>
        </div>

        
        <div className="team-grid [display:grid] [grid-template-columns:repeat(3,_1fr)] [gap:25px] [align-items:stretch] max-[850px]:[gap:18px] max-[600px]:[grid-template-columns:1fr] max-[600px]:[gap:25px]">

          {teamMembers.map((member) => (
            <div className="team-card [width:100%] [overflow:hidden]" key={member.name}>

              <div className="team-image [position:relative] [width:100%] [height:260px] [background:transparent] [border:1px_solid_#e0e5ee] [border-radius:10px] [overflow:hidden] [cursor:pointer] [&:hover_.team-overlay]:[opacity:1] [&:hover_.team-overlay]:[transform:translateY(0)] [&:focus_.team-overlay]:[opacity:1] [&:focus_.team-overlay]:[transform:translateY(0)] max-[850px]:[height:230px] max-[600px]:[height:320px] [&_img]:[width:100%] [&_img]:[height:100%] [&_img]:[object-fit:cover] [&_img]:[display:block]">

                <img
                  src={member.image}
                  alt={member.name}
                />

                <div className="team-overlay [position:absolute] [left:0] [bottom:0] [width:100%] [padding:18px_10px] [text-align:center] [background:#252b35] [color:white] [opacity:0] [transform:translateY(100%)] [transition:all_0.35s_ease] [&_h3]:[font-size:16px] [&_h3]:[font-weight:600] [&_h3]:[margin-bottom:5px] [&_h3]:[color:white] [&_p]:[font-size:13px] [&_p]:[margin:0] [&_p]:[color:#e0e5ee]">
                  <h3>{member.name}</h3>
                  <p>{member.designation}</p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}