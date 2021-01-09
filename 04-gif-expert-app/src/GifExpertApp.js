import React, {useState} from 'react';
import AddCategory from "./components/AddCategory/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Iron Man', 'Captain America', 'Hulk'])

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
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>

    )
}
