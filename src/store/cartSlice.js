import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalPrice: 0,
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            if (!state.items.find((obj) => obj.id === action.payload.id)) {
                state.items.push(action.payload);
                state.totalPrice = state.items.reduce(
                    (sum, obj) => sum + obj.price,
                    0
                );
            }
        },
        removeItem(state, action) {
            state.items = state.items.filter(
                (obj) => obj.id !== action.payload
            );
            state.totalPrice = state.items.reduce(
                (sum, obj) => sum + obj.price,
                0
            );
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
