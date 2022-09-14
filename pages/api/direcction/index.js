import pool from '../../../config/db';

export default async function RegisterDirection(req, res) { 
    switch(req.method) {
        case 'POST':
            return await createDirection(req, res);
        case 'PUT':
            return await updateDirection(req, res);
        default: return res.status(405).end();
    }
}

const createDirection = async(req, res) => {
    try{

        const {
            direccion,
            departamento_id,
            municipio_id,
            propietario_id
        } = req.body;

        await pool.query(`INSERT INTO direccion 
            (direccion, departamento_id, municipio_id, propietario_id) 
            VALUES 
            ($1, $2, $3, $4)`, [
                direccion,
                departamento_id,
                municipio_id,
                propietario_id
            ]
        );
        
        return res.status(200).json({
            message: 'La dirección ha sido asignada',
            ok: true
        });

    }
    catch(err) {
        return res.json({
            err,
            ok: false
        });
    }
}

const updateDirection = async(req, res) => {
    try{

        const {
            direccion,
            departamento_id,
            municipio_id,
            propietario_id
        } = req.body;

        await pool.query(`UPDATE direccion SET 
            direccion = $1, 
            departamento_id = $2, 
            municipio_id = $3 
            WHERE propietario_id = $4`, [
                direccion,
                departamento_id,
                municipio_id,
                propietario_id
            ]
        );
        
        return res.status(200).json({
            message: 'La dirección ha sido actualizada',
            ok: true
        });

    }
    catch(err) {
        return res.json({
            err,
            ok: false
        });
    }
}