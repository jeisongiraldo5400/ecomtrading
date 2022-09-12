import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    owners: [],
    validateData: {},
    getOwner: []
}

export const propietarioSlice = createSlice({
    name: 'propietario',
    initialState,
    reducers: {
        getAllOwners(state, action) {
            state.owners = action.payload;
        },
        validateData(state, action) {
            state.validateData = action.payload;
        },
        getOwner(state, action) {
            state.getOwner = action.payload;
        }
    }
});

export const { getAllOwners, validateData } = propietarioSlice.actions;

export default propietarioSlice.reducer;