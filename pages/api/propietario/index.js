import db from '../../../config/db';

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
        const { rows } = await db.query('SELECT * FROM propietario');
        return res.status(200).json(rows);
    }
    catch(err) {
        console.log(err, 'Error en la consulta de propietarios');
    }
}

const createOwner = async (req, res) => {
    try{

        const { 
            cedula,
            nombres,
            apellido,
            telefono,
            edad,
            email } = req.body;

        const { command } = await db.query(`INSERT INTO propietario
            (cedula, nombres, apellido, telefono, edad, email)
            VALUES 
            ($1, $2, $3, $4, $5, $6)`, [
                cedula, 
                nombres, 
                apellido, 
                telefono, 
                edad, 
                email]
            );

        return res.status(200).json({
            message: 'Propietario creado correctamente',
            result: command,
            ok: true
        });

    }catch(err) {
        console.log(err);
    }
}
