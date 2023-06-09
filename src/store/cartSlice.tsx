import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
    id: string;
    url: string;
    title: string;
    price: number;
    kind: string;
    type: string;
};

interface CartState {
    totalPrice: number;
    items: CartItem[];
}

const initialState: CartState = {
    totalPrice: 0,
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            if (!state.items.find((obj) => obj.id === action.payload.id)) {
                state.items.push(action.payload);
                state.totalPrice = state.items.reduce(
                    (sum, obj) => sum + obj.price,
                    0
                );
            }
        },
        removeItem(state, action: PayloadAction<string>) {
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
