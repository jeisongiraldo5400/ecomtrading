
//NEXTJS
import Link from 'next/link'

//icons
import { FaStoreAlt, FaHome, FaUsers } from 'react-icons/fa';

export default function Sidebar(){
    return (
        <nav className="p-5 w-64 bg-slate-200 mt-5 ml-5 rounded-[10px]">
            <ul>
                <li className="bg-green-600 sidebar_inline_link py-2 px-2 rounded text-white mb-2 cursor-pointer">
                    <Link href="/admin?view=Home">
                        <a className="sidebar_inline_link"><FaHome />Inicio</a>
                    </Link>
                </li>
                <li className="bg-green-600 sidebar_inline_link py-2 px-2 rounded text-white mb-2 cursor-pointer p-5">
                    <Link href="/admin?view=Owner">
                        <a className="sidebar_inline_link"><FaUsers />Propietarios</a>
                    </Link>
                </li>
                <li className="bg-green-600 sidebar_inline_link py-2 px-2 rounded text-white mb-2 cursor-pointer">
                    <Link href="/admin?view=Stores">
                        <a className="sidebar_inline_link"><FaStoreAlt />Almacenes</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}