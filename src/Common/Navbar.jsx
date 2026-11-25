import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar [position:sticky] [top:0] [z-index:50] [display:flex] [align-items:center] [justify-content:space-between] [gap:24px] [padding:14px_32px] [background:var(--blue-900)] [color:#fff] max-[900px]:[padding:12px_20px] max-[900px]:[flex-wrap:wrap]">
      <Link to="/" className="logo [display:flex] [align-items:center] [gap:10px]">
        <span className="logo-mark [display:grid] [place-items:center] [width:46px] [height:46px] [border:4px_solid_#fff] [border-right-color:transparent] [border-radius:50%] [font-weight:700] [font-size:1.2rem] [color:#fff] [position:relative] [&_span]:[position:absolute] [&_span]:[color:var(--gold)] [&_span]:[font-size:1rem] [&_span]:[left:17px] [&_span]:[top:11px]">C<span>T</span></span>
        <span className="logo-text [display:flex] [flex-direction:column] [line-height:1.1] [&_strong]:[font-size:1.15rem] [&_strong]:[font-style:italic] [&_em]:[font-size:0.6rem] [&_em]:[background:var(--gold)] [&_em]:[color:var(--blue-900)] [&_em]:[padding:0_4px] [&_em]:[font-style:normal] [&_em]:[font-weight:600] [&_em]:[margin-top:2px]">
          <strong>Code's Thinker</strong>
          <em>Turn Ideas Into Reality</em>
        </span>
      </Link>

      <button className="nav-toggle [display:none] [background:none] [border:0] [cursor:pointer] [flex-direction:column] [gap:5px] [&_span]:[width:26px] [&_span]:[height:3px] [&_span]:[background:#fff] [&_span]:[border-radius:2px] max-[900px]:[display:flex]" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>

      <nav className={`nav-links ${open ? "open" : ""} [display:flex] [gap:28px] [font-weight:500] [&_a]:[padding:4px_0] [&_a]:[transition:color_0.2s] [&_a:hover]:[color:var(--sky)] [&_a.active]:[color:var(--sky)] max-[900px]:[display:none] max-[900px]:[width:100%] max-[900px]:[flex-direction:column] max-[900px]:[gap:14px] max-[900px]:[padding:12px_0] max-[900px]:[&.open]:[display:flex]`}>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={close}>
            {l.label}
          </NavLink>
        ))}
        <Link to="/login" className="btn-login mobile-only [border:1px_solid_#f4f7fc] [border-radius:999px] [padding:8px_26px] [font-weight:500] [transition:background_0.2s] [&:hover]:[background:var(--blue-700)] [display:none] max-[900px]:[display:inline-block] max-[900px]:[align-self:flex-start]" onClick={close}>Login</Link>
      </nav>

      <Link to="/login" className="btn-login desktop-only [border:1px_solid_#f4f7fc] [border-radius:999px] [padding:8px_26px] [font-weight:500] [transition:background_0.2s] [&:hover]:[background:var(--blue-700)] max-[900px]:[display:none]">Login</Link>
    </header>
  );
}      