import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
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
        }
    }
})

export const {setFormData} = AppSlice.actions;

export default AppSlice.reducer;