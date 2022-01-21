import { useState } from 'react';

const UseToken = () => {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        return tokenString!;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken : string) => {
        const objLogin = userToken;

        if (typeof objLogin !== 'undefined') {
            sessionStorage.setItem('token', objLogin);
            setToken(userToken);
        }
    };

    return {
        setToken: saveToken, token
    };
}

export default UseToken;