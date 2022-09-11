export function request(action, url, { token, data, opts = {} }) {

    let options = Object.assign({

        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }

    }, opts);

    if (data) {

        return action(url, data, options)

    } else {

        return action(url, options)

    }

}