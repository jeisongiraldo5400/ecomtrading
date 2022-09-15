
//Link
import Link from 'next/link';


export default function Owners() {
    return(
        <div>
            <Link href="admin?view=registerOwner">
                <a class="bg-green-500 py-2 px-4 text-white rounded-[10px]">Registrar propietario</a>
            </Link>
        </div>    
    )
}