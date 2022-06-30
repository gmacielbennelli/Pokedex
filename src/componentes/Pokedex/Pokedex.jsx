import React, { useState } from "react";
import pokebola from "../../imagenes/Pokeball.png";
import flechaAZ from "../../imagenes/az.png";
import { Carta } from "../Carta/Carta";
import styles from "./Pokedex.css";

export const Pokedex = (props) => {
  const [lista, setLista] = useState(props.pokemones);
  const [bandera, setBandera] = useState(true);

  const ordenarPokemon = () => {
    setLista(
      [...lista].sort((x, y) => {
        return x.id.localeCompare(y.id);
      })
    );
  };

  const onClickOrdenar = () => {
    setBandera(!bandera);
    if (bandera) {
      ordenarPokemon();
    } else {
      ordenarPokemonAlf();
    }
  };

  const ordenarPokemonAlf = () => {
    setLista(
      [...lista].sort((x, y) => {
        return x.nombre.localeCompare(y.nombre);
      })
    );
  };

  const filtrarPorNombre = (ev) => {
    setLista(
      [...props.pokemones].filter((x) => {
        return x.nombre.toLowerCase().includes(ev.target.value.toLowerCase());
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
        <button id="botonOrdenar" onClick={onClickOrdenar}>
          <img src={flechaAZ} alt="FlechaAZ" className="flecha-az" />
        </button>
      </nav>
      <div className="carta-detalles">
        <input
          onChange={filtrarPorNombre}
          type="text"
          className="input"
          name="name"
          placeholder="Buscar"
        />
      </div>
      <div className="box-cartas" id="box-cartas">
        {cartaDetalles()}
      </div>
    </div>
  );
};
