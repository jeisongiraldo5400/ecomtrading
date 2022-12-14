import pool from '../../../config/db';

export default async function bankData(req, res) {

    switch(req.method) {
        case 'GET':
            return await getAllBank(req, res);
        case 'POST':
            return await createaAccountBank(req, res);
        default: return res.status(405).end();
    }
}

const getAllBank = async (req, res) => {

    try {
        const response = await pool.query('SELECT * FROM bancos');
        return res.status(200).json(response.rows);
    }
    catch(err) {
        return res.json({
            err,
            ok: false
        });
    }
}
