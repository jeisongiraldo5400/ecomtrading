
import React, { useState, useEffect } from 'react';


//Redux
import { useSelector, useDispatch } from 'react-redux';

//Components
import { Button } from "../Button";


//Http
import { create_owner, validate_data } from '../../../../lib/http';

//Actions
import { getBanck } from '../../../../app/reducer/registerDataSlice';

export const FormOwner = () => {

    const dispatch = useDispatch();

    const [message, setMessage] = useState('');
    const [isActiveButon, setIsActiveButton] = useState(false);


    const [form, setForm] = useState({
        cedula: '',
        nombres: '',
        apellidos: '',
        telefono: '',
        edad: '',
        email: '',
    });

    const handleChange = (e) => {

        //Se validan los campos cedula y email que no existan en la base de datos
        if(e.target.name === 'cedula') {
            if(e.target.value.length === 10) {
                dispatch(validate_data({ 
                    tipo_data: 'cedula', 
                    data: e.target.value 
                }));
            }
        }

        if(e.target.name === 'email') {
            if(e.target.value.length > 0) {
                setTimeout(() => {
                    dispatch(validate_data({ 
                        tipo_data: 'email', 
                        data: e.target.value 
                    }));
                }, 1000);
            }
        }

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const velidateData = useSelector(state => state.propietario.validateData);

    useEffect(() => {

        if(velidateData.ok) {
            setMessage(velidateData);
            setIsActiveButton(true);
        } else {
            setMessage(velidateData);
            setIsActiveButton(false);
        }

    }, [velidateData])


    const handlerOwener = (e) => {
        e.preventDefault();

        setIsActiveButton(true);

        //Registro el propietario
        dispatch(create_owner(form));

        //Obtengo la cedula para registrar los datos bancarios
        dispatch(getBanck({
            cedula: form.cedula,
            state: true
        }));
    }


    return(
        <form className="bg-green-500 max-w-sm p-4 mt-4 text-green-100 rounded" onSubmit={handlerOwener}>

            <h1 className="text-2xl text-bold text-gray pb-3">Registrar propietario</h1>

            <label htmlFor="cedula" className="block text-sx font-bold mb-2">Cedula: </label>
            <input 
                type="number" 
                name="cedula" 
                id="cedula" 
                onChange={handleChange}
                value={form.cedula}
                required
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400" placeholder="Cédula" />
            
            { message?.tipo === 'cedula' ? <label className="block p-2 bg-red-500 mt-2 rounded-md mb-2">{ message.message }</label> : ''}

            <label htmlFor="nombres" className="block text-sx font-bold mb-2 mt-2">Nombres: </label>
            <input 
                type="text" 
                name="nombres" 
                id="nombres"
                placeholder="Nombres"
                onChange={handleChange}
                value={form.nombres}
                required
                disabled={message?.ok == true ? true : false}
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>

            <label htmlFor="apellidos" className="block text-sx font-bold mb-2 mt-2">Apellidos: </label>
            <input 
                type="text" 
                name="apellidos" 
                id="apellidos" 
                placeholder="Apellidos"
                onChange={handleChange}
                value={form.apellidos}
                required
                disabled={message?.ok == true ? true : false}
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>

            <label htmlFor="email" className="block text-sx font-bold mb-2 mt-2">Email: </label>
            <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Email"
                onChange={handleChange}
                value={form.email}
                required
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>
            
            { message?.tipo === 'email' ? <label className="block p-2 bg-red-500 mt-2 rounded-md mb-2">{ message.message }</label> : ''}

            <label htmlFor="telefono" className="block text-sx font-bold mb-2 mt-2">Telefono:</label>
            <input 
                type="text" 
                name="telefono" 
                id="telefono" 
                placeholder="Teléfono"
                onChange={handleChange}
                value={form.telefono}
                required
                disabled={message?.ok == true ? true : false}
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400"/>

            <label htmlFor="edad" className="block text-sx font-bold mb-2 mt-2">Edad: </label>
            <input 
                type="text" 
                name="edad" 
                id="edad" 
                placeholder="Edad"
                onChange={handleChange}
                value={form.edad}
                required
                disabled={message?.ok == true ? true : false}
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400" />

            <Button name="Guardar propietario" color="green-500" disabled={isActiveButon}/>

        </form>
    )
}