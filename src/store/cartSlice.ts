import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
    id: string;
    url: string;
    title: string;
    price: number;
    kind: string;
    type: string;
};

const storedCart = localStorage.getItem('cart');
const parsedCart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

const initialState = {
    totalPrice: parsedCart.reduce((sum, obj) => sum + obj.price, 0) as number,
    items: parsedCart,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            if (!state.items.some((obj) => obj.id === action.payload.id)) {
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
