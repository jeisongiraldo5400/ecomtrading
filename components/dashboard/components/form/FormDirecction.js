import React, { useState } from 'react';


//Components
import { Button } from "../Button"


export const FormDirecction = () => {

    const handlerDirecction = (e) => {
        e.preventDefault();
        console.log('Formulario enviado');
    }

    return (
        <form className="bg-green-500 max-w-sm p-4 mt-4 text-green-100 rounded" onSubmit={handlerDirecction}>

            <h1 className="text-2xl text-bold text-gray pb-3">Dirección</h1>

            <label htmlFor="direccion" className="block text-sx font-bold mb-2">Dirección: </label>
            <input 
                type="text" 
                name="direccion"
                id="direccion" 
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400" placeholder="Dirección" />

            <label htmlFor="nomre" className="block text-sx font-bold mb-2">Departamento: </label>
            <input 
                type="text" 
                name="departamento" 
                id="municipio"
                placeholder="Departamento"
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>

            <label htmlFor="apellido" className="block text-sx font-bold mb-2">Municipio: </label>
            <input 
                type="text" 
                name="municipio" 
                id="municipio" 
                placeholder="Municipio"
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>

            <Button name='Guardar dirección' color='green-500' />

        </form>
    )
}