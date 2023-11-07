import { configureStore } from "@reduxjs/toolkit";
import CardBuilderSlice from "./cardBuilderSlice";

export const CardBuilderStore = configureStore({
    reducer: {
        cardBuilder: CardBuilderSlice
    }
})