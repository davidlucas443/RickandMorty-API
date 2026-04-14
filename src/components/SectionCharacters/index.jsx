import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Card } from "../Card";

export const SectionCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        console.log(res.data.results);
        setCharacters(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section className="section-characters">
      <h2>
        Nossos <span>Personagens</span>
      </h2>
      <div className="container-cards-characters">
        {characters.map((character) => (
          <Card
            image={character.image}
            name={character.name}
            species={character.species}
            status={character.status}
            location={character.origin.name}
          />
        ))}
      </div>
    </section>
  );
}