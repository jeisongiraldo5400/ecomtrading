
//NEXTJS
import Link from 'next/link'

//icons
import { faHome, faStore, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Sidebar(){
    return (
        <nav className="p-5 w-56 bg-slate-200 mt-5 ml-5 rounded-[10px]">
            <ul>
                <li className="bg-green-600 py-2 px-2 rounded text-white mb-2 cursor-pointer">
                    <Link href="/admin?view=Home">
                        <a><FontAwesomeIcon icon={faHome} /> Inicio</a>
                    </Link>
                </li>
                <li className="bg-green-600 py-2 px-2 rounded text-white mb-2 curs.p-5">
                    <Link href="/admin?view=Owner">
                        <a><FontAwesomeIcon icon={faUser} /> Propietarios</a>
                    </Link>
                </li>
                <li className="bg-green-600 py-2 px-2 rounded text-white mb-2 cursor-pointer">
                    <Link href="/admin?view=Stores">
                        <a><FontAwesomeIcon icon={faStore} /> Almacenes</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}