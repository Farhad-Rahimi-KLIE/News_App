import {configureStore} from '@reduxjs/toolkit';
import NewsSlice from './Slices/NewsSlice';
import { AuthentecationSlice } from './Slices/Authentecation';
export const Store = configureStore({
    reducer : {
        news : NewsSlice,
        authentecation : AuthentecationSlice
    },
})
// export default Store;