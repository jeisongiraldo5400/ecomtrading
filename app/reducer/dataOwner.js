import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    dataOwners: [],
    searchDataOwner: [],
    getSaveDataOwner: [],
    getSaveDataDirection: [],
    getSaveDataBank: [],
    getSaveDataStore: [],
}

export const dataOwnerSlice = createSlice({
    name: 'dataOwner',
    initialState,
    reducers: {
        getAllDataOwner(state, action) {
            state.dataOwner = action.payload;
        },
        searchDataOwner(state, action) {
            state.searchDataOwner = action.payload;
        },
        //Todas estos actions son para el registro de propietario o actualización del mismo
        saveDataOwner(state, action) {
            state.getSaveDataOwner = action.payload;
        },
        saveDataDirection(state, action) {
            state.getSaveDataDirection = action.payload;
        },
        saveDataBank(state, action) {
            state.getSaveDataBank = action.payload;
        },
        saveDataStore(state, action) {
            state.getSaveDataStore = action.payload;
        }

    }
});

export const { 
    getAllDataOwner, 
    searchDataOwner,
    saveDataOwner,
    saveDataDirection,
    saveDataBank,
    saveDataStore 
} = dataOwnerSlice.actions;

export default dataOwnerSlice.reducer;