import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    gameList: [],
    status: 'loading',
};

export const fetchGames = createAsyncThunk('games/fetchGamesAll', async () => {
    const { data } = await axios.get(
        'https://nintendo-store-default-rtdb.europe-west1.firebasedatabase.app/data.json'
    );
    return data;
});

const gameSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        gamesLoading(state, action) {
            state.gameList = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGames.pending, (state) => {
                state.status = 'loading';
                state.gameList = [];
            })
            .addCase(fetchGames.fulfilled, (state, action) => {
                state.gameList = action.payload;
                state.status = 'success';
            })
            .addCase(fetchGames.rejected, (state, action) => {
                state.status = 'error';
                state.gameList = [];
            });
    },
});

export const { gamesLoading } = gameSlice.actions;

export default gameSlice.reducer;
