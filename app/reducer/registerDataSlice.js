import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    direcction: {},
    banck: {},
    store: {}   
};


export const registerDataSlice = createSlice({
    name: 'registerData',
    initialState,
    reducers: {
        getDirecction(state, action) {
            state.direcction = action.payload;
        },
        getBanck(state, action) {
            state.banck = action.payload;
        },
        getStore(state, action) {
            state.store = action.payload;
        }
    }
});


export const { getDirecction, getBanck, getStore } = registerDataSlice.actions;

export default registerDataSlice.reducer;