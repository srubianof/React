import React, {useState, useEffect} from 'react';
import GifGridItem from "../GifGridItem/GifGridItem";
import {getGifs} from "../../services/getGifs";
import {useFetchGifs} from "../../Hooks/useFetchGifs";

const GifGrid = ({category}) => {

    /* const [images, setImages] = useState([]);

     //Ejecutar codigo de manera condicional
     // primer argumento funcion a ejecutar, segundo lista de dependencias
     useEffect(() => {
         //funcion importada que retorna una promesa
         //hago set de las nuevas imagenes
         getGifs(category)
             .then(imgs => setImages(imgs));
         //Un arreglo vacio significa SOLO se va a ejecutar una vez
         // si la categoria cambia entonces volver a ejecutar el efecto
     }, [category])*/

    const {loading} = useFetchGifs();
    console.log(loading)

    return (
        <>
            <h3> {category}</h3>

            {loading ? 'Cargando....' : 'Data cargada'}
            {/*<div className="card-grid">

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            // manera para desestructurar objeto usando operador spread
                            {...img}
                            //img={img}
                        />
                    ))
                }
            </div>*/}
        </>
    )
};


GifGrid.propTypes = {};

GifGrid.defaultProps = {};

export default GifGrid;
