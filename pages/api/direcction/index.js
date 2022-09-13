import pool from '../../../config/db';

export default async function RegisterDirecction(req, res) { 
    switch(req.method) {
        case 'POST':
            return await createDirecction(req, res);
    }
}

const createDirecction = async(req, res) => {
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