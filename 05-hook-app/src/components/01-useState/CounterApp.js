import React from 'react';
import PropTypes from 'prop-types';
import './counter.css'
import {useState} from "react";

const CounterApp = () => {
    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20
    })
    const {counter1, counter2} = counter
    console.log(counter1, counter2)
    return (
        <>
            <h1>Counter1 {counter1} </h1>
            <h1>Counter2 {counter2} </h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={() => {
                    setCounter({
                        ...counter,
                        counter1: counter1 + 1
                    })
                }}
            >
                +1
            </button>
        </>
    )
};

CounterApp.propTypes = {};

CounterApp.defaultProps = {};

export default CounterApp;
