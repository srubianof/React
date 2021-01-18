import React from 'react';
import {useState} from "react";

const useCounter = (initState = 10) => {

    const [state, setState] = useState(initState);

    const increment = (factor = 1) => {
        setState(state + factor);
    }
    const decrement = (factor = 1) => {
        setState(state - factor);
    }
    const reset = () => {
        setState(initState)
    };

    return {
        state,
        increment,
        decrement,
        reset
    };
};

export default useCounter;
