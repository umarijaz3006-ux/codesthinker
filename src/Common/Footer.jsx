import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer [background:var(--blue-900)] [color:#fff] [padding:56px_8%_0]">
      <div className="footer-grid [display:grid] [grid-template-columns:1.5fr_1fr_1fr_1fr] [gap:32px] [&_h4]:[margin-bottom:12px] [&_a]:[display:block] [&_a]:[opacity:0.85] [&_a]:[margin-bottom:6px] [&_a]:[font-size:0.95rem] [&_span]:[display:block] [&_span]:[opacity:0.85] [&_span]:[margin-bottom:6px] [&_span]:[font-size:0.95rem] [&_a:hover]:[opacity:1] [&_a:hover]:[color:var(--sky)] max-[900px]:[grid-template-columns:1fr_1fr] max-[560px]:[grid-template-columns:1fr]">
        <div>
          <h4>Code's Thinker</h4>
          <p className="footer-about [margin-top:14px] [opacity:0.85] [font-size:0.95rem] [max-width:320px]">
            We design and build modern websites and software that bring your ideas to life.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Services</h4>
          <Link to="/services">Web Development</Link>
          <Link to="/services">UI / UX Design</Link>
          <Link to="/services">Software Development</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <span>info@codesthinker.com</span>
          <span>+92 300 0000000</span>
          <span>Pakistan</span>
        </div>
      </div>
      <div className="footer-bottom [margin-top:40px] [padding:18px_0] [border-top:1px_solid_rgba(255,_255,_255,_0.2)] [text-align:center] [font-size:0.85rem] [opacity:0.8]">
        © {new Date().getFullYear()} Code's Thinker. All rights reserved.
      </div>
    </footer>
  );
}          