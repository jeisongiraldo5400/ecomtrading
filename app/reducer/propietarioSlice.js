import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    owners: [],
    validateData: {},
    dataOwner: []
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
        getDataOwner(state, action) {
            state.dataOwner = action.payload;
        }
    }
});

export const { getAllOwners, validateData, getDataOwner } = propietarioSlice.actions;

export default propietarioSlice.reducer;