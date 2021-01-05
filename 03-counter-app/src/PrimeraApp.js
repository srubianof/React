import React, {Fragment} from 'react';
//Functional Components

// Se que es un functional component porque retorna HTML
const PrimeraApp = () => {
    const saludo = {
        nombre: 'Santiago',
        edad: 23
    }
    return (
        <>
            {/*<h1>{saludo}</h1>*/}
            <pre>{JSON.stringify(saludo, null, 3)}</pre>
            <p>Mi primera aplicacion</p>
        </>
    );
}
export default PrimeraApp;
