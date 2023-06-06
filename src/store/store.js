import { configureStore } from '@reduxjs/toolkit';
import filter from './filterSlice';
import cart from './cartSlice';
import games from './gameSlice';

const store = configureStore({
    reducer: {
        filter,
        cart,
        games,
    },
});

export default store;
