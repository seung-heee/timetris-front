import React, { useEffect, useState } from 'react';
import PdsLeft from './PdsLeft';
// import PdsMiddle from './PdsMiddle';
import PdsTable from './PdsTable';
import '../../css/pds.css'
import * as API from '../../api/API'

const Pds = () => {
    const setToken = (key, token) => {
        if (token) {
            sessionStorage.setItem(key, token);
        }
    }
    const [accessToken, setAccessToken] = useState(sessionStorage.getItem('Authorization'));

    useEffect(() => {
        const AuthorizationCode = new URL(window.location.href).searchParams.get('accessToken'); //url에서 AuthorizationCode를 가져옴

        setToken('Authorization', AuthorizationCode);
        setAccessToken(AuthorizationCode);
    }, [accessToken]);

    const getToken = async () => {
        const data = await API.get('/main')
        console.log(data)
    }
    useEffect(() => { getToken() }, [])
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <PdsLeft />
                <PdsTable />
            </div>

        </div>
    );
};

export default Pds;