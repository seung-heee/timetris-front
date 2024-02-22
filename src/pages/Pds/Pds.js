import React, { useEffect, useState } from 'react';
import PdsLeft from './PdsLeft';
// import PdsMiddle from './PdsMiddle';
import PdsTable from './PdsTable';
import '../../css/pds.css'
import * as API from '../../api/API'
import { PDSTableContext } from '../../context/PDSTableContext';
import data from './api연습'

const Pds = () => {
    // 1. main data GET!
    // data 박아놓기
    console.log(data.result.doViewDTOList[0].title)
    const planData = data.result.planViewDTOList[0]
    const doData = data.result.doViewDTOList[0]
    const seeData = data.result.seeViewDTO[0]
    const name = data.result.userName

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
        <PDSTableContext.Provider
            value={{
                planData, doData, seeData, name
            }}
        >
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <PdsLeft />
                    <PdsTable />
                </div>

            </div>
        </PDSTableContext.Provider>
    );
};

export default Pds;