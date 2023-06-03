import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: 'All',
    currentPage: 0,
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
        chooseCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
    },
});

export const { chooseCategory, chooseSort, chooseCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
