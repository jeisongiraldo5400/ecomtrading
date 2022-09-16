

import React from 'react';

//NextImage
import Image from 'next/image'

export const ImageLoading = ({ url}) => {
    return (
            <Image
                src={url}
                alt="Perfil author"
                width={150}
                height={150}
                className="object-contain"
                priority
            /> 
    );
}

