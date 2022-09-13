import { configureStore }  from '@reduxjs/toolkit';

//Propietario
import propietarioReducer from './reducer/propietarioSlice';
import registerDataReducer from './reducer/registerDataSlice';
import getDataReducer from './reducer/getDataSlice';



export const store = configureStore({
    reducer: {
        propietario: propietarioReducer,
        registerData: registerDataReducer,
        getData: getDataReducer
    }
})