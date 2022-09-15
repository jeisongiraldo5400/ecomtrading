import pool from '../../../config/db';

export default async function Delte(req, res) {
    
        switch(req.method) {
            case 'POST':
                return await deleteStore(req, res);
            default: return res.status(405).end();
        }
}


const deleteStore = async (req, res) => {
    try{    

        const { id } = req.body;
        console.log(id);

        await pool.query(`update almacen set estado = 0 where id_almacen = $1`, [id]);
            
        return res.json({
            message: 'Almacén eliminado',
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