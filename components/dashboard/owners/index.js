import React, { useEffect, usState } from 'react';

//Link
import Link from 'next/link';

//Redux 
import { useDispatch, useSelector} from 'react-redux';

//http
import { get_all_owners } from '../../../lib/http';


export default function Owners() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_all_owners());
    }, []);


    //Traer los datos de los propietarios
    const dataAllOwners = useSelector(state => state.propietario.owners);



    const tableOwners = dataAllOwners.map((owner, index) => (
        <tr key={index}>
            <td>{owner.cedula}</td>
            <td>{owner.nombres}</td>
            <td>{owner.apellidos}</td>
            <td>{owner.edad}</td>
            <td>{owner.telefono}</td>
            <td>{owner.email}</td>
            <td colSpan={2}>
                <a>Editar</a>
                <a>Eliminar</a>
            </td>
        </tr>
    ))

    return(
        <div>
            <Link href="admin?view=registerOwner">
                <a class="bg-green-700 py-2 px-4 text-white rounded-[10px]">Registrar propietario</a>
            </Link>

            <table>
                <thead>
                    <tr>
                        <th>Cédula</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Edad</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { tableOwners }
                </tbody>
            </table>

        </div>    
    )
}