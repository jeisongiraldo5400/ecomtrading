//http
import http from './axios';

//request
import { request } from './request';

//Actions for owners
import { getAllOwners, validateData } from '../app/reducer/propietarioSlice';


export const get_all_owners = () => {
    return async (dispatch) => {
        try {
            //debugger;
            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.get, '/api/propietario', { token });
            dispatch(getAllOwners(data));

        }
        catch(err) {
            console.log(err);
        }
    }
}

export const create_owner = (params) => {
    return async (dispatch) =>{
        try {

            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.post, '/api/propietario', { token, data: params });
        
        }
        catch(err) {
            console.log(err);
        }
    }
}

export const validate_data = (params) => {
    return async (dispatch) => {
        try {

            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.post, '/api/propietario/validateData', { token, data: params });
            dispatch(validateData(data));
        }
        catch(err) {
            console.log(err);
        }
    }
}