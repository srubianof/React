import React, {useState} from 'react';
import AddCategory from "./components/AddCategory/AddCategory";
import GifGrid from "./components/GifGrid/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Iron Man'])

    // const handleAdd = () => {
    //     setCategories(cats => [...categories, 'Spiderman']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map(category => (
                        //Dentro de un map DEBO retornar ya sea con un return o con ()
                        <GifGrid
                            key={category}
                            category={category}/>
                    ))
                }
            </ol>
        </>

    )
}
