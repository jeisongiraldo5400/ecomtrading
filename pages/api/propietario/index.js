import pool from '../../../config/db';

export default async function Owner(req, res) {

    switch(req.method) {
        case 'GET':
            return await getAllOwners(req, res);
        case 'POST':
            return createOwner(req, res);
        case 'PUT':
            return updateOwner(req, res);
        case 'DELETE':
            return deleteOwner(req, res);
        default: return res.status(405).end();
    }
}

const getAllOwners = async (req, res) => {
    try{
        const { rows } = await pool.query(`select  p.email,
        p.apellidos,
        p.nombres,
        p.cedula,
        p.edad,
        p.telefono,
        coalesce(d.direccion, '') as direccion,
        coalesce(cb.numero_cuenta, 0) as numero_cuenta
from propietario p
left join direccion d on p.id_propietario = d.propietario_id
left join cuenta_bancaria cb on p.id_propietario = cb.propietario_id
where p.estado = 1`);
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


const updateOwner = async (req, res) => {
    try{

        const { 
            cedula, 
            nombres, 
            apellidos, 
            telefono,
            edad,
            email, 
        } = req.body;

        await pool.query(`UPDATE propietario SET
            nombres = $1,
            apellidos = $2,
            telefono = $3,
            edad = $4,
            email = $5
            WHERE cedula = $6`, [
                nombres, 
                apellidos, 
                telefono, 
                edad, 
                email,
                cedula
            ]);

        return res.status(200).json({
            message: 'Propietario actualizado correctamente',
            ok: true
        });

    }
    catch(err){
        res.json({
            err,
            ok: false
        });
    }
}


const deleteOwner = async (req, res) => {
    try{

        const { cedula } = req.body;

        const estado = 0;

        await pool.query(`UPDATE FROM propietario
            SET estado = $1
            WHERE 
            cedula = $2`,[ estado, cedula ]);

        return res.status(200).json({
            message: 'Propietario eliminado correctamente',
            ok: true
        });

    }
    catch(err){
        res.json({
            err,
            ok: false
        });
    }
}