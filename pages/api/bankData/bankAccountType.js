import pool from '../../../config/db';

export default async function accountType(req, res) {

    switch(req.method) {
        case 'GET':
            return await getAllAccountType(req, res);
        default: return res.status(404).end();
    }

}

const getAllAccountType = async (req, res) =>{

    try{
            
        const response = await pool.query('SELECT * FROM tipo_cuenta');
        res.status(200).json(response.rows);
    
    }
    catch(err){
        console.log(err);
    }

}