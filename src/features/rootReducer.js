import { configureStore } from "@reduxjs/toolkit";
import cardBuilderSlice from "./cardBuilder/cardBuilderSlice";
import appSlice from "./app/appSlice";

export const RootStore = configureStore({
    reducer: {
        app: appSlice,
        cardBuilder: cardBuilderSlice,
    }
})