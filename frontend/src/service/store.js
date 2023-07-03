import { configureStore } from '@reduxjs/toolkit'
import {userApi} from "./user/UserApi.js";

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
    },
})