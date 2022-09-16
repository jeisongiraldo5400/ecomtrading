import React, { useState, useEffect } from 'react';

//NextImage
import Image from 'next/image'

//Toast-Notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Redux
import { useSelector, useDispatch } from 'react-redux';


//Icons 
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Components
import { Button } from "../Button";
import { Spinner } from '../spinner';

//Http
import { create_owner, validate_data, update_owner, upload_imgs_owner, update_imgs_owner } from '../../../../lib/http';

//Actions
import { saveDataOwner } from '../../../../app/reducer/dataOwner';
import { ImageLoading } from '../ImageLoading';

export const FormOwner = () => {

    const dispatch = useDispatch();

    //states
    const [message, setMessage] = useState('');
    const [isActiveButton, setIsActiveButton] = useState(false);
    const [loading, setLoading] = useState(false);
    const [update, setUpdate] = useState(false);

    //estados para verificar la cedula y el email
    const [verifyCedula, setVerifyCedula] = useState(false);
    const [verifyEmail, setVerifyEmail] = useState(false);

    //img 
    const [file, setFile] = useState('');
    const [pathImage, setPathImage] = useState('');
    const [image, setImage] = useState('');

    const [form, setForm] = useState({
        cedula: '',
        nombres: '',
        apellidos: '',
        telefono: '',
        edad: '',
        email: '',
    });

    //Treamos los datos del propietario desde la bd
    const searchDataOwner = useSelector(state => state.dataOwner.dataOwners);

    //Cargar datos en formulario, cuando un propietario se acaba de registrar
    const dataOwner = useSelector(state => state.dataOwner.getSaveDataOwner);

    useEffect(() => {

        if(dataOwner) {

            setForm({
                cedula: dataOwner.cedula,
                nombres: dataOwner.nombres,
                apellidos: dataOwner.apellidos,
                telefono: dataOwner.telefono,
                edad: dataOwner.edad,
                email: dataOwner.email
            });

            setUpdate(true);
            setVerifyCedula(dataOwner.cedula);
            setVerifyEmail(dataOwner.email);

            if(searchDataOwner.ok === true || dataOwner?.img === `${dataOwner?.cedula}.png`) {
                setPathImage('');
                console.log('si paso')
                setImage(`/uploads/${dataOwner.cedula}.png`);
            }
        }

    }, [dataOwner, searchDataOwner]);


    //Se validan los campos cedula y email que no existan en la base de datos
    const handleChange = (e) => {

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


    //Verificar la creación del propietario
    const verifyCreationOwner = useSelector(state => state.propietario.verifyCreation);

    useEffect(() => {
        if(verifyCreationOwner.ok === true) {
            setLoading(false);
            setIsActiveButton(true);
        }
    }, [verifyCreationOwner]);

    const handlerOwner = (e) => {
        e.preventDefault();
        setIsActiveButton(true);
        setLoading(true);

        let upload = {
            cedula_propietario: form.cedula,
        }

        if(update === false) {
            //Registrar el propietario
            toast.success('Propietario creado con éxito');
            dispatch(create_owner(form));
            if(file?.size > 0) {
                dispatch(upload_imgs_owner(upload, file));
                setImage('');
            }
        } else {
            dispatch(update_owner(form));
            if(file?.size > 0) {
                dispatch(update_imgs_owner(upload, file));
                setImage('');
            }
            toast.success('Propietario actualizado con éxito');
        }

        //Guardar los datos del propietario en el estado global
        dispatch(saveDataOwner(form));
    
    }

    // Validamos si ya existe una cedula o email
    const validateDataOwner = useSelector(state => state.propietario.validateData);

    useEffect(() => {
        if(validateDataOwner.ok) {
            if(form.cedula !== verifyCedula || form.email !== verifyEmail) {
                setMessage(validateDataOwner);
                setIsActiveButton(true);
            } else {
                setMessage('');
                setIsActiveButton(false);
            }
            
        }else {
            setMessage('');
            setIsActiveButton(false);
        }
    }, [validateDataOwner, dataOwner, verifyCedula, form.cedula, form.email, verifyEmail]);
    //#endregion

    //Verificar actualización del propietario
    const verifyUpdate = useSelector(state => state.propietario.verifyUpdateOwner);

    useEffect(() => {
        if(verifyUpdate.ok === true) {
            setLoading(false);
        }
    }, [verifyUpdate, pathImage])


    //Cargar imagen del propietario
    const onFileChange = (e) => {
        if(e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if(file.type.includes("image")) {
                const render = new FileReader();
                /*reader.addEventListener('load', () => {
                    setImage(reader.result);
                });*/
                render.readAsDataURL(file);

                render.onload = () => {
                    setImage('');
                    setPathImage(render.result);
                }
                
                setFile(file);

            } else {
                toast.warning('Debe seleccionar una imagen');
            }
        }
    }

    //Verificamos si se actualiza la imagen
    const verifyUpdateImg = useSelector(state => state.propietario.upload);

    useEffect(() => {
        if(verifyUpdateImg.length > 0 ) {
            setPathImage('');
            setImage(`/uploads/${dataOwner.cedula}.png`);
            console.log(image);
        } 
    }, [verifyUpdateImg]);


    return(
        <>
            <div className="grid grid-cols-2">
                <form className="bg-green-500 max-w-sm p-4 mt-4 mb-4 ml-10 text-green-100 rounded-[16px]" onSubmit={handlerOwner}>

                <h1 className="text-2xl text-bold text-gray pb-3">{
                    update === false ? 'Registrar Propietario' : 'Actualizar Propietario'
                }</h1>

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

                <label htmlFor="image" className="block text-sx font-bold mb-2 mt-2">Imagen: </label>
                <input
                    type="file"
                    name="image"
                    id="image"
                    placeholder="image"
                    onChange={onFileChange}
                    disabled={message?.ok == true ? true : false}
                    className="
                    block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-black
                    hover:file:bg-violet-100 " />


                <Button name="Guardar propietario" color="green-500" state={isActiveButton}/>

                <div className="mt-5">
                    <Spinner state={loading}/>
                </div>

                </form>

                <div className="ml-5 mt-10">
                    <div className="bg-white w-72 ml-10 h-64 rounded-[26px] text-center border-2 shadow-md">
                        <br />
                        <p className="">Fotografía</p>
                        <br />
                        {
                            pathImage !== '' || image !== '' ?
                            <ImageLoading url={pathImage !== '' ? pathImage : image } />
                        : <FontAwesomeIcon icon={faUser} className="h-32 text-zinc-400" />
                        }

                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
            />
        </>
    )
}