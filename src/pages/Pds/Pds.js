import React, { useEffect, useState } from 'react';
import PdsLeft from './PdsLeft';
import PdsTable from './PdsTable';
import '../../css/pds.css'
import * as API from '../../api/API'
import { PDSTableContext } from '../../context/PDSTableContext';
import { CategoryContext } from '../../context/CategoryContext';
import data from './api연습'
import Category from '../../components/category/Category';
import AddModal from '../../components/category/categoryModal/AddModal';
import FixModal from '../../components/category/categoryModal/FixModal';
import PlanModal from '../../components/category/categoryModal/PlanModal';
import DoModal from '../../components/category/categoryModal/DoModal';
import { useNavigate } from 'react-router-dom';
import App from '../../App';
import axios from 'axios';
import Footer from '../../components/Footer';

const Pds = () => {
    // 토큰
    const headers = {
        'Authorization': `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcwODcyMDk2OSwiZW1haWwiOiJzaHRtZGdtbDI1OTVAZ21haWwuY29tIiwibWVtYmVySWQiOjJ9.kFj1gfoo7jo2mfYoUsmpXGSZhv669ws0jCOpb8utgnc-n_-unTYMQT3BngjkB8rHGNsBOlqwdTWoxHGfSjwMsg
        `};
    const navigate = useNavigate(); // 페이지 이동처리해보려고 추가

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


    // const getToken = async () => {
    //     const data = await API.get('/main')
    //     const userName = data.result.userName
    // }
    // useEffect(() => { getToken() }, [])
    
    // 색상 코드
    const selectColorCode = ["#e15d5e", "#f0b0a9", "#f3bec7", "#ee82a1", "#edb18c", "#f49963", "#f48068", "#eccd85", "#f3bd72", "#96d4bf", "#79a5c8", "#4692bb", "#53bfcc", "#88d7da", "#d0b8de"]
    
    // 모달 띄우기 state
    const [state, setState] = useState({
        isAddOpen: false,
        isFixOpen: false,
        isPlanOpen: false,
        isDoOpen: false,
    })
    // 카테고리 추가
    const [addCategory, setAddCategory] = useState({
        name: "",
        colorCode: ""
    })
    // 카테고리 수정
    const [fixCategory, setFixCategory] = useState({
        name: "",
        colorCode: ""
    })
    const [categoryId, setCategoryId] = useState(0);
    const [myCategory, setMyCategory] = useState([]); // 카테고리 조회
    const [today, setToday] = useState();
    const [timeData, setTimeData] = useState([0, 0]); // 시간 정보 저장
    const [selectedDay, setSelectedDay] = useState([]);

    // Plan 등록
    const [addPlan, setAddPlan] = useState({
        planRequestDTO: {
            title: "",
            startTime: "",
            endTime: "",
            categoryId: 0
        },
        cycleRequestDTO: {
            cycling: []
        }
    });

    // Do 등록
    const [addDo, setAddDo] = useState({
        title: "",
        startTime: timeData[0],
        endTime: timeData[1],
        categoryId: 0
    })

    

    // 모달 창 열고 닫기
    const ModalHandler = (openState) => {
        setState(prevState => ({
            ...prevState,
            [openState]: !prevState[openState]
        }));
    }

    const ShowCategoryList = async () => {
        try {
            const response = await API.get('/category')
            setMyCategory(response.result);
        } catch (error) {
            console.error('에러:', error);
        }
    }

    useEffect(() => {
        setAddDo(prevAddDo => ({
            ...prevAddDo,
            startTime: timeData[0],
            endTime: timeData[1]
        }));
    }, [timeData]);

    // API 연동 함수
    const HandleAddCategory = async (type) => {
        try {
            switch (type) {
                case 'Fix':
                    await API.put(`/category/${categoryId}`, fixCategory)
                    setFixCategory({
                        name: '',
                        colorCode: '',
                    });
                    break;
                case 'Delete':
                    await API.delete(`/category/${categoryId}`);
                    setFixCategory({
                        name: '',
                        colorCode: '',
                    });
                    break;
                case 'Add':
                    await API.post('/category', addCategory);
                    ModalHandler(`isAddOpen`)
                    setAddCategory({
                        name: '',
                        colorCode: '',
                    });
                    break;
                case 'AddModal':
                    await API.post('/category', addCategory);
                    setAddCategory({
                        name: '',
                        colorCode: '',
                    });
                    break;
                case 'Plan':
                    //await API.post('/plan', addPlan);
                    console.log(addPlan)
                    ModalHandler(`isPlanOpen`)
                    await axios.post('http://43.203.6.58:8080/plan', addPlan, { headers });
                    
                    setAddPlan({
                        planRequestDTO: {
                            title: "",
                            startTime: "",
                            endTime: "",
                            categoryId: 0
                        },
                        cycleRequestDTO: {
                            cycling: []
                        }
                    });
                    setSelectedDay([]); // 페이지 새로고침
                    break;
                default:
                    const response = await axios.post('http://43.203.6.58:8080/do', addDo, { headers });
                    console.log(response)
                    ModalHandler(`isDoOpen`)
                    setAddDo({
                        title: "",
                        startTime: "",
                        endTime: "",
                        categoryId: 0
                    });
                    window.location.reload(); // 재로딩
            }

            setCategoryId('')

        } catch (error) {
            console.log('에러:', error)
        }
    }
    // 반복일정
    const handleRepeatCheck = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setSelectedDay(prevCheckedDays => [...prevCheckedDays, value]); // 체크된 요일을 배열에 추가
        } else {
            setSelectedDay(prevCheckedDays => prevCheckedDays.filter(day => day !== value)); // 체크 해제된 요일을 배열에서 제거
        }
        const uniqueSelectedDays = [...new Set(selectedDay)];

        setAddPlan(prevState => ({
            cycleRequestDTO: {
                cycling: uniqueSelectedDays
            },
            planRequestDTO: {
                ...prevState.planRequestDTO
            }
        }));
    };
    
    const fetchData = async () => {
        const data = await API.get('/main');
        setPlanDatas(data.result.planViewDTOList);
        setDoData(data.result.doViewDTOList);
        setSeeData(data.result.seeViewDTO);
        setName(data.result.userName);
        console.log(data)
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <CategoryContext.Provider 
        value={{ state, setState, ModalHandler, selectColorCode, 
                addCategory, setAddCategory, HandleAddCategory,
                selectedDay, handleRepeatCheck,
                categoryId, setCategoryId,
                myCategory, setMyCategory, ShowCategoryList,
                fixCategory, setFixCategory,
                addPlan, setAddPlan,
                addDo, setAddDo, today, setToday, 
                timeData, setTimeData
            }}>
           <PDSTableContext.Provider
            value={{
                planDatas, doData, seeData, name, fetchData
            }}
        >
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <PdsLeft />
                    <PdsTable />
                </div>
            </div>
            <Footer />
            <AddModal />
            <FixModal />
        </PDSTableContext.Provider>
        </CategoryContext.Provider>)
};

export default Pds;
