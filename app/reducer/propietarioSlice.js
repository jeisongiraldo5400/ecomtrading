import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    owners: [],
    validateData: {},
    verifyCreation: []
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
        verifyCreationOwner(state, action) {
            state.verifyCreation = action.payload;
        }
    }
});

export const { getAllOwners, validateData, verifyCreationOwner } = propietarioSlice.actions;

export default propietarioSlice.reducer;