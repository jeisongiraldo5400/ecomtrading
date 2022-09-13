import pool from '../../../config/db';

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return await getOwnerData(req, res);
        default: return res.status(405).end();
    }
}

const getOwnerData = async (req, res) => {
    try{

        const { cedula } = req.body;

        const { rows } = await pool.query(`SELECT * FROM propietario p where p.cedula = ${cedula}`);

        if(rows.length > 0){
            return res.status(200).json({
                ok: true,
                message: 'Propietario encontrado',
                data: rows
            });
        }

        return res.status(200).json({
            message: '',
            tipo: '',
            ok: false
        });

    }
    catch(err) {
        console.error(err);
    }
}
