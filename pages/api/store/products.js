import pool from '../../../config/db';

export default async function product(req, res) { 
        switch(req.method) {
            case 'GET':
                return await getAllProduct(req, res);
            default: return res.status(405).end();
        }
}


const getAllProduct = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM tipo_producto');
        return res.status(200).json(response.rows);
    }
    catch(err) {
        return res.json({
            err,
            ok: false
        });
    }
}