import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/style.css";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Se resetea el scroll a la parte superior cuando cambiamos de ruta
    if (location.pathname !== "/") {
      window.scrollTo(0, 0);
      // Limpiamos seccion activa para que no quede marcada
      setActiveSection("");
    }
  }, [location.pathname]);

  // Cerrar menú cuando cambia la ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleHomeClick = (e) => {
    e.preventDefault();
    setActiveSection("home");
    setIsMenuOpen(false);
    // Si no estamos en Home, navegamos ahi primero
    if (location.pathname !== "/") {
      navigate("/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTeam = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        setActiveSection("team");
        const teamSection = document.getElementById("team");
        if (teamSection) {
          teamSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      setActiveSection("team");
      const teamSection = document.getElementById("team");
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        className="hamburger-button"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={isMenuOpen ? "open" : ""}></span>
        <span className={isMenuOpen ? "open" : ""}></span>
        <span className={isMenuOpen ? "open" : ""}></span>
      </button>

      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

      <aside className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="sidebar-logo">
          <img
            src="/grupo-15-logo.png"
            alt="Grupo 15 logo"
            className="logo-image"
          />
          <h2>GRUPO 15</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link
                to="/"
                className={
                  location.pathname === "/" && activeSection === "home"
                    ? "active"
                    : ""
                }
                onClick={handleHomeClick}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/project-log"
                className={location.pathname === "/project-log" ? "active" : ""}
              >
                Bitácora
              </Link>
            </li>
            <li>
              <a
                href="#team"
                onClick={scrollToTeam}
                className={
                  location.pathname === "/" && activeSection === "team"
                    ? "active"
                    : ""
                }
              >
                Nosotros
              </a>
            </li>
            <li>
              <Link
                to="/houses"
                className={location.pathname === "/houses" ? "active" : ""}
              >
                Casas
              </Link>
            </li>
            <li>
              <Link
                to="/characters"
                className={location.pathname === "/characters" ? "active" : ""}
              >
                Personajes
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
