import React, {Fragment} from 'react';
//Functional Components

// Se que es un functional component porque retorna HTML
const PrimeraApp = () => {
    const saludo = {
        nombre: 'Santiago',
        edad: 23
    }
    return (
        // <div>
        //     <h1>Hola Mundo</h1>
        //     <p>Mi primera aplicación</p>
        // </div>

        // Para no tener un monton de divs sin usar utilizaremos Fragments

        // Para no importar Fragment, simplemente poner <>
        <Fragment>
            <pre>{JSON.stringify(saludo, null, 3)}</pre>
            <p>Mi primera aplicacion</p>
        </Fragment>
    );


}

// Exporto mi funcion para poder ser utilizada por otros componentes
export default PrimeraApp;
