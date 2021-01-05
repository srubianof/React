import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from "./PrimeraApp";
import './index.css'

// const saludo = <h1>Hola Mundo</h1>

// Referencia a div principal
const divRoot = document.querySelector('#app');
console.log(divRoot)
// Para renderizar componentes que devuelven HTML utilizo <NOMBRE />
ReactDOM.render(<PrimeraApp/>, divRoot)
