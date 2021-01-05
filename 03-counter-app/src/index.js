import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from "./PrimeraApp";
import './index.css'


const divRoot = document.querySelector('#app');

// Para renderizar componentes que devuelven HTML utilizo <NOMBRE />
ReactDOM.render(<PrimeraApp/>, divRoot)
