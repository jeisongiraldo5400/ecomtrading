import pool from '../../../config/db';


export default async function Store(req, res) {
    
        switch(req.method) {
            case 'GET':
                return await getAllDataStore(req, res);
            case 'POST':
                return getDataStore(req, res);
            default: return res.status(405).end();
        }
}


const getAllDataStore = async(req, res) => {
    try{
        const { rows } = await pool.query(`select a.id_almacen,
            a.cantidad,
            a.telefono,
            a.nombre,
            a.nit,
            concat(p.nombres, ' ', p.apellidos) as nombre_propietario,
            p.email,
            p.cedula
        from almacen a
        inner join propietario p on p.id_propietario = a.propietario_id
        where p.estado = 1 and a.estado = 1`);
        return res.status(200).json(rows);
    }
    catch(err) {
        return res.json({
            err,
            ok: false
        });
    }
}

const getDataStore = async(req, res) => {
    try{
        const { id } = req.query;
        const { rows } = await pool.query(`SELECT * FROM almacen WHERE propietario_id = $1`, [id]);
        return res.status(200).json({
            data: rows,
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