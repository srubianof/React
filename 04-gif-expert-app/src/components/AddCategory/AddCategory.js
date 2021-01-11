import React, {useState} from 'react';
import PropTypes from "prop-types";

const AddCategory = ({setCategories}) => {
        const [inputValue, setInputValue] = useState('')
        const hangdleInputChange = (e) => {
            setInputValue(e.target.value)
        }
        const handleSubmit = (e) => {
            console.log("Submit Done")
            e.preventDefault()
            if (inputValue.trim().length > 0) {
                setCategories(cats => [inputValue, ...cats]);
                setInputValue('')
            }
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

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

AddCategory.defaultProps = {};

export default AddCategory;
