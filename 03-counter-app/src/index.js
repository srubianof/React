import React from "react";
import ReactDOM from "react-dom";
// Importar componente
// import PrimeraApp from "./PrimeraApp";
import "./index.css";
import CounterApp from "./CounterApp";

// const saludo = <h1>Hola Mundo</h1>

// Referencia a div principal
const divRoot = document.querySelector("#app");
console.log(divRoot);
// Para renderizar componentes que devuelven HTML utilizo <NOMBRE />
// ReactDOM.render(<PrimeraApp/>, divRoot)
ReactDOM.render(<CounterApp value={123} />, divRoot);
