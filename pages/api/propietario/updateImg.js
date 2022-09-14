
//import nextConnect from 'next-connect';
import pool from '../../../config/db';

const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
const slugify = require('slugify')


export const config = {
    api: {
        bodyParser: false,
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) =>{

    const data = new Promise((resolve, reject) => {

        const form = formidable({
            multiples: true,
            uploadDir: `./public/uploads/`,
            keepExtensions: true,
            keepFileName: true
        });

        
        form.parse(req, (err, fields, files) => {

            if(err) return reject(err);

            let name = files.media.newFilename
            let originalName = files.media.originalFilename;
            fs.renameSync(`./public/uploads/${name}`, `./public/uploads/${originalName}.png`);

            let nameImg = `${originalName}.png`;

            //Registramos el nombre de la imagen del propietario
            let cedula_propietario = originalName.split('.')[0];
            pool.query(`UPDATE uploads 
            SET img = $1
            WHERE cedula_propietario = $2`,
                [nameImg, cedula_propietario])
                .then((response) => {
                        resolve(response);
                }).catch(err => {
                    reject(err);
                });

            
        });


    });


    res.json(data);

    
}

