import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
//Functional Components

// Se que es un functional component porque retorna HTML

const PrimeraApp = ({ saludo }) => {
    // const saludo = 'Hola Mundo';
    return (
        // <div>
        //     <h1>Hola Mundo</h1>
        //     <p>Mi primera aplicación</p>
        // </div>

        // Para no tener un monton de divs sin usar utilizaremos Fragments
        // Para no importar Fragment, simplemente poner <>
        <>
            <h1> {saludo} </h1>
            {/*Para imprimir objetos formateados como JSON*/}
            {/*<pre>{JSON.stringify(saludo, null, 3)}</pre>*/}
            <p>Mi primera aplicacion</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
// Exporto mi funcion para poder ser utilizada por otros componentes
export default PrimeraApp;
