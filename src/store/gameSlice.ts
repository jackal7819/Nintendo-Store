import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export type ListItem = {
    category: string;
    description: string;
    id: string;
    kindes: string[];
    price: number;
    rating: number;
    release: string;
    size: string;
    title: string;
    types: string[];
    url: string;
};

interface GameState {
    gameList: ListItem[];
    status: 'loading' | 'success' | 'error';
}

const initialState: GameState = {
    gameList: [],
    status: 'loading',
};

export const fetchGames = createAsyncThunk<ListItem[], void, {}>(
    'games/fetchGamesAll',
    async () => {
        const { data } = await axios.get<ListItem[]>(
            'https://nintendo-store-default-rtdb.europe-west1.firebasedatabase.app/data.json'
        );
        return data;
    }
);

const gameSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        gamesLoading(state, action: PayloadAction<ListItem[]>) {
            state.gameList = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGames.pending, (state) => {
                state.status = 'loading';
                state.gameList = [];
            })
            .addCase(
                fetchGames.fulfilled,
                (state, action: PayloadAction<ListItem[]>) => {
                    state.gameList = action.payload;
                    state.status = 'success';
                }
            )
            .addCase(fetchGames.rejected, (state) => {
                state.status = 'error';
                state.gameList = [];
            });
    },
});

export const { gamesLoading } = gameSlice.actions;

export default gameSlice.reducer;
