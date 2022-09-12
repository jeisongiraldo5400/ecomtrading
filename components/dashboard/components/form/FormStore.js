


//Components
import { Button } from "../Button";

export const FormStore = () => {


    const handlerStore = () => {
        e.preventDefault();
        console.log('handlerStore')
    }

    return (
        <form className="bg-green-500 max-w-sm p-4 mt-4 text-green-100 rounded" onSubmit={handlerStore}>

            <h1 className="text-2xl text-bold text-gray pb-3">Registrar Almacén</h1>

            <label htmlFor="nit" className="block text-sx font-bold mb-2">NIT: </label>
            <input 
                type="text" 
                name="nit" 
                id="nit" 
                placeholder="NIT"
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>

            <label htmlFor="nombre" className="block text-sx font-bold mb-2">Nombre: </label>
            <input 
                type="text" 
                name="nombre" 
                id="nombre" 
                placeholder="Nombre"
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>

            <label htmlFor="direccion" className="block text-sx font-bold mb-2">Tipo de producto: </label>
            <input 
                type="text" 
                name="tipo_producto"
                id="tipo_producto" 
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400" placeholder="Café, Cacao, Algodon" />

            <label htmlFor="nomre" className="block text-sx font-bold mb-2">Cantidad: </label>
            <input 
                type="number" 
                name="cantidad" 
                id="cantidad"
                placeholder="Cantidad"
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>

            <label htmlFor="apellido" className="block text-sx font-bold mb-2">Cuenta Bancaria: </label>
            <input 
                type="text" 
                name="cuenta_bancaria" 
                id="cuenta_bancaria" 
                placeholder="Cuenta bancaria"
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>

            <label htmlFor="apellido" className="block text-sx font-bold mb-2">Teléfono: </label>
            <input 
                type="text" 
                name="telefono" 
                id="telefono" 
                placeholder="Teléfono"
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>

            <Button name='Guardar Almacén' color='green-500' />

        </form>
    )
}