

export default function Owner(req, res) {

    switch(req.method) {
        case 'GET':
            getOwner(req);
            return console.log('GET');
        case 'POST':
            return console.log('POST')

        case 'PUT':
            return console.log('PUT');
        case 'DELETE':
            return console.log('DELETE');
        default: return res.status(405).end();
    }
}

const getOwner = (req) => {
    console.log(res);
}
