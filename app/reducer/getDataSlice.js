import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    dataBank: [],
    dataAccountType: []
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
        }
    }
});


export const { getAllDataBank, getAllDataAccountType } = getDataSlice.actions;

export default getDataSlice.reducer;