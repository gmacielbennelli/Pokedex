import React, { useState, useEffect } from "react";
import Pokedex from "../Pokedex/Pokedex";
import "./Detalles.css";
import flecha from "../../imagenes/arrow-left.svg";
import flechaDerecha from "../../imagenes/Frame.svg";
import flechaIzquierda from "../../imagenes/Frame.svg";

import { Link, useParams } from "react-router-dom";

const Detalles = (props) => {
  let { nombreEnUrl } = useParams();

  const pokemonIndex = props.pokemones.findIndex(
    (elem) => nombreEnUrl.toLowerCase() === elem.nombre.toLowerCase()
  );
  const pokemon = props.pokemones[pokemonIndex];

  const imagen = require(`../../imagenes/${pokemon.nombre.toLowerCase()}.png`);

  return (
    <div
      className="contenedor-detalles"
      style={{ backgroundColor: pokemon.color }}
    >
      <div className="nombre-id">
        <img src={flecha} alt="flecha" className="imagen-flecha" />
        <h3>{pokemon.nombre}</h3>
        <h2 style={{ color: "white" }}>{pokemon.id}</h2>
      </div>
      <div className="foto-pokemon">
        {pokemonIndex !== 0 && (
          <Link
            to={`/detalles-pokemon/${props.pokemones[
              pokemonIndex - 1
            ].nombre.toLowerCase()}`}
          >
            <img
              src={flechaIzquierda}
              alt="flecha"
              className="imagen-flecha"
              style={{ transform: "rotate(180deg)" }}
            />
          </Link>
        )}
        <img src={imagen} alt="foto-pokemon" />
        {pokemonIndex !== props.pokemones.length - 1 && (
          <Link
            to={`/detalles-pokemon/${props.pokemones[
              pokemonIndex + 1
            ].nombre.toLowerCase()}`}
          >
            <img src={flechaDerecha} alt="flecha" className="imagen-flecha" />
          </Link>
        )}
      </div>
      <div className="contenedor-informacion-pokemon">
        <div className="tipo-pokemon">
          <h3 style={{ backgroundColor: pokemon.color, color: "white" }}>
            {pokemon.tipo}
          </h3>
          <h2 className="titulo-verde" style={{ color: pokemon.color }}>
            About
          </h2>
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
          <h2 className="titulo-verde" style={{ color: pokemon.color }}>
            Base Stats
          </h2>
        </div>
        <div className="ataque-defensa">
          <h3 style={{ color: pokemon.color }}>HP {pokemon.HP} </h3>
          <h3 style={{ color: pokemon.color }}>ATK {pokemon.ATK} </h3>
          <h3 style={{ color: pokemon.color }}>DEF {pokemon.DEF} </h3>
          <h3 style={{ color: pokemon.color }}>SATK {pokemon.SATK} </h3>
          <h3 style={{ color: pokemon.color }}>SDEF {pokemon.SDEF} </h3>
          <h3 style={{ color: pokemon.color }}>SPD {pokemon.SPD} </h3>
        </div>
      </div>
    </div>
  );
};

export default Detalles;
