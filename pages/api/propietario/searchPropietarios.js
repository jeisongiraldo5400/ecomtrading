import pool from "../../../config/db";


export default async function SearchPropietario(req, res) {

    switch(req.method) {
        case 'POST':
            return await search(req, res);
        default: return res.status(405).end();
    }
}

const search = async (req, res) => {
    try{

        const { cedula } = req.body;

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
        where p.estado = 1 and p.cedula like '%${cedula}%' order by p.nombres DESC`);
        return res.status(200).json(rows);
    }
    catch(err) {
        return res.json({
            err,
            ok: false
        });
    }
}