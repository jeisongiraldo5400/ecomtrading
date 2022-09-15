import React, { useState, useEffect } from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';

//import Http
import {  get_all_stores } from  '../../../lib/http';

//icons
import { FaEdit, FaTrash } from 'react-icons/fa';


export default function Stores(){

    const dispatch = useDispatch();

    //Datos de todos los almacenes
    const dataStores = useSelector(state => state.dataStore.getAllDataStore);

    console.log(dataStores);


    useEffect(() => {
        dispatch(get_all_stores());
    },[])


    const tableStore = dataStores.map((store, index) => (
        <tr key={index}>
            <td className="border border-slate-300 p-1">{store.nit}</td>
            <td className="border border-slate-300 p-1">{store.nombre}</td>
            <td className="border border-slate-300 p-1">{store.telefono}</td>
            <td className="border border-slate-300 p-1">{store.cantidad}</td>
            <td className="border border-slate-300 p-1">{store.nombre_propietario} {store.apellidos}</td>
            <td className="border border-slate-300 p-1">{store.email}</td>
            <td colspan={2} className="sidebar_inline_link border border-slate-100">
                <a className="text-green-400 cursor-pointer p-1"><FaEdit /></a>
                <a className="text-red-400 cursor-pointer p-1"><FaTrash /></a>
            </td>
        </tr>
    ))

    return (
        <div className="bg-zinc-100 p-10 rounded-[10px]">
            <p className="text-2xl">Almacenes</p>

            <p className="mt-10 text-2xl text-slate-700">#{dataStores.length}</p>
            <table className="table-auto border-1 mt-3 mb-10 rounded-[10px] text-center">
                <thead className="bg-zinc-300 text-gray-500 rounded-sm">
                    <tr>
                        <th className="border border-slate-100 px-4">NIT</th>
                        <th className="border border-slate-100 px-2">Nombre de almacén</th>
                        <th className="border border-slate-100 px-2">Teléfono</th>
                        <th className="border border-slate-100 px-2">Cantidad</th>
                        <th className="border border-slate-100 px-2">Propietario</th>
                        <th className="border border-slate-100 px-2">Email propietario</th>
                        <th className="border border-slate-100 px-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { tableStore }
                </tbody>
            </table>

        </div>
    )
}