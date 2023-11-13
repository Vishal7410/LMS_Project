import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./Slice.js/AuthSlice";

const store = configureStore ({
    reducer: {
        auth: authSliceReducer
    },
    devTools: true
});

export default store;