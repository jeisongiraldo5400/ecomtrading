import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    dataStore: [],
    updateStore: [],
    getDataStore: [],
    getAllDataStore: [],
    deteleStore: [],
}

export const storeSlice = createSlice({
    name: 'dataStore',
    initialState,
    reducers: {
        createStore: (state, action) => {
            state.dataStore = action.payload;
        },
        updateStore(state, action){
            state.updateStore = action.payload;
        },
        getDataStore(state, action){
            state.getDataStore = action.payload;
        },
        getAllDataStores(state, action){
            state.getAllDataStore = action.payload;
        },
        deleteStore(state, action){
            state.deteleStore = action.payload;
        }
    }
});


export const { createStore, updateStore, getDataStore, getAllDataStores, deleteStore } = storeSlice.actions;

export default storeSlice.reducer