import React, { useState, useEffect } from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';

//import Http
import {  get_all_stores } from  '../../../lib/http';


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
        <td>{store.nit}</td>
            <td>{store.nombre}</td>
        <td>{store.telefono}</td>
        <td>{store.cantidad}</td>
            <td>{store.nombre_propietario} {store.apellidos}</td>
            <td>{store.email}</td>
            <td colSpan={2}>
                <a>Editar</a>
                <a>Eliminar</a>
            </td>
        </tr>
    ))

    return (
        <div>
            <p className="text-xl border-zice-200 border-2 p-2 rounded-sm">Almacenes</p>

            <table>
                <thead>
                    <tr>
                        <th>NIT</th>
                        <th>Nombre almacén</th>
                        <th>Teléfono</th>
                        <th>Cantidad</th>
                        <th>Propietario</th>
                        <th>Email propietario</th>
                    </tr>
                </thead>
                <tbody>
                    { tableStore }
                </tbody>
            </table>

        </div>
    )
}