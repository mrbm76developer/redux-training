
import {createSlice,configureStore} from "@reduxjs/toolkit";

const initialState = {counter: 0, showCounter: true}
const reducer = createSlice({
    name: 'counter', initialState, reducers: {
        increment(state) {
            state.counter++;
        }, decrement(state) {
            state.counter--;
        }, increase(state, action) {
            state.counter = state.counter + action.amount
        }, toggleCounterHandler(state) {
            state.showCounter = !state.showCounter
        },
    }
});

const store = configureStore({
    counter:reducer.reducer
});
export const counterActions = reducer.actions;
export default store;