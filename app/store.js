import { configureStore }  from '@reduxjs/toolkit';

//Propietario
import propietarioReducer from './reducer/propietarioSlice';

export const store = configureStore({
    reducer: {
        propietario: propietarioReducer
    }
})