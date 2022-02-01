export enum HttpMethod {
    Post    = "POST",
    Get     = "GET",
    Put     = "PUT",
    Delete  = "DELETE"
}

const API = async (method: HttpMethod, endpoint: string, values : any) => {
    let errors = false;
    let returnValue;

    if (method === HttpMethod.Get || method === HttpMethod.Delete) {
        return fetch(process.env.REACT_APP_API + endpoint, {
            method: method,
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'CharSet': 'utf-8',
                'Authorization': ((localStorage.getItem("token"))!)
            }
        })
        .then(data => {
            if(!data.ok) {
                errors = true;
            }
            return data.json();
        })
        .then((response) => {
            if(errors) {
                returnValue = response;
                throw new Error(JSON.stringify(returnValue));
            }
            return response;
        })
        .catch(err => {throw new Error(err)})
    } else {
        return fetch(process.env.REACT_APP_API + endpoint, {
            method: method,
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'CharSet': 'utf-8',
                'Authorization': ((localStorage.getItem("token"))!)
            },
            body: JSON.stringify(values)
        })
        .then(data => {
            if(!data.ok) {
                errors = true;
            }
            return data.json();
        })
        .then((response) => {
            if(errors) {
                returnValue = response;
                throw new Error(JSON.stringify(returnValue));
            };
            return response;
        })
        .catch(err => {throw new Error(err)})
    };
}

export default API;