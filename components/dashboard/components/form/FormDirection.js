import React, { useState, useEffect } from 'react';

//Toast-Notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Redux 
import { useDispatch, useSelector } from 'react-redux';

//Components
import { Button } from "../Button"
import { Spinner } from '../spinner';


//Actions
import { saveDataDirection } from '../../../../app/reducer/dataOwner';

//Http
import { get_all_departments, get_all_municipies, search_all_data_owner, create_direcction, update_direction } from '../../../../lib/http';


export const FormDirection = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_all_departments());
    }, []);


    // States
    const [loading, setLoading] = useState(false);
    const [nameDepartments, setNameDepartments] = useState('');
    const [codigoDepartments, setCodigoDepartments] = useState('');
    const [nameMunicipies, setNameMunicipies] = useState('');
    const [codigoMunicipies, setCodigoMunicipies] = useState('');
    const [direction, setDirection] = useState('');
    const [idPropietario, setIdPropietario] = useState('');
    const [message, setMessage] = useState('');
    const [isActiveButton, setIsActiveButton] = useState(false);
    const [update, setIsUpdate] = useState(false);

    //Recibimos los departamentos y municipios
    const departments = useSelector(state => state.direction.departments);
    const municipies = useSelector(state => state.direction.municipies);

    //Cargar datos de dirección si ya esta registrado en la base de datos
    const dataDirection = useSelector(state => state.dataOwner.getSaveDataDirection);

    useEffect(() => {

        if(Object.entries(dataDirection).length > 0) {

            const nameDepartments = departments.find(d => d.id_departamento === dataDirection.departamento_id)?.nombre;
            setNameDepartments(nameDepartments);
            const nameMunicipies = municipies.find(m => m.id_municipio === dataDirection.municipio_id)?.nombre;
            setNameMunicipies(nameMunicipies);

            setCodigoDepartments(dataDirection.departamento_id);
            setCodigoMunicipies(dataDirection.municipio_id);
            setDirection(dataDirection.direccion);
            setIdPropietario(dataDirection.propietario_id);
            setIsUpdate(true);
        }

    }, [ dataDirection ]);

    //Cargar datos del propietario registrado
    const dataOwner = useSelector(state => state.dataOwner.getSaveDataOwner);

    useEffect(() => {

        if(Object.entries(dataOwner).length > 0){

            let data = {
                cedula: dataOwner.cedula
            }

            dispatch(search_all_data_owner(data));
        }

    }, [ dataOwner, dispatch ]);

    //handlers
    const handlerDirecction = (e) => {
        e.preventDefault();

        setLoading(true);
        setIsActiveButton(true);

        let data = {
            direccion: direction,
            departamento_id: codigoDepartments,
            municipio_id: codigoMunicipies,
            propietario_id: idPropietario
        }

        if(update === false) {
            dispatch(create_direcction(data));
            toast.success('Dirección registrada con éxito');
        } else {
            toast.success('Dirección actualizada con éxito');
            dispatch(update_direction(data));
        }

        dispatch(saveDataDirection(data));
        

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
    

    //Treamos los datos del propietario desde la bd
    const searchDataOwner = useSelector(state => state.dataOwner.dataOwners);

    useEffect(() => {

        if(searchDataOwner.ok === true) {
            setIdPropietario(searchDataOwner.data[0].id_propietario);
            setIsActiveButton(false);
            setMessage('');
        } else {
            setMessage('No se han registrados datos del propietario');
            setIsActiveButton(true);
        }

    }, [searchDataOwner]);


    //Verificar si se creo la dirección
    const verifyCreateDirection = useSelector(state => state.direction.verifyCreateDirection);

    useEffect(() => {

        if(verifyCreateDirection.ok === true) {
            setLoading(false);
            setIsActiveButton(false);
        }

    }, [verifyCreateDirection]);

    //Verificar si se actualizo la dirección
    const verifyUpdateDirection = useSelector(state => state.direction.updateDirection);
    
    useEffect(() => {
        if(verifyUpdateDirection.ok === true) {
            setLoading(false);
            setIsActiveButton(false);
        }
    }, [verifyUpdateDirection]);

    return (
        <form className="bg-green-500 max-w-sm p-4 mt-4 text-green-100 rounded" onSubmit={handlerDirecction}>

            { message ? <p className="bg-blue-600 py-2 text-center text-white mb-8 rounded">{message}</p> : '' }
            
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

            <Button name='Guardar dirección' color='green-500' state={isActiveButton}  />

            <div className="mt-5">
                <Spinner state={loading}/>
            </div>

            <ToastContainer />

        </form>
    )
}