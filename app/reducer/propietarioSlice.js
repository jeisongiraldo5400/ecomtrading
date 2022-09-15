import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    owners: [],
    validateData: {},
    verifyCreation: [],
    verifyUpdateOwner: [],
    upload: [],
    deleteOwner: [],
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
        },
        updateOwner(state, action) {
            state.verifyUpdateOwner = action.payload;
        },
        uploadImgs(state, action) {
            state.upload = action.payload;
        },
        deleteOwner(state, action) {
            state.deleteOwner = action.payload;
        }
    }
});

export const { getAllOwners, validateData, verifyCreationOwner, updateOwner, uploadImgs, deleteOwner } = propietarioSlice.actions;

export default propietarioSlice.reducer;