import React, { useEffect, useState } from 'react';
import PdsLeft from './PdsLeft';
import PdsTable from './PdsTable';
import '../../css/pds.css'
import * as API from '../../api/API'
import { PDSTableContext } from '../../context/PDSTableContext';
import Footer from '../../components/Footer';

const Pds = () => {

    const setToken = (key, token) => {
        if (token) {
            sessionStorage.setItem(key, token);
        }
    }
    const [accessToken, setAccessToken] = useState(sessionStorage.getItem('Authorization'));
    const [planDatas, setPlanDatas] = useState([]);
    const [doData, setDoData] = useState([]);
    const [seeData, setSeeData] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        const AuthorizationCode = new URL(window.location.href).searchParams.get('accessToken'); //url에서 AuthorizationCode를 가져옴
        setToken('Authorization', AuthorizationCode);
        setAccessToken(AuthorizationCode);
    }, [accessToken]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await API.get('/main');
            setPlanDatas(data.result.planViewDTOList);
            setDoData(data.result.doViewDTOList);
            setSeeData(data.result.seeViewDTO);
            setName(data.result.userName);
        }
        fetchData();
    }, [planDatas, doData, seeData, name]);

    return (
        <PDSTableContext.Provider
            value={{
                planDatas, doData, seeData, name
            }}
        >
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <PdsLeft />
                    <PdsTable />
                </div>
            </div>
            <Footer />
        </PDSTableContext.Provider>
    );
};

export default Pds;
