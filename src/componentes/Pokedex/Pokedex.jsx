import React, { useState } from "react";
import pokebola from "../../imagenes/Pokeball.png";
import flechaAZ from "../../imagenes/az.png";
import { Carta } from "../Carta/Carta";
import styles from "./Pokedex.css";

export const Pokedex = (props) => {
  const [lista, setLista] = useState(props.pokemones);

  const agregarPokemon = (nuevoPokemon) => {
    setLista(
      [...lista, nuevoPokemon].sort((x, y) => {
        if (x.pokemon.id < y.pokemon.id) {
          return -1;
        }
        if (y.pokemon.id > x.pokemon.id) {
          return 1;
        }
        return 0;
      })
    );
  };

  const cartaDetalles = () => {
    return lista.map((pokemon) => <Carta pokemon={pokemon} key={pokemon.id} />);
  };

  return (
    <div className="contenedor-pokedex">
      <nav>
        <img src={pokebola} alt="Pokebola" className="pokebola" />
        <h1>Pokédex</h1>
        <button id="botonOrdenar" onClick={() => null}>
          <img src={flechaAZ} alt="FlechaAZ" className="flecha-az" />
        </button>
      </nav>
      <div className="carta-detalles">
        <input
          type="text"
          className="input"
          name="name"
          placeholder="Procurar"
        />
      </div>
      <div className="box-cartas" id="box-cartas">
        {cartaDetalles()}
      </div>
    </div>
  );
};
