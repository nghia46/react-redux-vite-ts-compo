import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type State = ReturnType<typeof store.dispatch>;