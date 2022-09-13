import { configureStore }  from '@reduxjs/toolkit';

//Propietario
import propietarioReducer from './reducer/propietarioSlice';
import getDataReducer from './reducer/getDataSlice';



export const store = configureStore({
    reducer: {
        propietario: propietarioReducer,
        getData: getDataReducer
    }
})