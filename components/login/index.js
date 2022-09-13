import React from 'react';

//Nextjs 
import Image from 'next/image'

import Link from 'next/link';

export default function Login() {
    return (
        <div className="container fixed">
            
            <div className="grid grid-cols-2 justify-items-center ">
                <div className="mt-10 mb-10">
                    <Image
                        src="/static/logo_ecomtrading.png"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="object-contain"
                    />
                </div>
                <div className="mt-10 mb-28 bg-zinc-200 rounded p-10 border-2 border-right-solid border-green-600">
                    <h1 class="text-3xl pb-12 text-bold text-green-700 text-center">ECOMTRADING</h1>
                    <label className="block text-sx font-bold mb-4">Iniciar sesión</label>
                    <label htmlFor="email" className="block text-sx font-bold mb-2 text-gray-500">Correo eléctronico</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        placeholder="example@example.com"
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-1 px-1 block appearance-none leading-normal text-slate-400 w-60"/>

                    <label htmlFor="password" className="block text-sx font-bold mt-2 text-gray-500">Contraseña</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="********"
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-1 px-1 bloc appearance-none leading-normal text-slate-400 w-60 mt-2"/>

                    <Link href="/admin">
                        <button className="bg-green-500 py-2 px-8 mt-4 block rounded-md text-white hover:bg-green-700 w-full">Ingresar</button>
                    </Link>
                    <div className="block text-center mt-10 text-green-600 text-bold">
                        <a href="https://www.ecomtrading.com/">www.ecomtrading.com</a>
                        <p>2022</p>
                    </div>
                </div>
            </div>

        </div> 
    )
}
