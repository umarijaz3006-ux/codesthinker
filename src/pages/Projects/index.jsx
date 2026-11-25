
import { useState } from "react";

const projectData = [
  {
    title: "Akoya Deluxe Cleaning",
    category: "Website Development",
    description:
      "User-friendly, modern design showcasing top resources for managing overtime.",
    tech: "React · CSS · JavaScript",
    images: [
      "https://codesthinker.vercel.app/assets/lundary1-C7jlE8v0.webp",
      "https://codesthinker.vercel.app/assets/lundary2-DuDEy8ph.webp",
      "https://codesthinker.vercel.app/assets/lundary3-B8uzCD8R.webp",
      "https://codesthinker.vercel.app/assets/lundary4-CMgOLSng.webp",
    ],
  },
  {
    title: "Multi-Service Creative Agency",
    category: "Website Development",
    description:
      "A fully responsive online store with cart, payment gateway, and admin panel.",
    tech: "React · Node.js",
    images: [
      "https://codesthinker.vercel.app/assets/novieta1-C2xFNyej.webp",
      "https://codesthinker.vercel.app/assets/novieta2-DdB_JBBs.webp",
      "https://codesthinker.vercel.app/assets/novieta3-XXTSrGfE.webp",
      "https://codesthinker.vercel.app/assets/novieta4-Dn1r3SfI.webp",
    ],
  },
  {
    title: "Trend Car Care",
    category: "UI/UX",
    description:
      "A fully responsive online store with cart, payment gateway, and admin panel.",
    tech: "Figma · UI/UX",
    images: [
      "https://codesthinker.vercel.app/assets/trend1-CJah5QVA.webp",
      "https://codesthinker.vercel.app/assets/trend2-CLZ4cHQ4.webp",
      "https://codesthinker.vercel.app/assets/trend3-DgYWgfPC.webp",
      "https://codesthinker.vercel.app/assets/trend4-B4QMzJ3U.webp",
    ],
  },
  {
    title: "The Givers Consulting",
    category: "App Development",
    description:
      "A versatile and forward-thinking company offering a comprehensive suite of services.",
    tech: "React Native · Firebase",
    images: [
      "https://codesthinker.vercel.app/assets/thegiverconsulting1-BPIVP-V-.webp",
      "https://codesthinker.vercel.app/assets/thegiverconsulting2-BNZ77tTD.webp",
      "https://codesthinker.vercel.app/assets/thegiverconsulting3-C9miheKr.webp",
      "https://codesthinker.vercel.app/assets/thegiverconsulting4-BdzhF894.webp",
    ],
  },
  {
    title: "Cash rewards game",
    category: "Website Development",
    description:
      "Become part of a thriving global community today and unlock thousands of dollars in earnings.",
    tech: "React · Oracle SQL",
    images: [
      "https://codesthinker.vercel.app/assets/bmx1-DHCt3D7a.webp",
      "https://codesthinker.vercel.app/assets/bmx2-DMhSIxDD.webp",
      "https://codesthinker.vercel.app/assets/bmx3-rwcF-Qy7.webp",
      "https://codesthinker.vercel.app/assets/bmx4-Cx4SkM0k.webp",
    ],
  },
  {
    title: "Innovative Workforce Management Solutions",
    category: "App Development",
    description:
      "Innovative Workforce Management Solutions streamline employee scheduling, attendance tracking, and productivity monitoring using advanced technologies.",
    tech: "React Native · Firebase",
    images: [
      "https://codesthinker.vercel.app/assets/glidesk1-3ginnWW-.webp",
      "https://codesthinker.vercel.app/assets/glidesk2-BmZtZGPj.webp",
      "https://codesthinker.vercel.app/assets/glidesk3-BtViKt_f.webp",
      "https://codesthinker.vercel.app/assets/glidesk4-DKHXkjbl.webp",
    ],
  },
  {
    title: "Softech Business Solutions",
    category: "UI/UX",
    description:
      "Softech Business Solutions is a forward-thinking company specializing in delivering innovative software and technology services to businesses of all sizes.",
    tech: "Figma · UI Design",
    images: [
      "https://codesthinker.vercel.app/assets/softech1-DLz3n0YA.webp",
      "https://codesthinker.vercel.app/assets/softech2-sLHoeJCT.webp",
      "https://codesthinker.vercel.app/assets/softech3-SPUndRG1.webp",
      "https://codesthinker.vercel.app/assets/softech4-DX4USfl_.webp",
    ],
  },
  {
    title: "Nasa Teck Innovations It Services",
    category: "Website Development",
    description:
      "NASA Teck Innovations IT Services is a technology company based in Bahawalpur, Pakistan, operating under the name Sky Innovations IT Services L.L.C.",
    tech: "React · CSS · JavaScript",
    images: [
      "https://codesthinker.vercel.app/assets/nasateck1-DbDlyDJm.webp",
      "https://codesthinker.vercel.app/assets/nasateck2-DqM_Yt_h.webp",
      "https://codesthinker.vercel.app/assets/nasateck3-QpY_AutS.webp",
      "https://codesthinker.vercel.app/assets/nasateck3-QpY_AutS.webp",
    ],
  },
];


function ProjectCard({ project }) {
  const [selectedImage, setSelectedImage] = useState(project.images[0]);

  return (
    <article
      className="project-card [display:grid] [grid-template-columns:1fr_1fr] [align-items:center] [gap:25px] [background:white] [padding:15px] [border-radius:15px] [box-shadow:0_8px_25px_rgba(6,_1,_69,_0.07)] [transition:0.3s] [&:hover]:[transform:translateY(-4px)] [&:hover]:[box-shadow:0_12px_30px_rgba(6,_1,_69,_0.11)] max-[850px]:[grid-template-columns:1fr]"
    >

      <div className="project-gallery [height:365px] [overflow:hidden] [border:1px_solid_#dce3ef] [border-radius:12px] max-[850px]:[height:380px] max-[600px]:[height:310px]">
        <img
          src={selectedImage}
          alt={`${project.title} project preview`}
          className="[width:100%] [height:100%] [object-fit:cover]"
          loading="lazy"
        />
      </div>


      <div className="project-info [padding:10px] [&_h2]:[font-size:22px] [&_h2]:[color:#17213a] [&_h2]:[margin-bottom:12px] [&_p]:[font-size:14px] [&_p]:[color:#687084] [&_p]:[line-height:1.7] [&_p]:[margin-bottom:15px] max-[600px]:[&_h2]:[font-size:19px]">

        <h2>{project.title}</h2>

        <p>{project.description}</p>

        <div className="[display:flex] [align-items:center] [gap:12px] [margin-bottom:18px] [overflow-x:auto]">

          {project.images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedImage(image)}
              aria-label={`Show image ${index + 1} for ${project.title}`}
              aria-pressed={selectedImage === image}
              className={`[width:85px] [height:85px] [flex-shrink:0] [overflow:hidden] [border:2px_solid_transparent] [border-radius:12px] [padding:0] [cursor:pointer] ${
                selectedImage === image
                  ? "[border-color:#1746a2]"
                  : ""
              }`}
            >
              <img
                src={image}
                alt=""
                className="[width:100%] [height:100%] [object-fit:cover]"
                loading="lazy"
              />
            </button>
          ))}

        </div>

        <div className="project-tech [color:#687084] [font-size:12px] [margin-bottom:18px]">
          {project.tech}
        </div>

        <a
          href="/contact"
          className="project-button [display:inline-flex] [align-items:center] [gap:12px] [padding:12px_20px] [background:#1746a2] [color:white] [text-decoration:none] [border-radius:25px] [font-size:13px] [font-weight:600] [transition:0.3s] [&:hover]:[background:#060145] [&:hover]:[transform:translateY(-2px)]"
        >
          View Project
          <span>→</span>
        </a>

      </div>
    </article>
  );
}


export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filters = [
    "All",
    "Website Development",
    "UI/UX",
    "App Development",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projectData
      : projectData.filter(
          (project) => project.category === activeFilter
        );

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 5);

  return (
    <section className="projects-section [width:100%] [padding:55px_0_85px] [background:linear-gradient(_110deg,_#f5f8ff_0%,_#eef3ff_100%_)] [font-family:'Poppins',_sans-serif] [color:#060145] max-[600px]:[padding:45px_0_65px]">

      <div className="projects-container [width:88%] [max-width:1150px] [margin:auto] max-[850px]:[width:92%]">

        <div className="projects-heading [text-align:center] [margin-bottom:45px] [&_h1]:[font-size:32px] [&_h1]:[color:#17213a] [&_h1]:[margin-bottom:10px] [&_p]:[font-size:14px] [&_p]:[color:#596579] max-[600px]:[&_h1]:[font-size:27px]">
          <h1>Project Section</h1>

          <p>
            Explore a range of projects we've worked on across
            web, mobile, and design.
          </p>
        </div>

        <div className="project-filters [display:flex] [justify-content:center] [align-items:center] [flex-wrap:wrap] [gap:20px] [margin-bottom:55px] [&_button]:[border:none] [&_button]:[background:transparent] [&_button]:[padding:13px_22px] [&_button]:[border-radius:8px] [&_button]:[color:#252c3c] [&_button]:[font-family:inherit] [&_button]:[font-size:14px] [&_button]:[font-weight:600] [&_button]:[cursor:pointer] [&_button]:[transition:0.3s] [&_button:hover]:[background:#1746a2] [&_button:hover]:[color:white] [&_button.active]:[background:#1746a2] [&_button.active]:[color:white] max-[600px]:[gap:8px] max-[600px]:[margin-bottom:35px] max-[600px]:[&_button]:[padding:10px_13px] max-[600px]:[&_button]:[font-size:12px]">
          {filters.map((filter) => (
            <button
              key={filter}
              className={
                activeFilter === filter ? "active" : ""
              }
              onClick={() => {
                setActiveFilter(filter);
                setShowAll(false);
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-list [display:flex] [flex-direction:column] [gap:35px]">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {filteredProjects.length > 5 && (
          <div className="projects-more [text-align:center] [margin-top:45px] [&_button]:[border:none] [&_button]:[background:#1746a2] [&_button]:[color:white] [&_button]:[padding:14px_28px] [&_button]:[border-radius:30px] [&_button]:[font-family:inherit] [&_button]:[font-size:14px] [&_button]:[font-weight:600] [&_button]:[cursor:pointer] [&_button]:[transition:0.3s] [&_button:hover]:[background:#060145] [&_button:hover]:[transform:translateY(-3px)] [&_button_span]:[margin-left:10px]">

            <button
              onClick={() => setShowAll(!showAll)}
            >
              {showAll
                ? "Show Less"
                : "View More Projects"}

              <span>
                {showAll ? "↑" : "↓"}
              </span>
            </button>

          </div>
        )}

      </div>
    </section>
  );
}
