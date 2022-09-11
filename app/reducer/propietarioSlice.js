import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    owners: []
}

export const propietarioSlice = createSlice({
    name: 'propietario',
    initialState,
    reducers: {
        getAllOwners(state, action) {
            state.owners = action.payload;
        }
    }
});

export const { getAllOwners } = propietarioSlice.actions;

export default propietarioSlice.reducer;