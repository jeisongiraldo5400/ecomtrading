
import React, { useState, useEffect } from 'react';

//Toast-Notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Redux
import { useSelector, useDispatch } from 'react-redux';

//http
import { get_all_bancks, get_all_account_type, create_bank_account, update_bank_account } from '../../../../lib/http';

//Components
import { Button } from "../Button"
import { Spinner } from '../spinner';

//Actions 
import { saveDataBank } from '../../../../app/reducer/dataOwner'

export const FormBank = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_all_bancks());
        dispatch(get_all_account_type());
    }, []);

    //States
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [nameBank, setNameBank] = useState('');
    const [nameAccountType, setAccountType] = useState('');
    const [numberAccount, setNumberAccount] = useState('');

    const [codigoBank, setCodigoBank] = useState('');
    const [codigoAccountType, setCodigoAccountType] = useState('');

    const [idPropietario, setIdPropietario] = useState('');
    const [isActiveButton, setIsActiveButton] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);


    //Lista de bancos y tipo de cuenta 
    const dataBank = useSelector(state => state.getData.dataBank);
    const dataAccountType = useSelector(state => state.getData.dataAccountType);

    //Datos bancarios del propietario
    const dataBankOwner = useSelector(state => state.dataOwner.getSaveDataBank);

    useEffect(() => {

        if(Object.entries(dataBankOwner).length > 0) {
            const nameBank = dataBank.find(b => b.id_banco === dataBankOwner.banco_id)?.nombre;
            setNameBank(nameBank);
            const nameAccountType = dataAccountType.find(t => t.id_tipo_cuenta === dataBankOwner.tipo_cuenta_id)?.descripcion;
            setAccountType(nameAccountType);
            
            setNumberAccount(dataBankOwner.numero_cuenta);
            setCodigoAccountType(dataBankOwner.tipo_cuenta_id);
            setCodigoBank(dataBankOwner.banco_id);
            setIdPropietario(dataBankOwner.propietario_id);
            setIsUpdate(true);
        }

    }, [ dataBankOwner ]);

    
    //Handles
    //Guardar datos bancarios
    const handlerBank = (e) => {
        e.preventDefault();
        
        setLoading(true);
        setIsActiveButton(true);

        let data = {
            numero_cuenta: numberAccount,
            tipo_cuenta_id: codigoAccountType,
            banco_id: codigoBank,
            propietario_id: idPropietario
        }

        if(isUpdate === false) {
            dispatch(create_bank_account(data));
            toast.success('Cuenta bancaria registrada con éxito');
        } else {
            dispatch(update_bank_account(data));
            toast.success('Cuenta bancaria actualizada con éxito');
        }
        
        dispatch(saveDataBank(data));
    }
    
    const handleChange = (e) => {
        setNumberAccount(e.target.value);
    }

    const handleBank = (e) => {
        setNameBank(e.target.value);
        let codigo = dataBank.find(b => b.nombre === e.target.value)?.id_banco;
        if(codigo) {
            setCodigoBank(codigo);
        }
    }

    const handleAccountType  = (e) => {
        setAccountType(e.target.value);
        let codigo = dataAccountType.find(c => c.descripcion === e.target.value)?.id_tipo_cuenta;
        if(codigo) {
            setCodigoAccountType(codigo);
        }
    }

    //Treamos los datos del propietario desde la bd
    const searchDataOwner = useSelector(state => state.dataOwner.dataOwners);

    useEffect(() => {

        if(searchDataOwner.ok === true) {
            setIdPropietario(searchDataOwner.data[0].id_propietario);
            setIsActiveButton(false);
            setMessage('');
        } else {
            setMessage('No se han registrados datos del propietario');
            setIsActiveButton(true);
        }

    }, [searchDataOwner]);

    //Validamos que se actualizo la cuenta 
    const updateBank = useSelector(state => state.getData.updateAccountBank);

    useEffect(() => {
        if(updateBank.ok === true) {
            setLoading(false);
            setIsActiveButton(false);
        }
    }, [updateBank]);

    return(
        <form className="bg-green-500 max-w-sm p-4 mt-4 mb-4 text-green-100 rounded" onSubmit={handlerBank}>
        
        { message ? <p className="bg-blue-600 py-2 text-center text-white mb-8 rounded">{message}</p> : '' }

        {
            searchDataOwner.ok === true ? 
            <div className="bg-green-600 p-2 rounded-md mb-4">
                <ul>
                    <li className="text-2xl">Propietario</li>
                    <li className="ml-5 bold">{searchDataOwner.data[0].nombres}</li>
                    <li className="ml-5">{searchDataOwner.data[0].cedula}</li>
                </ul>
            </div> : ''
        }

        <h1 className="text-2xl text-bold text-gray pb-3">Datos Bancarios</h1>

        <label htmlFor="banco" className="block text-sx font-bold mb-2">Seleccione Banco: </label>
        <select 
            type="text" 
            name="banco" 
            id="banco" 
            placeholder="Banco"
            onChange={handleBank}
            value={nameBank}
            required
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400">
                <option></option>
                { 
                    dataBank ? dataBank.map((data, index) => (
                        <option key={index} >{data.nombre}</option>
                    )) 
                    : ''
                }
            </select>

        <label htmlFor="tipo_cuenta" className="block text-sx font-bold mb-2">Tipo de cuenta: </label>
        <select 
            type="text" 
            name="tipo_cuenta" 
            id="tipo_cuenta"
            placeholder="Tipo de cuenta"
            onChange={handleAccountType}
            value={nameAccountType}
            required
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400">
                <option></option>
                { 
                    dataAccountType ? dataAccountType.map((data, index) => (
                        <option key={index}>{data.descripcion}</option>
                    ))
                    : ''
                }
            </select>

        <label htmlFor="numero_cuenta" className="block text-sx font-bold mb-2">Número de cuenta: </label>
        <input 
            type="number" 
            name="numero_cuenta"
            id="numero_cuenta" 
            onChange={handleChange}
            value={numberAccount}
            required
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400" placeholder="Número de cuenta" />

        

        <Button name='Guardar datos bancarios' color='green-500' state={isActiveButton} />

        <div className="mt-5">
                <Spinner state={loading}/>
        </div>

        <ToastContainer />

    </form>
    )
}