import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    dataStore: [],
    updateStore: [],
    getDataStore: [],
    getAllDataStore: []
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
        }
    }
});


export const { createStore, updateStore, getDataStore, getAllDataStores } = storeSlice.actions;

export default storeSlice.reducer