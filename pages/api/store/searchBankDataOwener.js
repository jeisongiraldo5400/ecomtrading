import pool from '../../../config/db';

export default async function SearchBankData(req, res) {

    switch(req.method) {
        case 'GET':
            return searchBankDataOwner(req, res);
        default: return res.status(405).end();
    }

}


const searchBankDataOwner = async (req, res) => {
    try {

    }
    catch(err) {
        res.json({
            err,
            ok: false
        });
    }
}