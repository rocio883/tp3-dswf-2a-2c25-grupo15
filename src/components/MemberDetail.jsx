import { Link, useParams } from "react-router-dom";
import "../styles/style.css";

import jonSnow from "../assets/jon-snow.jpg";
import daenerys from "../assets/daenerys-targaryen.jpg";
import jaime from "../assets/jaime-lannister.jpeg";
import tyrion from "../assets/tyrion-lannister.jpg";

import ProgressBar from "./ProgressBar";

function MemberDetail() {
  const { id } = useParams();

  const members = {
    1: {
      name: "Jon Snow",
      image: jonSnow,
      location: "Winterfell - 24 años",
      skills: ["Javascript", "MySQL", "NodeJs", "C# .NET"],
      skillsLevel: {
        Javascript: 85,
        MySQL: 70,
        "NodeJs": 80,
        "C# .NET": 60,
      },
      movies: ["Interstellar", "Good Will Hunting", "El Padrino"],
      music: ["José Larralde", "Soledad", "Joaquín Sabina"],
      quote: "Quiero pelear del lado que pelea por los que viven.",
    },
    2: {
      name: "Daenerys Targaryen",
      image: daenerys,
      location: "Essos - 22 años",
      skills: ["HTML", "CSS", "React", "JavaScript"],
      skillsLevel: {
        HTML: 85,
        CSS: 70,
        React: 65,
        JavaScript: 75,
      },
      movies: ["El Señor de los Anillos", "Matrix", "Avatar"],
      music: ["Coldplay", "Imagine Dragons", "The Weeknd"],
      quote:
        "Cuando mis dragones crezcan, vamos a recuperar lo que me robaron y destruiremos a aquellos que me hicieron daño!",
    },
    3: {
      name: "Jaime Lannister",
      image: jaime,
      location: "Casterly Rock - 32 años",
      skills: ["Figma", "Adobe XD", "Sketch", "Photoshop"],
      skillsLevel: {
        Figma: 65,
        "Adobe XD": 70,
        Sketch: 65,
        Photoshop: 75,
      },
      movies: ["Depredador", "Lo que el viento se llevo", "Das Boot"],
      music: ["Jorge Cafrune y Marito", "Los Kjarkas", "Jose Luis Perales"],
      quote:
        "Los héroes siempre serán recordados. Los mejores y los peores. Y algunos que fueron un poco de ambos.",
    },
    4: {
      name: "Tyrion Lannister",
      image: tyrion,
      location: "Casterly Rock - 32 años",
      skills: ["Selenium", "Jest", "Cypress", "Postman"],
      skillsLevel: {
        Selenium: 65,
        Jest: 70,
        Cypress: 55,
        Postman: 85,
      },
      movies: ["Forrest Gump", "Pulp Fiction", "El Club de la Pelea"],
      music: ["Frank Sinatra", "Dean Martin", "Nat King Cole"],
      quote:
        "Nunca olvides lo que eres. El resto del mundo no lo hará. Úsalo como una armadura y nunca podrá usarse para hacerte daño.",
    },
  };

  const member = members[id];

  const showQuote = () => {
    alert(`Frase de ${member.name}:\n\n"${member.quote}"`);
  };

  if (!member) {
    return <div>Miembro no encontrado</div>;
  }

  return (
    <div className="member-page">
      <div className="member-card">
        <div className="member-photo">
          <img src={member.image} alt={member.name} />
        </div>
        <h2>{member.name}</h2>
        <p className="member-subtitle">{member.location}</p>

        <div className="member-information">
          <h3>Habilidades</h3>

          <div className="skills-container">
            {member.skills.map((skill, index) => {
              const percent = member.skillsLevel?.[skill] || 0;
              return (
                <div key={index} className="skill-row">
                  <span className="skill-name">{skill}</span>

                  <div className="skill-bar-wrapper">
                    <div className="skill-bar">
                      <ProgressBar label="" percent={percent} />
                    </div>
                    <span className="skill-percent">{percent}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="member-information">
          <h3>Películas favoritas</h3>
          <ul>
            {member.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>

        <div className="member-information">
          <h3>Música favorita</h3>
          <ul>
            {member.music.map((artist, index) => (
              <li key={index}>{artist}</li>
            ))}
          </ul>
        </div>

        <div className="member-buttons">
          <button onClick={showQuote} className="btn">
            Mi frase
          </button>
          <Link to="/" className="btn">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MemberDetail;
