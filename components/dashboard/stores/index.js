import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router'

//Redux
import { useDispatch, useSelector } from 'react-redux';

//import Http
import {get_all_stores, delete_store, get_all_data_owner_ecom, delete_owner} from '../../../lib/http';

//Toast-Notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//icons
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Modal } from "../components/Modal";


export default function Stores(){
    
    const router = useRouter();
    const dispatch = useDispatch();

    //Datos de todos los almacenes
    const dataStores = useSelector(state => state.dataStore.getAllDataStore);

    useEffect(() => {
        dispatch(get_all_stores());
    },[]);

    //states
    const [modal, setModal] = useState(false);
    const [dataCedula, setDataCedula] = useState('');

    //Se pasa el estado del almacen a 0 
    const deleteStore = (e) => {
        setModal(true);
        setDataCedula(e);
    }

    //Seleccionar toda la información del propietario
    const selectOwner = (e) => {
        let data = {
            cedula: e
        };
        dispatch(get_all_data_owner_ecom(data));
        router.push('/admin?view=registerOwner');
    }

    const verifyDeleteData = useSelector(state => state.dataStore.deteleStore);

    useEffect(() => {

        if(verifyDeleteData.length > 0){
            dispatch(get_all_stores());
        }

    }, [verifyDeleteData]);

    //Enventos del modal
    const cancel = () => {
        setModal(false);
    }

    const confirm = () => {
        toast.success('Almacén eliminado');
        let data = {
            id: dataCedula
        }
        dispatch(delete_store(data));
        setModal(false);
    }


    const tableStore = dataStores.map((store, index) => (
        <tr key={index}>
            <td className="border border-slate-300 p-1">{store.nit}</td>
            <td className="border border-slate-300 p-1">{store.nombre_almacen}</td>
            <td className="border border-slate-300 p-1">{store.telefono_almacen}</td>
            <td className="border border-slate-300 p-1">{store.cantidad}</td>
            <td className="border border-slate-300 p-1">{store.nombre_propietario} {store.apellidos}</td>
            <td className="border border-slate-300 p-1">{store.email}</td>
            <td className="sidebar_inline_link border border-slate-300">
                <a className="text-green-400 cursor-pointer p-1" onClick={() => selectOwner(store.cedula) }><FaEdit /></a>
                <a className="text-red-400 cursor-pointer p-1" onClick={() => deleteStore(store.id_almacen)}><FaTrash /></a>
            </td>
        </tr>
    ))

    return (
        <div className="bg-zinc-100 p-10 rounded-[10px]">
            <p className="text-2xl">Almacenes</p>

            { modal ?
                <Modal>
                    <p className="mt-10 text-2xl ml-3">¿Seguro que quiere eliminar el almacén?</p>
                    <div className="">
                        <button className="bg-green-900 py-2 px-6 rounded-md text-white mt-5 w-60"
                                onClick={() => confirm()}>Eliminar
                        </button>
                        <button className="bg-zinc-400 py-2 px-6 rounded-md text-white mt-5 ml-5 w-60"
                                onClick={() => cancel()}>Cancelar
                        </button>
                    </div>
                </Modal> : ''
            }

            <p className="mt-10 text-2xl text-slate-700">#{dataStores.length} Almacenes</p>
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

            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
            >
                <p>Eliminado</p>
            </ToastContainer>

        </div>
    )
}