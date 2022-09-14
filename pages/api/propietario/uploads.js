import pool from '../../../config/db';


export default async function Uploads(req, res) {

    switch (req.method) {
        case 'POST':
            await uploadImgs(req, res);
        default: return res.status(405).end();
    }

}

const uploadImgs = (req, res) => {
    
    console.log(req.body);
    return console.log('Subiendo imagen');

}