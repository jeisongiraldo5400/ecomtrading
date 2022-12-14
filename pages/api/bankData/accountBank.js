import pool from '../../../config/db';

export default async function SeleccAcountBanck(req, res) {
    
        switch(req.method) {
            case 'GET':
                return await getAccountBank(req, res);
            case 'POST':
                    return await createaAccountBank(req, res);
            case 'PUT':
                return await updateAccountBank(req, res);
            default: return res.status(405).end();
        }
}

// Trear la información bancaria del propietario
const getAccountBank = async (req, res) => {
    try {
        
        
        
    }
    catch(err) {
        return res.json({
            err,
            ok: false
        });
    }
}

//Creación de cuenta bancaria
const createaAccountBank = async (req, res) => {
    try{

        const { numero_cuenta, tipo_cuenta_id, banco_id, propietario_id } = req.body;

        await pool.query(`INSERT INTO cuenta_bancaria
        (numero_cuenta, tipo_cuenta_id, banco_id, propietario_id)
        VALUES ($1, $2, $3, $4)`, [
            numero_cuenta, 
            tipo_cuenta_id, 
            banco_id, 
            propietario_id
        ]);

        return res.status(200).json({
            message: 'Cuenta bancaria creada correctamente',
            ok: true
        });

    }
    catch(err){
        return res.json({
            err,
            ok: false
        });
    }
}

//Actualización de cuenta bancaria
const updateAccountBank = async (req, res) => {
    try{

        const { numero_cuenta, tipo_cuenta_id, banco_id, propietario_id } = req.body;

        await pool.query(`UPDATE cuenta_bancaria
        SET numero_cuenta = $1, tipo_cuenta_id = $2, banco_id = $3
        WHERE propietario_id = $4`, [
            numero_cuenta, 
            tipo_cuenta_id, 
            banco_id, 
            propietario_id
        ]);

        return res.status(200).json({
            message: 'Cuenta bancaria actualizada correctamente',
            ok: true
        });

    }
    catch(err){
        return res.json({
            err,
            ok: false
        });
    }
}