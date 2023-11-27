import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cardData: {
        cardName: 'Business Card'
    }
}

export const CardBuilderSlice = createSlice({
    name: 'cardBuilder',
    initialState,
    reducers: {
        updateCardData: (state, action) => {
            const { path, value } = action.payload;
            
            const pathArray = path.split('.');
            let nestedObject = state.cardData;

            for (let i = 0; i < pathArray.length - 1; i++) {
                if (!nestedObject[pathArray[i]]) {
                    nestedObject[pathArray[i]] = {};
                }
                nestedObject = nestedObject[pathArray[i]];
            }

            nestedObject[pathArray[pathArray.length - 1]] = value;
        },

        initializeCardData: (state, action)=>{
            state.cardData = action.payload?.cardData;
        }
    }
})

export const {updateCardData, initializeCardData} = CardBuilderSlice.actions;

export default CardBuilderSlice.reducer;