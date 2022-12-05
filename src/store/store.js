import { configureStore } from '@reduxjs/toolkit'
import { customerSlice } from './slices/customer';

export const store = configureStore({
    reducer: {
        customer: customerSlice.reducer
    },
});