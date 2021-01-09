import React, {useState} from 'react';

export const GifExpertApp = () => {

    // const categories = ['Iron Man', 'Captain America', 'Hulk']

    const [categories, setCategories] = useState(['Iron Man', 'Captain America', 'Hulk'])

    const handleAdd = () => {
        setCategories(cats => [...categories, 'Spiderman']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <button onClick={handleAdd}>Add new category</button>
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>Hi {category}</li>
                    })
                }
            </ol>
        </>

    )
}
