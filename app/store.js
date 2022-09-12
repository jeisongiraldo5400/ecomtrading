import { configureStore }  from '@reduxjs/toolkit';

//Propietario
import propietarioReducer from './reducer/propietarioSlice';
import registerDataReducer from './reducer/registerDataSlice';


export const store = configureStore({
    reducer: {
        propietario: propietarioReducer,
        registerData: registerDataReducer
    }
})