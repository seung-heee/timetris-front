import React, { useEffect, useState } from 'react';
import '../../css/main.css'
import MainFirst from './MainFirst';
import MainSecond from './MainSecond';
import MainThird from './MainThird';
import MainFourth from './MainFourth';
import MainLast from './MainLast';

import * as API from '../../api/API'

const Main = () => {
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
        <div className='Main w-full'>
            <MainFirst />
            <MainSecond />
            <MainThird />
            <MainFourth />
            <MainLast />
        </div>
    );
};

export default Main;