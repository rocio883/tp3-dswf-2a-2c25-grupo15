import { useState, useEffect } from "react";
import housesData from "../data/houses.json";
import "../styles/style.css";

function Houses() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    setHouses(housesData);
  }, []);

  return (
    <section className="houses-section">
      <h2>LA LUCHA POR EL TRONO</h2>
      <p className="houses-intro">
        20 casas, un solo trono. Conocé la informacion de cada casa, y elegí a
        cuál vas a apoyar!
      </p>

      <div className="houses-grid">
        {houses.map((house) => (
          <div key={house.id} className="house-card">
            <h3>{house.name}</h3>
            <div className="house-info">
              <p>
                <strong>Región:</strong> {house.region}
              </p>
              <p>
                <strong>Sede:</strong> {house.seat}
              </p>
              <p>
                <strong>Lema:</strong> "{house.words}"
              </p>
              <p>
                <strong>Alianzas:</strong> {house.alliances}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Houses;
