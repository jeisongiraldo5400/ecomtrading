import pool from '../../../config/db';

export default async function Municipality(req, res) {
        switch(req.method) {
            case 'GET':
                return await getAllMunicipalities(req, res);
        }
}

const getAllMunicipalities = async(req, res) => {
    try{

        const { departamento } = req.body;

        const response = await pool.query(`SELECT * FROM municipios m WHERE m.departamento_id = ${ departamento }`);
        res.status(200).json(response.rows);

        console.log(departamento);

    }
    catch(err) {
        console.error(err);
    }
}