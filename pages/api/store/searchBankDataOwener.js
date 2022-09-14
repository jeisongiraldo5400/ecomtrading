import pool from '../../../config/db';

export default async function SearchBankData(req, res) {

    switch(req.method) {
        case 'POST':
            return searchBankDataOwner(req, res);
        default: return res.status(405).end();
    }

}

const searchBankDataOwner = async (req, res) => {
    try {
        const { id } = req.body;
        
        const response = await pool.query(`SELECT * FROM cuenta_bancaria WHERE propietario_id = $1`, [id]);
        return res.status(200).json(response.rows);
    }
    catch(err) {
        return res.json({
            err,
            ok: false
        });
    }
}
