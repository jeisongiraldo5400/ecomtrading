//http
import http from './axios';

//request
import { request } from './request';

//Actions for owners
import { getAllOwners } from '../app/reducer/propietarioSlice';


export const get_all_owners = () => {
    return async (dispatch) => {
        try {
            //debugger;
            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.get, '/api/propietario', { token });
            console.log(data);
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
            const { data } = await request(http.post, '/api/propietario', { token, params });
            console.log(data);
        }
        catch(err) {
            console.log(err);
        }
    }
}