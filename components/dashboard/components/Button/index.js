import React, { useState, useEffect } from 'react';

export const Button = ({name, color, state }) => {


    const [bgColor, setBgColor] = useState(color);
    const [hover, setHover] = useState('hover:bg-green-800');

    useEffect(() => {

        if(state) {
            setBgColor('zinc-100');
            setHover('');
        }else {
            setBgColor(color);
            setHover('hover:bg-green-800');
        }

    }, [state,color]);


    return (
        <button disabled={state} className={`bg-${bgColor} px-2 py-2 rounded-md mt-5 cursor-pointer text-white border border-white-300 ${hover}`}>
            {name}
        </button>
    )
}