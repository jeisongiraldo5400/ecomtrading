import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router'

//Link
import Link from 'next/link';

//Redux 
import { useDispatch, useSelector} from 'react-redux';

//http
import { get_all_owners, delete_owner, get_all_data_owner_ecom } from '../../../lib/http';

//Actions
import { deleteOwner, dataOwnerEcom } from '../../../app/reducer/propietarioSlice';
import { searchAccountBank } from '../../../app/reducer/getDataSlice';

import { saveDataOwner, saveDataDirection, saveDataBank, saveDataStore, getAllDataOwner } from '../../../app/reducer/dataOwner';

//Toast-Notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//icons
import { FaEdit, FaTrash } from 'react-icons/fa';
//Modal
import {Modal} from "../components/Modal";


export default function Owners() {

    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_all_owners());
    }, []);


    //states
    const [modal, setModal] = useState(false);
    const [dataCedula, setDataCedula] = useState('');


    //Traer los datos de los propietarios
    const dataAllOwners = useSelector(state => state.propietario.owners);

    //Verificamos si se elimino el owner
    const verifyDeleteData = useSelector(state => state.propietario.deleteOwner);
    useEffect(() => {
        if(verifyDeleteData.length > 0) {
            dispatch(get_all_owners());
            dispatch(deleteOwner([]));
            console.log('eliminado');
        }
    }, [verifyDeleteData]);


    //Solo se coloca el estado del propietario en 0
    const deleteData = (e) => {

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

    //Vacio los estados que cargarn los formularios
    const registerOwner = () => {
        dispatch(dataOwnerEcom());
        dispatch(saveDataOwner());
        dispatch(saveDataDirection())
        dispatch(saveDataBank());
        dispatch(saveDataStore());
        dispatch(getAllDataOwner());
        dispatch(searchAccountBank());
        router.push('/admin?view=registerOwner');
    }

    const tableOwners = dataAllOwners.map((owner, index) => (
        <tr key={index}>
            <td className="border border-slate-300"></td>
            <td className="border border-slate-300">{owner.cedula}</td>
            <td className="border border-slate-300">{owner.nombres}</td>
            <td className="border border-slate-300">{owner.apellidos}</td>
            <td className="border border-slate-300">{owner.edad}</td>
            <td className="border border-slate-300">{owner.telefono}</td>
            <td className="border border-slate-300"></td>
            <td className="border border-slate-300"></td>
            <td className="border border-slate-300">{owner.direccion === ''? 'Sin dirección' : owner.direccion}</td>
            <td className="border border-slate-300">{owner.numero_cuenta == 0 ? 'No tiene cuenta bancaria': owner.numero_cuenta }</td>
            <td className="border border-slate-300">{owner.email}</td>
            <td colSpan={2} className="sidebar_inline_link border border-slate-300 m-1" >
                <a className="text-green-400 cursor-pointer text-2xl" onClick={() => selectOwner(owner.cedula) }><FaEdit /></a>
                <a className="text-red-400 cursor-pointer text-2xl" onClick={() => deleteData(owner.cedula) }><FaTrash /></a>
            </td>
        </tr>
    ))


    //Enventos del modal
    const cancel = () => {
        setModal(false);
    }

    const confirm = () => {
        toast.success('Propietario eliminado');
        let data = {
            cedula: dataCedula
        };
        dispatch(delete_owner(data));
        setModal(false);
    }

    return(
        <div className="bg-zinc-100 p-10 rounded-[10px]">
            <Link href="admin?view=registerOwner">
                <a className="bg-green-700 py-2 px-4 mb-5 text-white rounded-[10px]" onClick={() => registerOwner() }>Registrar propietario</a>
            </Link>

            {
                modal ?
                <Modal className="text-center">
                    <p className="mt-3 text-2xl ml-3">¿Seguro que quiere eliminar el propietario?</p>
                    <div className="">
                        <button className="bg-green-900 py-2 px-6 rounded-md text-white mt-5 w-60" onClick={() => confirm()}>Eliminar</button>
                        <button className="bg-zinc-400 py-2 px-6 rounded-md text-white mt-5 ml-5 w-60" onClick={() => cancel()}>Cancelar</button>
                        </div>
                </Modal> : ''
            }

            <p className="mt-10 text-2xl text-slate-700">#{dataAllOwners.length} Propietarios</p>
            <div className="overflow-scroll overflow-auto md:overflow-scroll ">
                <table className="table-auto border-1 mt-3 mb-10 rounded-[10px] text-center snap-normal z-100 shadow">
                <thead className="bg-zinc-300 text-gray-500 rounded-sm">
                    <tr>
                        <th className="border border-slate-100 px-1">Imagen</th>
                        <th className="border border-slate-100 px-1">Cédula</th>
                        <th className="border border-slate-100 px-1">Nombres</th>
                        <th className="border border-slate-100 px-1">Apellidos</th>
                        <th className="border border-slate-100 px-1">Edad</th>
                        <th className="border border-slate-100 px-1">Teléfono</th>
                        <th className="border border-slate-100 px-1">Departamento</th>
                        <th className="border border-slate-100 px-1">Municipio</th>
                        <th className="border border-slate-100 px-1">Dirección</th>
                        <th className="border border-slate-100 px-1"># Cuenta Bancaria</th>
                        <th className="border border-slate-100 px-1">Email</th>
                        <th className="border border-slate-100 px-1">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { tableOwners }
                </tbody>
            </table>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable />
        </div>    
    )
}