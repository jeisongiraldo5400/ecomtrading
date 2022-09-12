import React, { useState, useEffect } from 'react';

//NEXTJS
import Link from 'next/link';

//Redux
import { useDispatch, useSelector } from 'react-redux';

//icons
import { faHome, faStore, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//http
import { get_all_owners } from '../../lib/http';

//Components
import { Header } from '../shared/header';
import { RegisterData } from './registerData';



export default function Dashboard() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_all_owners());
    }, []);

    return(
        <>
            <Header />
            <div className="container mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-4 pl-10 pr-10">
                    <div className='bg-zinc-100 rounded'>
                        <nav className="p-5">
                            <ul>
                                <li className="bg-green-600 py-2 px-2 rounded text-white mb-2 cursor-pointer">
                                    <FontAwesomeIcon icon={faHome} /> Inicio
                                </li>
                                <li className="bg-green-600 py-2 px-2 rounded text-white mb-2 curs.p-5">
                                <FontAwesomeIcon icon={faUser} /> Propietarios
                                    </li>
                                <li className="bg-green-600 py-2 px-2 rounded text-white mb-2 cursor-pointer">
                                <FontAwesomeIcon icon={faStore} /> Almacenes
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* contenido de la aplicacion */}

                    <RegisterData /> 

                </div>
            </div>
            
        </>
    )
}