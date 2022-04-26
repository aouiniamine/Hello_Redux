import React, { useState } from 'react';
import { counterSelect, increment, decrement, incrementByAmount } from '../counterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    let [incAmount, setIncAmount] = useState(2)
    let count = useSelector(counterSelect)
    let dispatch = useDispatch();
    let inc = () => {
        dispatch(increment())
    }
    let dec = () => dispatch(decrement())
    return (
        <div>
            <button onClick={dec}>-</button>
            <span>{count}</span>
            <button onClick={inc}>+</button>
            <input onChange={(e) => setIncAmount(e.target.value)} value={incAmount} type='number'></input>
            <button onClick={() => dispatch(incrementByAmount(incAmount))}>increment by Amount</button>
        </div>
    )
}

export default Counter;

