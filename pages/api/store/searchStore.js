

import pool from '../../../config/db';


export default async function Search(req, res) {

    switch(req.method) {
        case 'POST':
            return await searchStore(req, res);
        default: return res.status(405).end();
    }
}

const searchStore = async (req, res) => {
    try{

        const { nit } = req.body;

        console.log(nit);

        const { rows } = await pool.query(`select a.id_almacen,
            a.cantidad,
            a.telefono_almacen,
            a.nombre_almacen,
            a.nit,
            concat(p.nombres, ' ', p.apellidos) as nombre_propietario,
            p.email,
            p.cedula
        from almacen a
            inner join propietario p on p.id_propietario = a.propietario_id
        where a.estado = 1 and a.nit like '%${nit}%'`);
        return res.status(200).json(rows);
    }
    catch(err) {
        return res.json({
            err,
            ok: false
        });
    }
}