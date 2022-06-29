import React, { useState } from "react";
import "./App.css";
import { Pokedex } from "./componentes/Pokedex/Pokedex";
import { Carta } from "./componentes/Carta/Carta";
import Detalles from "./componentes/Detalles/Detalles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const pokemonesObject = [
    {
      nombre: "Bulbasaur",
      imagen: "./imagenes/bulbasaur.png",
      id: "#001",
      color: "#74CB48",
      tipo: "Grass Poison",
      peso: "6,9 kg",
      altura: "0,7 metros",
      movimiento: "chlorophyll  overgrow",
      descripcion:
        "There is a plant seed on its back right from the day this pokemon is born. The seed slowly grows larger.",
      HP: 45,
      ATK: 49,
      DEF: 49,
      SATK: 65,
      SDEF: 65,
      SPD: 45,
    },
    {
      nombre: "Squirtle",
      imagen: "./imagenes/squirtle.png",
      id: "#007",
      color: "#6493EB",
      tipo: "Water",
      peso: "9 kg",
      altura: "0,5 metros",
      movimiento: "torrent rain-dish",
      descripcion:
        "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
      HP: 44,
      ATK: 48,
      DEF: 65,
      SATK: 50,
      SDEF: 64,
      SPD: 43,
    },
    {
      nombre: "Pikachu",
      imagen: "./imagenes/pikachu.png",
      id: "#025",
      color: "#F9CF30",
      tipo: "Electric",
      peso: "6 kg",
      altura: "0,4 metros",
      movimiento: "mega-punch pay-day",
      descripcion:
        "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
      HP: 35,
      ATK: 55,
      DEF: 40,
      SATK: 50,
      SDEF: 50,
      SPD: 90,
    },
    {
      nombre: "Mew",
      imagen: "./imagenes/mew.png",
      id: "#152",
      color: "#FB5584",
      tipo: "Psychic",
      peso: "4 kg",
      altura: "0,4 metros",
      movimiento: "synchronize",
      descripcion:
        "When view through a microscope, this pokemons short, fine, delicate hair can be seen.",
      HP: 100,
      ATK: 100,
      DEF: 100,
      SATK: 100,
      SDEF: 100,
      SPD: 100,
    },
    {
      nombre: "Gastly",
      imagen: "./imagenes/gastly.png",
      id: "#092",
      color: "#70559B",
      tipo: "Ghost",
      peso: "0,1 kg",
      altura: "1,3 metros",
      movimiento: "levitate",
      descripcion:
        "Born from gases, anyone would faint if gulfed by its gaseous body, which contains poison.",
      HP: 30,
      ATK: 35,
      DEF: 30,
      SATK: 100,
      SDEF: 35,
      SPD: 80,
    },
    {
      nombre: "Ditto",
      imagen: "./imagenes/ditto.png",
      id: "#132",
      color: "#AAA67F",
      tipo: "Normal",
      peso: "4 kg",
      altura: "0,3 metros",
      movimiento: "limber imposter",
      descripcion:
        "It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.",
      HP: 48,
      ATK: 48,
      DEF: 48,
      SATK: 48,
      SDEF: 48,
      SPD: 48,
    },
    {
      nombre: "Charmander",
      imagen: "./imagenes/charmander.png",
      id: "#004",
      color: "#F57D31",
      tipo: "Fire",
      peso: "8,5 kg",
      altura: "0,6 metros",
      movimiento: "mega-punch fire-punch",
      descripcion:
        "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
      HP: 39,
      ATK: 52,
      DEF: 43,
      SATK: 60,
      SDEF: 50,
      SPD: 65,
    },
    {
      nombre: "Butterfree",
      imagen: "./imagenes/butterfree.png",
      id: "#012",
      color: "#A7B723",
      tipo: "Bug Flying",
      peso: "32 kg",
      altura: "1,1 metros",
      movimiento: "compound-eyes tinted-lens",
      descripcion:
        "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
      HP: 60,
      ATK: 45,
      DEF: 50,
      SATK: 90,
      SDEF: 80,
      SPD: 70,
    },
    {
      nombre: "Aron",
      imagen: "./imagenes/aron.png",
      id: "#304",
      color: "#8789D0",
      tipo: "Steel Rock",
      peso: "60 kg",
      altura: "0,4 metros",
      movimiento: "sturdy rock-head",
      descripcion:
        "It eats iron ore - and sometimes railroad trucks - to build up the steel armor that protects its body.",
      HP: 50,
      ATK: 70,
      DEF: 100,
      SATK: 40,
      SDEF: 40,
      SPD: 30,
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokedex pokemones={pokemonesObject} />} />
        <Route
          path="/detalles-pokemon/:nombreEnUrl"
          element={<Detalles pokemones={pokemonesObject} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
