import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const services = [
  {
    id: 1, title: "Website Development",
    image: "https://codesthinker.vercel.app/assets/website-BjNMHOcI.webp",
    text: "Custom, responsive websites designed to meet your business needs and provide an excellent user experience.",
    features: [
      ["Responsive design", "Layouts that look great on every screen size."],
      ["Fast performance", "Optimized code and assets for quick load times."],
      ["SEO-ready", "Clean structure that search engines love."],
      ["Custom features", "Built around your business, not a template."],
      ["Ongoing support", "We stay with you after launch."],
    ],
  },
  {
    id: 2, title: "App Development",
    image: "https://codesthinker.vercel.app/assets/app-DKPPLQo7.webp",
    text: "High-quality mobile apps for iOS and Android that deliver seamless performance and great user experience.",
    details: "We develop high-performance mobile applications for Android and iOS using native and cross-platform frameworks. Our team focuses on creating intuitive interfaces and seamless functionality, ensuring your app delivers excellent user engagement and business value. From concept to deployment, we handle the entire development lifecycle efficiently.",
    features: [
      ["Cross-platform support", "One codebase that runs smoothly on Android and iOS."],
      ["Smooth UX/UI", "Clean, intuitive interfaces that keep users engaged."],
      ["Secure coding", "Best practices that protect user data."],
      ["Push notifications", "Timely alerts that bring users back."],
      ["App store deployment", "We handle submission and launch on both stores."],
    ],
  },
  {
    id: 3, title: "DevOps & Cloud",
    image: "https://codesthinker.vercel.app/assets/devopsclouds-Ce3J8yuA.webp",
    text: "Automate deployments, improve scalability, and reduce downtime with our DevOps and cloud solutions.",
    features: [
      ["CI/CD pipelines", "Automated builds, tests and releases."],
      ["Cloud migration", "Move to AWS, Azure or GCP with minimal downtime."],
      ["Auto-scaling", "Resources that grow with your traffic."],
      ["Monitoring", "Alerts and dashboards to catch issues early."],
      ["Cost optimization", "Pay only for what you actually use."],
    ],
  },
  {
    id: 4, title: "Machine Learning",
    image: "https://codesthinker.vercel.app/assets/machinelearning-Bi4qzqVc.webp",
    text: "Leverage AI and machine learning to automate processes, analyze data, and improve decision-making.",
    features: [
      ["Predictive models", "Forecast trends from your own data."],
      ["Data analysis", "Turn raw data into clear insights."],
      ["Automation", "Replace repetitive manual work with AI."],
      ["NLP & vision", "Text and image understanding solutions."],
      ["Model deployment", "Production-ready, scalable AI services."],
    ],
  },
  {
    id: 5, title: "Blockchain",
    image: "https://codesthinker.vercel.app/assets/blockchain-B7vJ62G_.webp",
    text: "Secure and transparent blockchain solutions for smart contracts, decentralized apps, and more.",
    features: [
      ["Smart contracts", "Audited, reliable on-chain logic."],
      ["dApp development", "Decentralized apps with great UX."],
      ["Token creation", "Custom tokens and wallet integration."],
      ["Security audits", "Find vulnerabilities before launch."],
      ["Transparency", "Verifiable, tamper-resistant records."],
    ],
  },
  {
    id: 6, title: "Website Hosting",
    image: "https://codesthinker.vercel.app/assets/websitehosting-D8O720jO.webp",
    text: "Reliable and secure web hosting services with high uptime and technical support to keep your site running smoothly.",
    features: [
      ["High uptime", "Dependable servers that stay online."],
      ["SSL & security", "Free certificates and threat protection."],
      ["Daily backups", "Restore your site whenever needed."],
      ["Fast servers", "Optimized for speed and performance."],
      ["Technical support", "Help whenever you need it."],
    ],
  },
  {
    id: 7, title: "WordPress Development",
    image: "https://codesthinker.vercel.app/assets/wordpressdevelopment-D_TRBvCS.webp",
    text: "Custom WordPress websites with modern themes, powerful plugins, and SEO optimization.",
    features: [
      ["Custom themes", "Designs made specifically for your brand."],
      ["Plugin development", "Extend WordPress with tailored features."],
      ["WooCommerce", "Online stores that are easy to manage."],
      ["SEO optimized", "Built to rank from day one."],
      ["Easy management", "Update your content without code."],
    ],
  },
  {
    id: 8, title: "SEO Optimization",
    image: "https://codesthinker.vercel.app/assets/seo-CuRlNhBu.webp",
    text: "Improve your website's ranking and visibility with proven SEO techniques and strategies.",
    features: [
      ["Keyword research", "Target what your customers search for."],
      ["On-page SEO", "Optimized titles, content and structure."],
      ["Technical SEO", "Speed, crawling and indexing fixes."],
      ["Link building", "Quality backlinks that build authority."],
      ["Monthly reports", "Clear tracking of your progress."],
    ],
  },
  {
    id: 9, title: "UI/UX",
    image: "https://codesthinker.vercel.app/assets/uiux-CArZeEEN.webp",
    text: "Design interfaces that are beautiful, user-friendly, and focused on conversion and engagement.",
    features: [
      ["User research", "Design decisions based on real needs."],
      ["Wireframes", "Clear layouts before development starts."],
      ["Prototyping", "Interactive previews you can test."],
      ["Visual design", "Modern, on-brand interfaces."],
      ["Usability testing", "Refine the experience with feedback."],
    ],
  },
  {
    id: 10, title: "Graphic Designing",
    image: "https://codesthinker.vercel.app/assets/graphic-0JyrJRTE.webp",
    text: "Eye-catching graphics that represent your brand identity and convey your message effectively.",
    features: [
      ["Logo design", "A memorable identity for your brand."],
      ["Brand kits", "Consistent colors, fonts and style."],
      ["Social media graphics", "Posts that stand out in the feed."],
      ["Print design", "Brochures, cards and banners."],
      ["Fast revisions", "Changes made until you're happy."],
    ],
  },
  {
    id: 11, title: "Digital Marketing",
    image: "https://codesthinker.vercel.app/assets/digital-XiAkE5kn.webp",
    text: "Boost your online presence through targeted campaigns and multichannel marketing strategies.",
    features: [
      ["Social media marketing", "Grow and engage your audience."],
      ["Paid ads", "Google and Meta campaigns that convert."],
      ["Email marketing", "Automated campaigns that nurture leads."],
      ["Content strategy", "Content that attracts and retains."],
      ["Analytics", "Measure what works and improve it."],
    ],
  },
  {
    id: 12, title: "Lead Generation",
    image: "https://codesthinker.vercel.app/assets/leadgeneration-BXVzabvk.webp",
    text: "Generate high-quality leads with targeted campaigns and data-driven marketing strategies.",
    features: [
      ["Targeted outreach", "Reach the right people at the right time."],
      ["Landing pages", "Pages designed to turn visitors into leads."],
      ["Lead qualification", "Focus on prospects likely to buy."],
      ["CRM integration", "Leads flow straight into your pipeline."],
      ["Conversion tracking", "Know exactly where leads come from."],
    ],
  },
  {
    id: 13, title: "Video Editing",
    image: "https://codesthinker.vercel.app/assets/videoeditings-Lo-L-Faw.webp",
    text: "Professional video editing for marketing, branding, tutorials, and more.",
    features: [
      ["Promo videos", "Short, punchy videos that sell."],
      ["Motion graphics", "Animated titles and visuals."],
      ["Color grading", "A polished, cinematic look."],
      ["Sound design", "Clean audio and music mixing."],
      ["Fast turnaround", "Delivered on time, every time."],
    ],
  },
  {
    id: 14, title: "Code Calling",
    image: "https://codesthinker.vercel.app/assets/codecalling-CyN5yfeL.webp",
    text: "Real-time expert coding assistance and live debugging for quick issue resolution.",
    features: [
      ["Live debugging", "Fix bugs together in real time."],
      ["Expert developers", "Experienced help across many stacks."],
      ["Code review", "Feedback to improve quality and security."],
      ["Quick response", "Get unblocked fast."],
      ["Screen sharing", "Clear, hands-on guidance."],
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="services-hero [display:grid] [grid-template-columns:1.2fr_1fr] [align-items:center] [gap:40px] [padding:60px_5%_40px] max-[768px]:[grid-template-columns:1fr]">
        <div className="services-hero-text [&_h1]:[font-size:56px] [&_h1]:[line-height:1.1] [&_h1]:[color:#111] [&_h1]:[margin-bottom:20px] [&_h1_span]:[color:#0b3fb5] [&_p]:[font-size:15px] [&_p]:[line-height:1.7] [&_p]:[color:#333] [&_p]:[margin-bottom:26px] [&_p]:[max-width:620px] [&_.service-btn]:[align-self:auto] max-[768px]:[&_h1]:[font-size:38px]">
          <h1>
            Perfect It <span>Solutions</span> Business
          </h1>
          <p>
            Perfect IT Solutions provides expert services in software
            development, IT consulting, cloud solutions, network security,
            data management, technical support, web design, and system
            integration to empower business growth and efficiency.
          </p>
          <Link to="/contact" className="service-btn [align-self:center] [display:inline-block] [padding:10px_28px] [border-radius:999px] [background:linear-gradient(135deg,_#0a1450,_#0b3fb5)] [color:#fff] [font-weight:600] [text-decoration:none] [&:focus-visible]:[outline:3px_solid_#0b5ed7] [&:focus-visible]:[outline-offset:3px]">
            Contact Us
          </Link>
        </div>

        <div className="services-hero-img [&_img]:[width:100%] [&_img]:[max-height:380px] [&_img]:[object-fit:contain]"></div>
      </section>

      <section className="services-latest [padding:40px_5%_60px]">
        <h2 className="services-heading [text-align:center] [font-size:34px] [margin-bottom:40px] [color:#111]">Latest Services</h2>

        <div className="services-grid [display:grid] [grid-template-columns:repeat(2,_1fr)] [gap:28px] [max-width:1100px] [margin:0_auto] max-[768px]:[grid-template-columns:1fr]">
          {services.map((service) => (
            <article className="service-card [display:flex] [flex-direction:column] [background:#fff] [padding:14px_14px_22px] [border-top:3px_solid_#0b5ed7] [border-bottom:3px_solid_#0b5ed7] [border-radius:10px] [box-shadow:0_2px_8px_rgba(0,_0,_0,_0.08)] [transition:transform_0.25s_ease,_box-shadow_0.25s_ease] [&:hover]:[transform:translateY(-8px)] [&:hover]:[box-shadow:0_14px_28px_rgba(11,_30,_110,_0.18)] [&_h3]:[margin:16px_0_8px] [&_h3]:[font-size:20px] [&_h3]:[color:#111] [&_p]:[flex:1] [&_p]:[margin:0_0_18px] [&_p]:[font-size:14px] [&_p]:[line-height:1.6] [&_p]:[color:#555] motion-reduce:[transition:none]" key={service.id}>
              <img
                className="service-card-img [width:100%] [height:190px] [object-fit:cover] [border-radius:6px]"
                src={service.image}
                alt={service.title}
                loading="lazy"
              />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link
                className="service-btn [align-self:center] [display:inline-block] [padding:10px_28px] [border-radius:999px] [background:linear-gradient(135deg,_#0a1450,_#0b3fb5)] [color:#fff] [font-weight:600] [text-decoration:none] [&:focus-visible]:[outline:3px_solid_#0b5ed7] [&:focus-visible]:[outline-offset:3px]"
                to={`/services-detail/${service.id}`}
              >
                Learn More
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <section className="[padding:80px_5%] [text-align:center]">
        <h2 className="[font-size:30px] [margin-bottom:20px]">Service not found</h2>
        <Link
          to="/services"
          className="[display:inline-block] [padding:10px_28px] [border-radius:999px] [background:linear-gradient(135deg,_#0a1450,_#0b3fb5)] [color:#fff] [font-weight:600] [text-decoration:none]"
        >
          Back to Services
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="[display:grid] [grid-template-columns:1fr_1fr] [align-items:center] [gap:50px] [max-width:1200px] [margin:0_auto] [padding:60px_5%_30px] max-[768px]:[grid-template-columns:1fr] max-[768px]:[gap:24px]">
        <img
          src={service.image}
          alt={service.title}
          className="[width:100%] [max-height:380px] [object-fit:cover] [border-radius:14px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.15)]"
        />
        <div>
          <h1 className="[font-size:40px] [color:#111] [margin-bottom:18px] max-[768px]:[font-size:30px]">
            {service.title}
          </h1>
          <p className="[font-size:16px] [line-height:1.8] [color:#444] [text-align:left] [margin-bottom:28px]">
            {service.details || service.text}
          </p>
          <Link
            to="/contact"
            className="[display:inline-block] [padding:10px_28px] [border-radius:999px] [background:linear-gradient(135deg,_#0a1450,_#0b3fb5)] [color:#fff] [font-weight:600] [text-decoration:none] [&:focus-visible]:[outline:3px_solid_#0b5ed7] [&:focus-visible]:[outline-offset:3px]"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      <section className="[max-width:1200px] [margin:0_auto] [padding:30px_5%_60px]">
        <h2 className="[font-size:30px] [color:#111] [margin-bottom:8px]">
          Why Choose Us for {service.title}?
        </h2>
        <p className="[color:#555] [margin-bottom:32px]">
          We offer expert-level {service.title.toLowerCase()} services with results that speak for themselves.
        </p>

        <div className="[display:flex] [flex-wrap:wrap] [justify-content:center] [gap:24px]">
          {service.features.map(([title, text]) => (
            <div
              key={title}
              className="[flex:1_1_300px] [max-width:360px] [padding:22px] [border-radius:12px] [color:#fff] [background:linear-gradient(135deg,_#0a2a7a,_#0b5ed7)] [box-shadow:0_2px_8px_rgba(0,_0,_0,_0.15)] [transition:transform_0.25s_ease,_box-shadow_0.25s_ease] [&:hover]:[transform:translateY(-6px)] [&:hover]:[box-shadow:0_14px_28px_rgba(11,_30,_110,_0.3)] motion-reduce:[transition:none]"
            >
              <h3 className="[font-size:20px] [margin-bottom:10px]">{title}</h3>
              <p className="[font-size:14px] [line-height:1.6] [opacity:0.9]">{text}</p>
            </div>
          ))}
        </div>

        <div className="[text-align:center] [margin-top:50px]">
          <Link
            to="/contact"
            className="[display:inline-block] [padding:12px_34px] [border-radius:999px] [background:linear-gradient(135deg,_#0a1450,_#0b3fb5)] [color:#fff] [font-weight:600] [text-decoration:none]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}