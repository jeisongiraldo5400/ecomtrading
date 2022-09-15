
//http
import http from './axios';
import axios from 'axios';

//request
import { request } from './request';

//Actions for owners
import { getAllOwners, validateData, verifyCreationOwner, updateOwner, uploadImgs, deleteOwner } from '../app/reducer/propietarioSlice';

//Actions for data
import { getAllDataAccountType, getAllDataBank, createAccountBank, selectAccountBank, getAllProductsType, updateAccountBank, searchAccountBank } from '../app/reducer/getDataSlice';

//Direcctions
import { getAllDepartments, getAllMunicipies, createDirection, updateDirection } from '../app/reducer/directionSlice';

//Data owner 
import { getAllDataOwner } from '../app/reducer/dataOwner';

//Store 
import { createStore, updateStore, getDataStore, getAllDataStores } from '../app/reducer/storeSlice';


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
            dispatch(verifyCreationOwner(data));
        }
        catch(err) {
            dispatch(verifyCreationOwner([0]));
            console.log(err);
        }
    }
}

export const update_owner = (params) => {
    return async (dispatch) => {
        try {
            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.put, '/api/propietario', { token, data: params });
            dispatch(updateOwner(data));
        }
        catch(err) {
            dispatch(updateOwner([0]));
            console.log(err);
        }
    }
}

export const delete_owner = (params) => {
    return async (dispatch) => {
        try {
            const token = '31231dda7ujsjshdhshjdshdjhsd';
            await request(http.patch, '/api/propietario', { token, data: params });
            dispatch(deleteOwner([1]));
        }
        catch(err) {
            dispatch(updateOwner([0]));
            console.log(err);
        }
    }
}

export const upload_imgs_owner = (dataOwner, file) => {
    return async (dispatch) => {
        try {

            const form = new FormData();

            form.append("media", file, `${dataOwner.cedula_propietario}`);

            await axios(`/api/propietario/uploads`, {
                method: 'POST',
                data: form,
                "content-type": "multipart/form-data",
            }).then(resp => {
                console.log(resp);
            })
            .catch(err => {
                console.error(err);
            });

            //dispatch(uploadImgs(response));
            
        }
        catch(err) {
            dispatch(uploadImgs([]));
            console.log(err);
        }
    }
}

export const update_imgs_owner = (dataOwner, file) => {
    return async (dispatch) => {
        try {

            const form = new FormData();

            form.append("media", file, `${dataOwner.cedula_propietario}`);

            await axios(`/api/propietario/updateImg`, {
                method: 'POST',
                data: form,
                "content-type": "multipart/form-data",
            }).then(resp => {
                console.log(resp);
            })
            .catch(err => {
                console.error(err);
            });

            dispatch(uploadImgs([1]));
            
        }
        catch(err) {
            dispatch(uploadImgs([]));
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

//Data bancks
export const get_all_bancks = () => {
    return async (dispatch) => {
        try{

            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.get, '/api/bankData/banks', { token });
            dispatch(getAllDataBank(data));
        } 
        catch(err) {
            console.log(err);
        }
    }
}

export const get_all_account_type = () => {
    return async (dispatch) => {
        try{

            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.get, '/api/bankData/bankAccountType', { token });
            dispatch(getAllDataAccountType(data));
        }
        catch(err){
            console.log(err);
        }
    }
}

//Buscar y traer todos los datos del usuario
export const search_all_data_owner = (params) => {
    return async(dispatch) => {

        try{

            console.log(params);
                
            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.post, '/api/propietario/searchOwner', { token, data: params });
            dispatch(getAllDataOwner(data)); 

            
        }
        catch(err) {
            dispatch(getAllDataOwner([]));
            console.error(err);
        }

    }
}

//Registrar dirección, registrar departamentos y municipios
export const get_all_departments = () => {
    return async (dispatch) => {
        try{

            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.get, '/api/direcction/departments', { token });
            dispatch(getAllDepartments(data));
        }
        catch(err) {
            console.error(err);
        }
    }
}

export const get_all_municipies = (params) => {
    return async (dispatch) => {
        try{

            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.post, '/api/direcction/municipies', { token, data: params });
            dispatch(getAllMunicipies(data));

        }
        catch(err) {
            dispatch(getAllMunicipies([]));
            console.error(err);
        }
    }
}

export const create_direcction = (params) => {
    return async (dispatch) => {
        try {
            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.post, '/api/direcction', { token, data: params });
            dispatch(createDirection(data));
        }
        catch(err) {
            dispatch(createDirection([0]));
            console.error(err);
        }
    }
}

export const update_direction = (params) => {
    return async (dispatch) => {
        try {
            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.put, '/api/direcction', { token, data: params });
            dispatch(updateDirection(data));
        }
        catch(err) {
            dispatch(updateDirection([0]));
            console.error(err);
        }
    }
}

//Crear cuenta bancaria
export const create_bank_account = (params) => {
    return async (dispatch) => {
        try{

            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.post, '/api/bankData/accountBank', { token, data: params });
            dispatch(createAccountBank(data));

        }
        catch(err){
            dispatch(createAccountBank([]));
            console.error(err);
        }
    }
}

export const update_bank_account = (params) => {
    return async (dispatch) => {
        try{

            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.put, '/api/bankData/accountBank', { token, data: params });
            dispatch(updateAccountBank(data));

        }
        catch(err){
            dispatch(updateAccountBank([]));
            console.error(err);
        }
    }
}

//Seleccionar cuenta bancaria 
export const select_bank_account = (params) => {
    return async (dispatch) => {
        try{

            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.post, '/api/bankData/accountBank', { token, data: params });
            dispatch(selectAccountBank(data));

        }
        catch(err){
            dispatch(selectAccountBank([]));
            console.error(err);
        }
    }
}

//Seleccionar los tipos de producto para el almacen
export const get_all_product_type = () => {
    return async (dispatch) => {
        try{

            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.get, '/api/store/products', { token });
            dispatch(getAllProductsType(data));

        }
        catch(err){
            dispatch(getAllProductsType([0]));
            console.error(err);
        }
    }
}

//Buscar cuenta bancaria del propietario
export const search_bank_account = (params) => {
    return async (dispatch) => {
        try{

            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.post, '/api/store/searchBankDataOwener', { token, data: params });
            dispatch(searchAccountBank(data));

        }
        catch(err){
            dispatch(searchAccountBank([]));
            console.error(err);
        }
    }
}


//Trea datos del almacen
export const get_data_store = (params) => {
    return async (dispatch) => {
        try{

            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.post, '/api/store/getStore', { token, data: params });
            dispatch(getDataStore(data));

        }
        catch(err){
            dispatch(getDataStore([]));
            console.error(err);
        }
    }
}

//Crear almacén 
export const create_store = (params) => {
    return async (dispatch) => {
        try{

            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.post, '/api/store', { token, data: params });
            dispatch(createStore(data));

        }
        catch(err){
            dispatch(createStore([]));
            console.error(err);
        }
    }
}

//Actualizar almacén
export const update_store = (params) => {
    return async (dispatch) => {
        try{

            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.put, '/api/store', { token, data: params });
            dispatch(updateStore(data));

        }
        catch(err){
            dispatch(updateStore([]));
            console.error(err);
        }
    }
}


//Traer todos los almacenes 
export const get_all_stores = () => {
    return async (dispatch) => {
        try{

            const token = '31231dda7ujsjshdhshjdshdjhsd';
            const { data } = await request(http.get, '/api/store/getStore', { token });
            dispatch(getAllDataStores(data));

        }
        catch(err){
            dispatch(getAllDataStores([]));
            console.error(err);
        }
    }
}