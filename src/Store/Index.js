import {configureStore} from '@reduxjs/toolkit';
import counterSlice from "./Counter";
import authSlice from "./Auth";

const store = configureStore({
    reducer: {counter: counterSlice, auth: authSlice},
});

export default store;