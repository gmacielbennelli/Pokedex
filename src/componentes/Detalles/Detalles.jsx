import React, { useState, useEffect } from "react";
import Pokedex from "../Pokedex/Pokedex";
import "./Detalles.css";
import flecha from "../../imagenes/arrow-left.svg";
import { useParams } from "react-router-dom";

const Detalles = (props) => {
  let { nombreEnUrl } = useParams();
  const imagen = require(`../../imagenes/${pokemon.nombre.toLowerCase()}.png`);
  const pokemon = props.pokemones.find(
    (elem) => nombreEnUrl.toLowerCase() === elem.nombre.toLowerCase()
  );

  return (
    <div
      className="contenedor-detalles"
      style={{ backgroundColor: pokemon.color }}
    >
      <div className="nombre-id">
        <img src={flecha} alt="flecha" className="imagen-flecha" />
        <h3>{pokemon.nombre}</h3>
        <h2>{pokemon.id}</h2>
      </div>
      <div className="foto-pokemon">
        <img src={imagen} alt="foto-pokemon" />
      </div>
      <div className="contenedor-informacion-pokemon">
        <div className="tipo-pokemon">
          <h3>{pokemon.tipo}</h3>
          <h2 className="titulo-verde">About</h2>
        </div>
        <div className="peso-altura-moves">
          <h3>
            {pokemon.peso} <br /> Weight
          </h3>
          <h3>
            {pokemon.altura} <br /> Height
          </h3>
          <h3>
            {pokemon.movimiento} <br /> Moves
          </h3>
        </div>
        <div className="descripcion-base-stats">
          <p>{pokemon.descripcion}</p>
          <h2 className="titulo-verde">Base Stats</h2>
        </div>
        <div className="ataque-defensa">
          <h3>HP {pokemon.HP}</h3>
          <h3>ATK {pokemon.ATK}</h3>
          <h3>DEF {pokemon.DEF}</h3>
          <h3>SATK {pokemon.SATK}</h3>
          <h3>SDEF {pokemon.SDEF}</h3>
          <h3>SPD {pokemon.SPD}</h3>
        </div>
      </div>
    </div>
  );
};

export default Detalles;
