import React from 'react';
import { counterSelect, increment, decrement } from '../counterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
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
        </div>
    )
}

export default Counter;

