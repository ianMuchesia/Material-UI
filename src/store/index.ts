import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./modeSlice";
import { setupListeners } from "@reduxjs/toolkit/query";



const store = configureStore({
    reducer:{
        mode:globalSlice.reducer,
      
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;