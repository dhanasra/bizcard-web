import { configureStore } from "@reduxjs/toolkit";
import SetupSlice from "./setupSlice";

export const SetupStore = configureStore({
    reducer: {
        setup: SetupSlice
    }
})