import React, { useState, useEffect } from 'react';

export const Spinner = ({ state, message = 'Procesando' }) => {

    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        if(state) {
            setSpinner(true);
        }else {
            setSpinner(false);
        }
    }, [state]); 

    return(
            <>
                { state ? 
                    <div className="text-center mt-10">
                        <div className="spinner ml-40"></div> 
                        { message ? <p className="ml-3">{message}</p> : '' }
                    </div>
                : '' }
            </>
    )
}