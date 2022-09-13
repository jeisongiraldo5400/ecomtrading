import pool from '../../../config/db';


export default async function Department(req, res) {
        switch(req.method) {
            case 'GET':
                return await getAllDepartments(req, res);
        }
}

const getAllDepartments = async(req, res) => {
    try {
        const response = await pool.query('SELECT * FROM departamentos');
        res.status(200).json(response.rows);
    }
    catch(err) {
        console.error(err);
    }
}