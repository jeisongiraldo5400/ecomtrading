import React, { useEffect, usState } from 'react';

import { useRouter } from 'next/router'

//Link
import Link from 'next/link';

//Redux 
import { useDispatch, useSelector} from 'react-redux';

//http
import { get_all_owners, delete_owner, get_all_data_owner_ecom } from '../../../lib/http';

//Actions
import { deleteOwner, dataOwnerEcom } from '../../../app/reducer/propietarioSlice';

import { saveDataOwner, saveDataDirection, saveDataBank, saveDataStore } from '../../../app/reducer/dataOwner';

//Toast-Notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//icons
import { FaEdit, FaTrash } from 'react-icons/fa';


export default function Owners() {

    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_all_owners());
    }, []);


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
        toast.success('Propietario eliminado');
        let data = {
            cedula: e
        };
        dispatch(delete_owner(data));
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
        router.push('/admin?view=registerOwner');
    }

    const tableOwners = dataAllOwners.map((owner, index) => (
        <tr key={index}>
            <td className="border border-slate-300">{owner.cedula}</td>
            <td className="border border-slate-300">{owner.nombres}</td>
            <td className="border border-slate-300">{owner.apellidos}</td>
            <td className="border border-slate-300">{owner.edad}</td>
            <td className="border border-slate-300">{owner.telefono}</td>
            <td className="border border-slate-300">{owner.direccion === ''? 'Sin dirección' : owner.direccion}</td>
            <td className="border border-slate-300">{owner.numero_cuenta == 0 ? 'No tiene cuenta bancaria': owner.numero_cuenta }</td>
            <td className="border border-slate-300">{owner.email}</td>
            <td colSpan={2} className="sidebar_inline_link border border-slate-300 m-1" >
                <a className="text-green-400 cursor-pointer" onClick={() => selectOwner(owner.cedula) }><FaEdit /></a>
                <a className="text-red-400 cursor-pointer" onClick={() => deleteData(owner.cedula) }><FaTrash /></a>
            </td>
        </tr>
    ))

    return(
        <div className="bg-zinc-100 p-10 rounded-[10px]">
            <Link href="admin?view=registerOwner">
                <a className="bg-green-700 py-2 px-4 mb-5 text-white rounded-[10px]" onClick={() => registerOwner() }>Registrar propietario</a>
            </Link>

            <p className="mt-10 text-2xl text-slate-700">#{dataAllOwners.length} Propietarios</p>
            <table className="table-auto border-1 mt-3 mb-10 rounded-[10px] text-center">
                <thead className="bg-zinc-300 text-gray-500 rounded-sm">
                    <tr>
                        <th className="border border-slate-100 px-1">Cédula</th>
                        <th className="border border-slate-100 px-1">Nombres</th>
                        <th className="border border-slate-100 px-1">Apellidos</th>
                        <th className="border border-slate-100 px-1">Edad</th>
                        <th className="border border-slate-100 px-1">Teléfono</th>
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

            <ToastContainer />
        </div>    
    )
}