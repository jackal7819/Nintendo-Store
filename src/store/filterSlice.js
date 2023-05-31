import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: 'All',
    sort: 'Popularity',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        chooseCategory(state, action) {
            state.category = action.payload;
        },
        chooseSort(state, action) {
            state.sort = action.payload;
        },
    },
});

export const { chooseCategory, chooseSort } = filterSlice.actions;

export default filterSlice.reducer;
