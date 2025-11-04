import { Link } from "react-router-dom";
import "../styles/style.css";

import jonSnow from "../assets/jon-snow.jpg";
import daenerys from "../assets/daenerys-targaryen.jpg";
import jaime from "../assets/jaime-lannister.jpeg";
import tyrion from "../assets/tyrion-lannister.jpg";
import SocialButtons from "../components/SocialButtons";


function Home() {
  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("about-us");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="main-page">
        <div className="overlay"></div>
        <div className="main-text">
          <h1>Winter is coming...</h1>
          <p>Presentación del grupo 15 de Desarrollo Front End - 2A</p>
          <button onClick={scrollToAboutUs} className="btn">
            Conocenos
          </button>
        </div>
      </div>

      <section id="about-us" className="team-section">
        <h2>GRUPO 15</h2>
        <p>
          Nuestro grupo está comprometido con el desarrollo de proyectos web
          funcionales, pero que no pierdan la creatividad. Con este proyecto
          buscamos demostrar que podemos aplicar buenas prácticas de desarrollo
          y diseño, sin dejar de lado la estética y la interactividad, para
          lograr tanto funcionalidad como una visualización atractiva. Queremos
          también demostrar que sabemos trabajar en equipo, que cada uno aporte
          su experiencia y que nos ayudemos a ampliar nuestras capacidades y
          conocimientos.
        </p>
        <SocialButtons />

      </section>

      <section id="project-log" className="team-section">
        <h2>BITÁCORA DEL PROYECTO</h2>
        <p>
          En esta sección vamos a contar como nuestro grupo se fue forjando en
          medio de desafíos, alianzas y decisiones que marcaron nuestro rumbo.
          Cada etapa la realizamos como si estuvieramos en el consejo de
          Winterfell: discutimos diseños, colores y estructuras como si habría
          algún trono que disputar. Así, como en Game of Thrones cada casa
          defendia su estandarte, nosotros defendimos e implementamos ideas para
          que nuestra web sea digna de reinas y reyes. Te invitamos a conocer la
          bitácora más a fondo!
        </p>
        <Link to="/project-log" className="btn">
          Ver bitácora completa
        </Link>
      </section>

      <section id="team" className="team-section">
        <h2>NOSOTROS</h2>
        <div className="team-cards">
          <TeamCard
            image={jonSnow}
            name="Jon Snow"
            role="Desarrollador backend"
            memberId="1"
          />
          <TeamCard
            image={daenerys}
            name="Daenerys Targaryen"
            role="Desarrolladora frontend"
            memberId="2"
          />
          <TeamCard
            image={jaime}
            name="Jaime Lannister"
            role="Diseñador UX/UI"
            memberId="3"
          />
          <TeamCard
            image={tyrion}
            name="Tyrion Lannister"
            role="QA/Testing"
            memberId="4"
          />
        </div>
      </section>
    </>
  );
}

function TeamCard({ image, name, role, memberId }) {
  return (
    <div className="team-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
      <Link to={`/member/${memberId}`} className="btn">
        Descubrir mi historia
      </Link>
    </div>
  );
}

export default Home;
