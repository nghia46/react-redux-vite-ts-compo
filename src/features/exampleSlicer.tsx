import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface ExampleState {
    value: number;
}

// intializes the state
const initialState : ExampleState = {
    value: 0,
}

// Create Slicer action

const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers:{
        // Define the reducers actions
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    },
});

export const { increment, decrement } = exampleSlice.actions;
// Select to get the value from the state
export const selectExample = (state: RootState) => state.example;
// execute the reducer
export default exampleSlice.reducer;