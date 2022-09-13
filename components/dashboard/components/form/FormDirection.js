import React, { useState, useEffect } from 'react';

//Redux 
import { useDispatch, useSelector } from 'react-redux';

//Components
import { Button } from "../Button"

//Http
import { get_all_departments, get_all_municipies } from '../../../../lib/http';


export const FormDirection = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_all_departments());
    }, []);


    // States
    const [nameDepartments, setNameDepartments] = useState('');
    const [codigoDepartments, setCodigoDepartments] = useState('');
    const [nameMunicipies, setNameMunicipies] = useState('');
    const [codigoMunicipies, setCodigoMunicipies] = useState('');
    const [direction, setDirection] = useState('');

    //Recibimos los departamentos y municipios
    const departments = useSelector(state => state.direction.departments);
    const municipies = useSelector(state => state.direction.municipies);

    //handlers
    const handlerDirecction = (e) => {
        e.preventDefault();

        let data = {
            direccion: direction,
            departamento_id: codigoDepartments,
            municipio_id: codigoMunicipies,
            propietario_id:"" 
        }

        console.log(data);

    }

    const handleDepartments = (e) => {
        setNameDepartments(e.target.value);

        const codigo = departments.find(d => d.nombre === e.target.value)?.id_departamento;

        if(codigo) {
            setCodigoDepartments(codigo);
            let data = {
                departamento: codigo
            }
            dispatch(get_all_municipies(data));
        } else {
            let data = {
                departamento: 0
            }
            dispatch(get_all_municipies(data));
        }
        
    }

    const handleMunicipies = (e) => { 
        setNameMunicipies(e.target.value);

        const codigo = municipies.find(m => m.nombre === e.target.value)?.id_municipio;

        if(codigo) {
            setCodigoMunicipies(codigo);
        }
    }

    const handleDirection = (e) => {
        setDirection(e.target.value);
    }
    

    return (
        <form className="bg-green-500 max-w-sm p-4 mt-4 text-green-100 rounded" onSubmit={handlerDirecction}>

            <h1 className="text-2xl text-bold text-gray pb-3">Dirección</h1>

            <label htmlFor="direccion" className="block text-sx font-bold mb-2">Dirección: </label>
            <input 
                type="text" 
                name="direccion"
                id="direccion" 
                value={ direction }
                onChange={ handleDirection }
                required
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400" placeholder="Dirección" />

            <label htmlFor="nomre" className="block text-sx font-bold mb-2">Departamento: </label>
            <select 
                type="text" 
                name="departamento" 
                id="departamento"
                placeholder="Departamento"
                value={ nameDepartments }
                onChange={ handleDepartments }
                required
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400">
                    <option></option>
                    { departments ? departments.map((data, index) => (
                            <option key={index} >{data.nombre}</option>
                        ))
                        : ''
                    }
                </select>

            <label htmlFor="apellido" className="block text-sx font-bold mb-2">Municipio: </label>
            <select 
                type="text" 
                name="municipio" 
                id="municipio" 
                placeholder="Municipio"
                value={ nameMunicipies }
                onChange={ handleMunicipies }
                required
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-1 block w-full appearance-none leading-normal text-slate-400">
                    <option></option>
                    { municipies ? municipies.map((data, index) => (
                            <option key={index} >{data.nombre}</option>
                    ))
                    : ''
                }
                </select>

            <Button name='Guardar dirección' color='green-500' />

        </form>
    )
}