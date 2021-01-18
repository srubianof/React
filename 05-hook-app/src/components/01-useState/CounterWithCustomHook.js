import React from 'react';
import './counter.css'
import useCounter from "../../hooks/useCounter";

const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(100);

    return (
        <>
            <h1> Counter with Hook: {state}</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={() => increment(1)}>
                +1
            </button>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={reset}>
                Reset
            </button>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={() => decrement(1)}>
                -1
            </button>


        </>
    );
};

export default CounterWithCustomHook;
