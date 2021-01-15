import {useState, useEffect} from 'react';
import {getGifs} from "../services/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    //Efectos no pueden ser async!!
    useEffect(() => {

        getGifs(category)
            .then(imgs => {

                console.log(imgs)
                setState({
                    data: imgs,
                    loading: false
                })

            });
        //Si arreglo vacio solo cargo 1 vez
        //Si no es que si la categoria cambia se hace el useEffect
    }, [category])

    return state; //{data: [], loading :true}
}
