
import React, { useState, useEffect } from 'react';

//Redux
import { useSelector, useDispatch } from 'react-redux';

//Toast-Notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//http
import { get_all_bancks, get_all_account_type } from '../../../../lib/http';

//Components
import { Button } from "../Button"

export const FormBank = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_all_bancks());
        dispatch(get_all_account_type());
    }, []);

    //States
    const [nameBank, setNameBank] = useState('');
    const [nameAccountType, setAccountType] = useState('');
    const [numberAccount, setNumberAccount] = useState('');

    const [codigoBank, setCodigoBank] = useState('');
    const [codigoAccountType, setCodigoAccountType] = useState('');

    const [isActiveButton, setIsActiveButton] = useState(true);


    //Lista de bancos y tipo de cuenta 
    const dataBank = useSelector(state => state.getData.dataBank);
    const dataAccountType = useSelector(state => state.getData.dataAccountType);

    
    //Handles
    //Guardar datos bancarios
    const handlerBank = (e) => {
        e.preventDefault();
        setIsActiveButton(true);

        let data = {
            numero_cuenta: numberAccount,
            tipo_cuenta_id: codigoAccountType,
            banco_id: codigoBank,
            propietario_id: ''
        }

        console.log(data);

        toast('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
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

    return(
        <form className="bg-green-500 max-w-sm p-4 mt-4 text-green-100 rounded" onSubmit={handlerBank}>

        <h1 className="text-2xl text-bold text-gray pb-3">Datos Bancarios</h1>

        <label htmlFor="banco" className="block text-sx font-bold mb-2">Seleccione Banco: </label>
        <select 
            type="text" 
            name="banco" 
            id="banco" 
            placeholder="Banco"
            onChange={handleBank}
            value={nameBank}
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
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400" placeholder="Número de cuenta" />

        

        <Button name='Guardar Datos Bancarios' color='green-500' disabled={isActiveButton} />

        <ToastContainer />

    </form>
    )
}