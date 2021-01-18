import React, {useState, useEffect} from 'react';
import GifGridItem from "../GifGridItem/GifGridItem";
import {useFetchGifs} from "../../Hooks/useFetchGifs";

const GifGrid = ({category}) => {


    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {category}</h3>

            {loading ? <p className="animate__animated animate__flipInX">Loading</p> : ''}
            <div className="card-grid">

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
            </div>
        </>
    )
};


GifGrid.propTypes = {};

GifGrid.defaultProps = {};

export default GifGrid;
