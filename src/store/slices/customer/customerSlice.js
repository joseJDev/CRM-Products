import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    customerList: [],
    isLoading: false
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState, // initialState : initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        setCustomerList: (state, action) => {
            state.isLoading = false;
            state.customerList = action.payload.customerList
        }
    }

});

export const {
    startLoading,
    setCustomerList
} = customerSlice.actions