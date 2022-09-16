import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    dataBank: [],
    dataAccountType: [],
    verifyAccountBank: [],
    selecAccountBank: [],
    productsType: [],
    updateAccountBank: [],
    searchAccountBank: [],
}

export const getDataSlice = createSlice({
    name: 'getData',
    initialState,
    reducers: {
        getAllDataBank(state, action) {
            state.dataBank = action.payload;
        },
        getAllDataAccountType(state, action) {
            state.dataAccountType = action.payload;
        },
        createAccountBank(state, action) {
            state.verifyAccountBank = action.payload;
        },
        selectAccountBank(state, action) {
            state.selecAccountBank = action.payload;
        },
        getAllProductsType(state, action) {
            state.productsType = action.payload;
        },
        updateAccountBank(state, action) {
            state.updateAccountBank = action.payload;
        },
        searchAccountBank(state, action) {
            state.searchAccountBank = action.payload;
        }
    }
});


export const {
    getAllDataBank,
    getAllDataAccountType,
    createAccountBank,
    selectAccountBank,
    getAllProductsType,
    updateAccountBank,
    searchAccountBank } = getDataSlice.actions;

export default getDataSlice.reducer;