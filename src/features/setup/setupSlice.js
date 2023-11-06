import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    formData: {}
}

export const SetupSlice = createSlice({
    name: 'setup',
    initialState,
    reducers: {
        setFormData: (state, action)=>{
            state.formData = {...state.formData, ...action.payload}
        }
    }
})

export const {setFormData} = SetupSlice.actions;

export default SetupSlice.reducer;