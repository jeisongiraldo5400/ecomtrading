import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    directions: [],
    departments: [],
    municipies: [],
    verifyCreateDirection: [],
}

export const directionSlice = createSlice({
    name: 'direction',
    initialState,
    reducers: {
        getAllDepartments: (state, action) => {
            state.departments = action.payload;
        },
        getAllMunicipies: (state, action) => {
            state.municipies = action.payload;
        }, 
        createDirection: (state, action) => {
            state.verifyCreateDirection = action.payload;
        }
    }
});

export const { getAllDepartments, getAllMunicipies, createDirection } = directionSlice.actions;
export default directionSlice.reducer;


