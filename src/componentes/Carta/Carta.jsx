import React from "react";
import { Link } from "react-router-dom";
import "./Carta.css";

export const Carta = (props) => {
  const imagen = require(`../../imagenes/${props.pokemon.nombre.toLowerCase()}.png`);
  return (
    <Link
      to={`/detalles-pokemon/${props.pokemon.nombre.toLowerCase()}`}
      className="carta"
      style={{ borderColor: props.pokemon.color, textDecoration: "none" }}
    >
      <div className="h3-r">
        {" "}
        <h3 className="id-carta" style={{ color: props.pokemon.color }}>
          {props.pokemon.id}
        </h3>{" "}
      </div>
      <img className="imagen-carta" src={imagen} />
      <h2 className="h2-carta" style={{ backgroundColor: props.pokemon.color }}>
        {" "}
        {props.pokemon.nombre}{" "}
      </h2>
    </Link>
  );
};
