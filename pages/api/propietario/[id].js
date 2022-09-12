import db from '../../../config/db';

export default async function handler(req, res) {

    switch(req.method) {
        case 'PUT':
            return updateOwner(req, res);
        case 'DELETE':
            return deleteOwner(req, res);
        default: return res.status(405).end();
    }

}

const updateOwner = async (req, res) => {

    try{

        const { 
            cedula,
            nombres,
            apellido,
            telefono,
            edad,
            email,
            } = req.body;

        const id = req.query.id
        console.log(id);

        const { command } = await db.query(`update propietario
            set cedula = $1, 
                nombres = $2,
                apellido = $3, 
                telefono = $4, 
                edad = $5, 
                email = $6
            where id_propietario = ${id}`, 
            [
                cedula,
                nombres,
                apellido,
                telefono,
                edad,
                email,
            ]
            );

        return res.status(200).json({
            message: 'Propietario actualizado correctamente',
            owner: req.body,
            result: command,
            ok: true
        });

    } catch(err) {
        console.log(err);
    }

}

const deleteOwner = async (req, res) => {
    try{

        const { command } = await db.query(`delete from propietario
            where id_propietario = ${req.query.id}`);

        return res.status(200).json({
            message: 'Propietario eliminado correctamente',
            result: command,
            ok: true
        });


    }catch(err){
        console.log(err);
    }
}