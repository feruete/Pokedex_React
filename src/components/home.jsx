import React from "react";
import "./home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import datos from "./datos.js";

function Home() {
  const [pokemons, setPokemons] = useState(datos);
  const [displayPokemons, setDisplayPokemons] = useState(pokemons);
  const [alphabetic, setAlphabetic] = useState(true);
  const [pokemonsFilterBackup, setPokemonsFilterBackup] =
    useState(displayPokemons);
  const [showButton, setShowButton] = useState(false);
  const [inputValue, setInputValue] = useState();

  const Searcher = (e) => {
    const pokemonsFilter = pokemons.filter((pokemon) => {
      if (e.target.value === "") {
        return true;
      } else if (
        pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
    setDisplayPokemons(pokemonsFilter);
    setPokemonsFilterBackup(pokemonsFilter);
    setInputValue(e.target.value);
  };

  const alphabeticSort = () => {
    setAlphabetic(!alphabetic);
    sort();
    setShowButton(!showButton);
  };

  const sort = () => {
    if (alphabetic) {
      const ordered = [...displayPokemons].sort((a, b) => {
        let fa = a.name,
          fb = b.name;

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      setDisplayPokemons(ordered);
    } else {
      setDisplayPokemons(pokemonsFilterBackup);
    }
  };
  const listCleaner = () => {
    setDisplayPokemons(pokemons);
    setInputValue("");
    setPokemonsFilterBackup(pokemons);
  };

  return (
    <div className="divFather">
      <header className="headerHome">
        <div className="imageH1HeaderContainer">
          <div className="imageLogoContainer">
            <img
              className="imageLogo"
              src="/images/Pokebola-png-0.png"
              alt="imageLogo"
            ></img>
          </div>
          <h1>Pokédex</h1>
        </div>
        <div onClick={alphabeticSort} className="arrowContainer">
          {showButton ? <h4>#</h4> : <h4>AZ</h4>}
          <div className="arrowImageContainer">
            <img src="/images/Arrow.svg" alt="arrow" />
          </div>
        </div>
      </header>
      <main className="homeMain">
        <input
          type="text"
          placeholder="Pokemon"
          onChange={Searcher}
          value={inputValue}
        />
        <button className="myButton" onClick={listCleaner}>
          <img src="/images/undo.png" alt="reset" />
        </button>
        <article className="cardsContainer">
          {displayPokemons?.map((Pokemon) => (
            <div className={Pokemon.type[0] + " cardHome"}>
              <div className="cardIdCardImageContainer">
                <p className="cardId"> {Pokemon.id} </p>
                <Link to={`/detail/${Pokemon.name.toLowerCase()}`}>
                  <img
                    className="cardImage"
                    src={Pokemon.image}
                    alt={Pokemon.name}
                  />
                </Link>
              </div>
              <div className="cardNameContainer">
                <p className="cardName"> {Pokemon.name} </p>
              </div>
            </div>
          ))}
        </article>
      </main>
    </div>
  );
}

export default Home;
