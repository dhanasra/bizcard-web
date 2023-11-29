import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    config: null,
    contacts: [],
    cards: []
}

export const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        initializeApp: (state, action)=>{
            state.user = action.payload?.user;
            state.contacts = action.payload?.contacts;
            state.cards = action.payload?.cards;
            window.cards = action.payload?.cards;
            window.contacts = action.payload?.contacts;
            window.config = action.payload?.config;
        },
        updateCards: (state, action)=>{
            state.cards = action.payload?.cards;
            window.cards = action.payload?.cards;
        }
    }
})

export const {initializeApp, updateCards} = AppSlice.actions;

export default AppSlice.reducer;