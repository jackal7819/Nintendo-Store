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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
