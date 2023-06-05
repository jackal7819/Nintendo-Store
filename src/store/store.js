import { configureStore } from '@reduxjs/toolkit';
import filter from './filterSlice';
import cart from './cartSlice';

const store = configureStore({
    reducer: {
        filter,
        cart,
    },
});

export default store;
