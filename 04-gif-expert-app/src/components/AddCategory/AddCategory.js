import React, {useState} from 'react';

const AddCategory = () => {
        const [inputValue, setInputValue] = useState('Hola Mundo')
        const hangdleInputChange = (e) => {
            setInputValue(e.target.value)
        }
        const handleSubmit = (e) => {
            console.log("Submit Done")
            e.preventDefault()
        }
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={hangdleInputChange}

                    />
                </form>
            </>
        )
    }
;

AddCategory.propTypes = {};

AddCategory.defaultProps = {};

export default AddCategory;
