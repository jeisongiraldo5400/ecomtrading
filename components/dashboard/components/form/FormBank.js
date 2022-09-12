
import React, { useState } from 'react';

//Toast-Notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Components
import { Button } from "../Button"

export const FormBank = () => {

    const [form, setForm] = useState({
        banco: '',
        numero_cuenta: '',
        tipo_cuenta: ''
    });

    const handlerBank = (e) => {
        e.preventDefault();
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

    return(
        <form className="bg-green-500 max-w-sm p-4 mt-4 text-green-100 rounded" onSubmit={handlerBank}>

        <h1 className="text-2xl text-bold text-gray pb-3">Datos Bancarios</h1>

        <label htmlFor="banco" className="block text-sx font-bold mb-2">Seleccione Banco: </label>
        <input 
            type="text" 
            name="banco" 
            id="banco" 
            placeholder="Banco"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>

        <label htmlFor="numero_cuenta" className="block text-sx font-bold mb-2">Número de cuenta: </label>
        <input 
            type="number" 
            name="numero_cuenta"
            id="numero_cuenta" 
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400" placeholder="Número de cuenta" />

        <label htmlFor="tipo_cuenta" className="block text-sx font-bold mb-2">Tipo de cuenta: </label>
        <input 
            type="text" 
            name="tipo_cuenta" 
            id="tipo_cuenta"
            placeholder="Tipo de cuenta"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>

        <Button name='Guardar Datos Bancarios' color='green-500'/>

        <ToastContainer />

    </form>
    )
}