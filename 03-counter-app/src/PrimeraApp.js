import React, {Fragment} from 'react';
//Functional Components

// Se que es un functional component porque retorna HTML
const PrimeraApp = () => {
    const saludo = {
        nombre: 'Santiago',
        edad: 23
    }
    return <h1>Hola Mundo</h1>
        // <>

    // <pre>{JSON.stringify(saludo, null, 3)}</pre>
            // <p>Mi primera aplicacion</p>
        // </>
    // );
}

// Exporto mi funcion para poder ser utilizada por otros componentes
export default PrimeraApp;
