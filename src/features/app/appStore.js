import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./appSlice";

export const AppStore = configureStore({
    reducer: {
        app: AppSlice
    }
})