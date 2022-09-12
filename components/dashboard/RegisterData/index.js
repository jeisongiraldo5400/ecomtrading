import React, { useState} from 'react';


//icons
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Form
import { FormOwner } from '../components/form/FormOwner';
import { FormDirecction } from '../components/form/FormDirecction';
import { FormStore } from '../components/form/FormStore';
import { FormBank } from '../components/form/FormBank';

export const RegisterData = () => {

    const [formOwner, setFormOwner] = useState(true);
    const [formDirection, setFormDirection] = useState(false);
    const [formStore, setFormStore] = useState(false);
    const [formBank, setFormBank] = useState(false);
    //const [formComplete, setFormComplete] = useState(false);
    const [colorActive] = useState('green-600');
    const [textColor] = useState('green-700');


    const handlerFormOwner = () => {
        setFormOwner(true);
        setFormDirection(false);
        setFormStore(false);
        setFormBank(false); 
    }

    const handlerFormDirection = () => {
        setFormOwner(false);
        setFormDirection(true);
        setFormStore(false);
        setFormBank(false); 
    }

    const handlerFormStore = () => {
        setFormOwner(false);
        setFormDirection(false);
        setFormStore(true);
        setFormBank(false);    

    }

    const handlerFormBank = () => {
        setFormOwner(false);
        setFormDirection(false);
        setFormStore(false);
        setFormBank(true);    
    }


    return(
        <div className='sm:cols-span-1 md:cols-span-2 lg:col-span-3'>
        <div className="bg-zinc-100 rounded">
            
            <h1 className="p-4">Register</h1>

            <div className='grid grid-cols-4 mt-5 ml-5 pr-5 pb-10 justify-items-center'>
                <div className={`bg-${ formOwner ? colorActive: 'gray'} rounded-full h-20 w-20 text-${formOwner ? 'white' : textColor} text-center shadow cursor-pointer border-2 border-green-300 `} onClick={handlerFormOwner}>
                    <p className="mt-6 ml-2 mr-2 text-md text-xs">
                        Datos básicos
                    </p>
                </div>
                <div className={`bg-${formBank ? colorActive : 'gray'} rounded-full h-20 w-20 text-${formBank ? 'white' : textColor} shadow cursor-pointer text-center border-2 border-green-300`} onClick={handlerFormBank}>
                    <p className='mt-6  text-xs'>
                        Datos Bancarios
                    </p>
                </div>
                <div className={`bg-${formDirection ? colorActive : 'gray'} rounded-full h-20 w-20 text-${formDirection ? 'white' : textColor} shadow cursor-pointer border-2 border-green-300`} onClick={handlerFormDirection}>
                    <p className='mt-8 ml-4 text-xs'>
                        Dirección
                    </p>
                </div>
                <div className={`bg-${formStore ? colorActive: 'gray'} rounded-full h-20 w-20 text-${ formStore ? 'white' : textColor} shadow cursor-pointer border-2 border-green-300`} onClick={handlerFormStore}>
                    <p className="mt-8 ml-5 text-xs">
                        Almacén
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 pb-10">
                <div className="ml-60">
                    { formOwner ? <FormOwner /> : ''}
                    { formBank ? <FormBank /> : '' }
                    { formDirection ? <FormDirecction /> : '' }
                    { formStore ? <FormStore /> : '' }
                </div>
            </div>

        </div>
    </div>
    )
}