import pool from '../../../config/db';

export default async function Owner(req, res) {

    switch(req.method) {
        case 'GET':
            return await getAllOwners(req, res);
        case 'POST':
            return createOwner(req, res);
        default: return res.status(405).end();
    }
}

const getAllOwners = async (req, res) => {
    try{
        const { rows } = await pool.query('SELECT * FROM propietario');
        return res.status(200).json(rows);
    }
    catch(err) {
        return res.json({
            err,
            ok: false
        });
    }
}

const createOwner = async (req, res) => {
    try{

        const { 
            cedula, 
            nombres, 
            apellidos, 
            telefono,
            edad,
            email, 
        } = req.body;

        await pool.query(`INSERT INTO propietario
            (cedula, nombres, apellidos, telefono, edad, email)
            VALUES 
            ($1, $2, $3, $4, $5, $6)`, [
                cedula, 
                nombres, 
                apellidos, 
                telefono, 
                edad, 
                email
            ]);

        return res.status(200).json({
            message: 'Propietario creado correctamente',
            ok: true
        });

    }catch(err) {
        return res.json({
            err,
            ok: false
        });
    }
}
