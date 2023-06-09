import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    searchValue: string;
    category: string;
    currentPage: number;
    sort: string;
}

const initialState: FilterState = {
    searchValue: '',
    category: 'All',
    currentPage: 0,
    sort: 'Popularity',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        chooseSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        chooseCategory(state, action: PayloadAction<string>) {
            state.category = action.payload;
        },
        chooseSort(state, action: PayloadAction<string>) {
            state.sort = action.payload;
        },
        chooseCurrentPage(state, action: PayloadAction<number>) {
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
