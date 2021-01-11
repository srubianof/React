import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './GifGrid.module.css';

const GifGrid = ({category}) => {

    const [count, setCount] = useState(0);
    //Ejecutar codigo de manera condicional
    // primer argumento funcion a ejecutar, segundo lista de dependencias
    useEffect(() => {
        getGifs();
        //Un arreglo vacio significa SOLO se va a ejecutar una vez
    }, [])


    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=iron+man&limit=5&api_key=vnNOsJHUan9Hhbz9W0apoS9xRBpPzyJ8'
        // await esperar a que se resuelva la promesa
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                //Signo de interrogacion permite verificar si viene el objeto y
                // de este modo utilizarlo o sino dejarlo UNDEFINED
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs)
    };

    return (
        <div>
            <h3> {category}</h3>
            <h3> {count}</h3>
            <button onClick={() => setCount(count + 1)}/>
        </div>
    )
};


GifGrid.propTypes = {};

GifGrid.defaultProps = {};

export default GifGrid;
