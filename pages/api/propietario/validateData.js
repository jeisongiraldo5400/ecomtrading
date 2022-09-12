
import db from '../../../config/db';

export default async function handler(req, res) {

    switch(req.method) {
        case 'POST':
            return validateData(req, res); 
        default: return res.status(405).end();
    }
}


const validateData = async (req, res) => {

    //Verificamos si es el tipo de petición que necesitamos
    const { tipo_data } = req.body;

    switch(tipo_data){
        case 'cedula': 
            return getOwnerByCedula(req, res);
        case 'email':
            return getOwnerByEmail(req, res);
        case 'nit': 
            return getOwnerByNit(req, res);
    }
}

const getOwnerByCedula = async (req, res) => {

    try {
        const { rows } = await db.query(`select cedula from propietario where cedula = ${Number(req.body.data)}`);
        if(rows.length > 0) {
            return res.status(200).json({
                ok: true
            });
        } else {
            return res.status(200).json({
                ok: false
            });
        }
    } catch (err) {
        console.log(err);
    }

}

const getOwnerByEmail = async (req, res) => {
    try {
        const { rows } = await db.query(`select email from propietario where email = '${req.body.data}'`);

        if(rows.length > 0) {
            return res.status(200).json({
                ok: true
            });
        } else {
            return res.status(200).json({
                ok: false
            });
        }
    } catch (err) {
        console.log(err);
    }

}

const getOwnerByNit = async (req, res) => {
    try {
        const { rows } = await db.query(`select * from almacen where nit = '${req.body.data}'`);

        if(rows.length > 0) {
            return res.status(200).json({
                ok: true
            });
        } else {
            return res.status(200).json({
                ok: false
            });
        }

    } catch (err) {
        console.log(err);
    }

}