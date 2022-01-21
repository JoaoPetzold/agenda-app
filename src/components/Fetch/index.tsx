export enum HttpMethod {
    Post    = "POST",
    Get     = "GET",
    Put     = "PUT",
    Delete  = "DELETE"
}

const API = async (method: HttpMethod, endpoint: string, values : any) => {
    return fetch(process.env.REACT_APP_API + endpoint, {
        method: method,
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'CharSet': 'utf-8',
            'Authorization': ((sessionStorage.getItem("token"))!)
        },
        body: JSON.stringify(values)
    })
    .then(data => {
        if(!data.ok) {
            throw new Error(data.statusText);
        }
        return data.json();
    })
    .catch(err => {throw new Error(err)})
}

export default API;