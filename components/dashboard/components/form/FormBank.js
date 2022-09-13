
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

    const [isActiveButton, setIsActiveButton] = useState(true);

    const [form, setForm] = useState({
        banco: '',
        tipo_cuenta: '',
        numero_cuenta: '',
    });

    const handlerBank = (e) => {
        e.preventDefault();
        setIsActiveButton(true);
        
        console.log('Formulario enviado');

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

        console.log(e.target.value);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    //Lista de bancos y tipo de cuenta 
    const dataBank = useSelector(state => state.getData.dataBank);
    const dataAccountType = useSelector(state => state.getData.dataAccountType);

    //Validamos si biene la cedula del propietario
    const banck = useSelector(state => state.registerData.banck);

    useEffect(() => {
        if(banck?.state) {
            setIsActiveButton(false);
        }
    }, [banck]);

    return(
        <form className="bg-green-500 max-w-sm p-4 mt-4 text-green-100 rounded" onSubmit={handlerBank}>

        <h1 className="text-2xl text-bold text-gray pb-3">Datos Bancarios</h1>

        <label htmlFor="banco" className="block text-sx font-bold mb-2">Seleccione Banco: </label>
        <select 
            type="text" 
            name="banco" 
            id="banco" 
            placeholder="Banco"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400">
                <option></option>
                { 
                    dataBank ? dataBank.map((data, index) => (
                        <option key={index}>{data.nombre}</option>
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
            value={form.numero_cuenta}
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400" placeholder="Número de cuenta" />

        

        <Button name='Guardar Datos Bancarios' color='green-500' disabled={isActiveButton} />

        <ToastContainer />

    </form>
    )
}