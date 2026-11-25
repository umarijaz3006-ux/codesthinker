
import { Routes, Route } from "react-router-dom";

import Navbar from "./Common/Navbar.jsx";
import Footer from "./Common/Footer.jsx";
import { HomePage } from "./homepages/Home.jsx";
import About from "./pages/About/index.jsx";
import Services, { ServiceDetail } from "./pages/Services";
import Projects from "./pages/Projects/index.jsx";
import Team from "./pages/Team/index.jsx";
import Contact from "./pages/Contact/index.jsx";
import Login from "./pages/Login/index.jsx";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services-detail/:id" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <section className="page-header">
                <h1>Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
                <Link
                  to="/"
                  className="btn btn-primary [display:inline-block] [padding:11px_28px] [border-radius:999px] [font-weight:500]"
                >
                  Back to Home
                </Link>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
