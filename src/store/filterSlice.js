import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchValue: '',
    category: 'All',
    currentPage: 0,
    sort: 'Popularity',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        chooseSearchValue(state, action) {
            state.searchValue = action.payload;
        },
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

export const {
    chooseCategory,
    chooseSort,
    chooseCurrentPage,
    chooseSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
