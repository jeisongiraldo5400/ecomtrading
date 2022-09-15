import pool from '../../../config/db';


export default async function UpdateOwener(req, res)  {
    switch (req.method) {
        case 'POST':
            return await selectAllDataOwner(req, res);
        default: return res.send('Invalid request method');
    }
}


const selectAllDataOwner = async(req, res) => {
    try{

        const { cedula } = req.body; 

        console.log(cedula);

        const response = await pool.query(`select *
            from propietario p
            left join direccion d on p.id_propietario = d.propietario_id
            left join cuenta_bancaria cb on p.id_propietario = cb.propietario_id
            left join tipo_cuenta tc on tc.id_tipo_cuenta = cb.tipo_cuenta_id
            left join almacen a on cb.id_cuenta_bancaria = a.cuenta_bancaria_id
            left join departamentos d2 on d2.id_departamento = d.departamento_id
            left join municipios m on d2.id_departamento = m.departamento_id
            left join uploads u on u.cedula_propietario = p.cedula
            where p.cedula = $1`, [cedula]);

        return res.status(200).json(response.rows[0]);

    }
    catch (err){
        res.json({
            err,
            ok: false
        });
    }
}