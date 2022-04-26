import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: state => {
            state.value++
        },
        decrement: state => {
            state.value--
        },
        incrementByAmount: (state, action) => {
            state.value += Number(action.payload)
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const counterReducer = counterSlice.reducer
export const counterSelect = state => state.counter.value

