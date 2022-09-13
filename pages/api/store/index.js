import pool from '../../../config/db';


export default async function Store(req, res) {
    
        switch(req.method) {
            case 'POST':
                return createStore(req, res);
            default: return res.status(405).end();
        }
}

const createStore = async (req, res) => {
    try{
        const {
            propietario_id,
            tipo_producto_id,
            cantidad,
            telefono,
            nombre,
            nit, 
            cuenta_bancaria_id
        } = req.body;

        await pool.query(`INSERT INTO almacen 
        ( propietario_id, tipo_producto_id, cantidad, telefono, nombre, nit, cuenta_bancaria_id)
        VALUES
        ($1, $2, $3, $4, $5, $6, $7)`, [
            propietario_id,
            tipo_producto_id,
            cantidad,
            telefono,
            nombre,
            nit,
            cuenta_bancaria_id
        ]
        );

        return res.status(200).json({
            message: 'Almacén creado correctamente',
            ok: true
        });

    }
    catch(err) {
        res.json({
            err,
            ok: false
        });
    }
}