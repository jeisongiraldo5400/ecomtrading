import React from 'react';

//Nextjs 
import Image from 'next/image'

import Link from 'next/link';

export default function Login() {
    return (
        <div className="container">
            
            <div className="grid grid-cols-2 justify-items-center">
                <div className="bg-zinc-100 mt-20 mb-20border-zinc-300 p-10">
                    <Image
                        src="/static/logo_ecomtrading.png"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="object-contain"
                    />
                </div>
                <div className="mt-56 bg-zinc-200 rounded p-10">
                    <h1 class="text-5xl pb-12 text-bold text-green-700">Ecomtrading</h1>
                    <label htmlFor="email" className="block text-sx font-bold mb-2">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        placeholder="example@example.com"
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-1 px-1 block appearance-none leading-normal text-slate-400 w-60"/>

                    <label htmlFor="password" className="block text-sx font-bold mt-2">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="********"
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-1 px-1 bloc appearance-none leading-normal text-slate-400 w-60 mt-2"/>

                    <Link href="/admin">
                        <button className="bg-green-500 py-2 px-8 mt-4 block rounded-md text-white hover:bg-green-700">Ingresar</button>
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
