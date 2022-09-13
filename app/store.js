import { configureStore }  from '@reduxjs/toolkit';

//Reducers
import propietarioReducer from './reducer/propietarioSlice';
import getDataReducer from './reducer/getDataSlice';
import directionReducer from './reducer/directionSlice';
import dataOwnerReducer from './reducer/dataOwner';


//Store
export const store = configureStore({
    reducer: {
        propietario: propietarioReducer,
        getData: getDataReducer,
        direction: directionReducer,
        dataOwner: dataOwnerReducer
    }
})