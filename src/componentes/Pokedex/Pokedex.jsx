import React, { useState } from "react";
import pokebola from "../../imagenes/Pokeball.png";
import flechaAZ from "../../imagenes/az.png";
import { Carta } from "../Carta/Carta";
import styles from "./Pokedex.css";

export const Pokedex = (props) => {
  const [lista, setLista] = useState(props.pokemones);

  const ordenarPokemon = () => {
    setLista(
      [...lista].sort((x, y) => {
        return x.id.localeCompare(y.id);
      })
    );
  };

  const cartaDetalles = () => {
    return lista.map((pokemon) => <Carta pokemon={pokemon} key={pokemon.id} />);
  };

  const unaFunc = (ev) => {
    console.log(ev);
  };
  return (
    <div className="contenedor-pokedex">
      <nav>
        <img src={pokebola} alt="Pokebola" className="pokebola" />
        <h1>Pokédex</h1>
        <button id="botonOrdenar" onClick={ordenarPokemon}>
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
