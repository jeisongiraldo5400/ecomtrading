
import React, { useState } from 'react';

//Components
import { Button } from "../Button";


export const FormOwner = () => {

    const [form, setForm] = useState({
        cedula: '',
        nombres: '',
        apellidos: '',
        email: '',
        telefono: '',
        edad: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

        
    }


    const handlerOwener = (e) => {
        e.preventDefault();
        console.log(form);
        console.log('Formulario enviado');
    }

    return(
        <form className="bg-green-500 max-w-sm p-4 mt-4 text-green-100 rounded" onSubmit={handlerOwener}>

            <h1 className="text-2xl text-bold text-gray pb-3">Registrar propietario</h1>

            <label htmlFor="cedula" className="block text-sx font-bold mb-2">Cedula: </label>
            <input 
                type="number" 
                name="cedula" 
                id="cedula" 
                onChange={handleChange}
                value={form.cedula}
                required
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400" placeholder="Cédula" />

            <label htmlFor="nomre" className="block text-sx font-bold mb-2">Nombres: </label>
            <input 
                type="text" 
                name="nombres" 
                id="nombres"
                placeholder="Nombres"
                onChange={handleChange}
                value={form.nombres}
                required
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>

            <label htmlFor="apellido" className="block text-sx font-bold mb-2">Apellidos: </label>
            <input 
                type="text" 
                name="apellidos" 
                id="apellidos" 
                placeholder="Apellidos"
                onChange={handleChange}
                value={form.apellidos}
                required
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>

            <label htmlFor="email" className="block text-sx font-bold mb-2">Email: </label>
            <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Email"
                onChange={handleChange}
                value={form.email}
                required
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>

            <label htmlFor="telefono" className="block text-sx font-bold mb-2">Telefono:</label>
            <input 
                type="text" 
                name="telefono" 
                id="telefono" 
                placeholder="Teléfono"
                onChange={handleChange}
                value={form.telefono}
                required
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>

            <label htmlFor="edad" className="block text-sx font-bold mb-2"s>Edad: </label>
            <input 
                type="text" 
                name="edad" 
                id="edad" 
                placeholder="Edad"
                onChange={handleChange}
                value={form.edad}
                required
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400" />

            <Button name="Guardar propietario"  color="green-500"/>

        </form>
    )
}