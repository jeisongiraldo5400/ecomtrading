import React, { useState, useEffect } from 'react';

//Toast-Notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Redux
import { useSelector, useDispatch } from 'react-redux';

//Components
import { Button } from "../Button";

//http
import { get_all_product_type, search_bank_account, validate_data } from '../../../../lib/http';

export const FormStore = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_all_product_type())
    }, [])

    //states 
    const [message, setMessage] = useState('');
    const [messageNit, setMessagNit] = useState('');
    const [messageBank, setMessageBank] = useState('');
    const [idPropietario, setIdPropietario] = useState('');
    const [isActiveButton, setIsActiveButton] = useState(false);

    const [form, setForm] = useState({
        cantidad: '',
        telefono: '',
        nombre: '',
        nit: '',
        cuenta_bancaria: ''
    });


    //Traer los tipos de productos de la bd
    const products = useSelector(state => state.getData.productsType);

    //Handler
    const handlerStore = (e) => {
        e.preventDefault();

        let data = {
            propietario_id: idPropietario,
            tipo_producto_id: '',
            cantidad: form.cantidad,
            telefono: form.telefono,
            nombre: form.nombre,
            nit: form.nit,
            cuenta_bancaria_id: '',
        }
        console.log(form)
    }

    const handleChange = (e) => {

        if(e.target.name === 'nit') {
            if(e.target.value.length > 0) {
                dispatch(validate_data({ 
                    tipo_data: 'nit', 
                    data: e.target.value 
                }));
            }
        }

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    //Treamos los datos del propietario desde la bd
    const searchDataOwner = useSelector(state => state.dataOwner.dataOwners);

    useEffect(() => {

        if(searchDataOwner.ok === true) {
            setIdPropietario(searchDataOwner.data[0].id_propietario);
            //Buscamos los datos bancarios del propietario
            dispatch(search_bank_account({
                id: searchDataOwner.data[0].id_propietario
            }));
            setIsActiveButton(false);
            setMessage('');
        } else {
            setMessage('No se han registrados datos del propietario');
            setIsActiveButton(true);
        }

    }, [searchDataOwner]);

     // Validamos si ya existe un nit registrado
    const validateNit = useSelector(state => state.propietario.validateData);

    useEffect(() => {
        if(validateNit.ok) {
            setMessagNit(validateDataOwner);
            setIsActiveButton(true);
        } else {
            setMessagNit('');
            setIsActiveButton(false);
        }
    }, [validateNit]);

    const validateBackAccount = useSelector(state => state.getData.searchAccountBank);

    useEffect(() => {

        if(validateBackAccount.length > 0) {
            console.log(validateBackAccount);
        } else {
            setIsActiveButton(true);
            setMessageBank('No se encontraron datos bancarios');
            
        }

    }, [validateBackAccount]);

    return (
        <form className="bg-green-500 max-w-sm p-4 mt-4 mb-4 text-green-100 rounded" onSubmit={handlerStore}>

            { message ? <p className="bg-blue-600 py-2 text-center text-white mb-8 rounded">{message}</p> : '' }

            { messageBank ? <p className="bg-red-600 py-2 text-center text-white mb-8 rounded">{ messageBank }</p> : '' }

            {
                searchDataOwner.ok === true ? 
                <div className="bg-green-600 p-2 rounded-md mb-4">
                    <ul>
                        <li className="text-2xl">Propietario</li>
                        <li className="ml-5 bold">{searchDataOwner.data[0].nombres}</li>
                        <li className="ml-5">{searchDataOwner.data[0].cedula}</li>
                    </ul>
                </div> : ''
            }

            <h1 className="text-2xl text-bold text-gray pb-3">Registrar Almacén</h1>

            <label htmlFor="nit" className="block text-sx font-bold mb-2">NIT: </label>
            <input 
                type="text" 
                name="nit" 
                id="nit" 
                placeholder="NIT"
                required
                value={form.nit}
                onChange={handleChange}
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>

            { messageNit?.tipo === 'nit' ? <label className="block p-2 bg-red-500 mt-2 rounded-md mb-2">{ messageNit.message }</label> : ''}

            <label htmlFor="nombre" className="block text-sx font-bold mb-2">Nombre: </label>
            <input 
                type="text" 
                name="nombre" 
                id="nombre" 
                placeholder="Nombre"
                required
                value={form.nombre}
                onChange={handleChange}
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>

            <label htmlFor="tipo_producto" className="block text-sx font-bold mb-2">Tipo de producto: </label>
            <select 
                type="text" 
                name="tipo_producto"
                id="tipo_producto" 
                required
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400" placeholder="Café, Cacao, Algodon">
                    <option></option>
                { 
                    products.map((product, index) => (
                        <option key={index}>{product.nombre}</option>
                    )) 
                }
                </select>

            <label htmlFor="cantidad" className="block text-sx font-bold mb-2">Cantidad: </label>
            <input 
                type="number" 
                name="cantidad" 
                id="cantidad"
                placeholder="Cantidad"
                required
                value={form.cantidad}
                onChange={handleChange}
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>

            <label htmlFor="cuenta_bancaria" className="block text-sx font-bold mb-2">Cuenta Bancaria: </label>
            <select 
                type="text" 
                name="cuenta_bancaria" 
                id="cuenta_bancaria" 
                placeholder="Cuenta bancaria"
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400">
                    <option></option>
                </select>

            <label htmlFor="telefono" className="block text-sx font-bold mb-2">Teléfono: </label>
            <input 
                type="text" 
                name="telefono" 
                id="telefono" 
                placeholder="Teléfono"
                required
                value={form.telefono}
                onChange={handleChange}
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>

            <Button name='Guardar Almacén' color='green-500' state={isActiveButton} />

            <ToastContainer />

        </form>
    )
}