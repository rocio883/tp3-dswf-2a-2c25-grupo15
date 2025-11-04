import { useState, useEffect } from "react";
import "../styles/style.css";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        // Esperamos la respuesta y le pegamos a la api de GoT
        const response = await fetch(
          "https://thronesapi.com/api/v2/Characters",
        );

        if (!response.ok) {
          throw new Error("Error al cargar los personajes");
        }
        const data = await response.json();
        // Limitamos los personajes a 20
        setCharacters(data.slice(0, 20));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return (
      <section className="characters-section">
        <div className="loading">Cargando personajes...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="characters-section">
        <div className="error">Error: {error}</div>
      </section>
    );
  }

  return (
    <section className="characters-section">
      <h2>PERSONAJES DE GAME OF THRONES</h2>
      <p className="characters-intro">
        Data obtenida de la API pública "Game of Thrones Character Api"
      </p>

      <div className="characters-grid">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <div className="character-image">
              <img src={character.imageUrl} alt={character.fullName} />
            </div>
            <div className="character-info">
              <h3>{character.fullName}</h3>
              <p>
                <strong>Título:</strong> {character.title}
              </p>
              <p>
                <strong>Familia:</strong> {character.family}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Characters;
