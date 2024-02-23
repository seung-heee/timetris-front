import React, { useEffect, useState } from 'react';
import PdsLeft from './PdsLeft';
// import PdsMiddle from './PdsMiddle';
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

const Pds = () => {
    // 1. main data GET!
    // data 박아놓기
    // console.log(data.result.doViewDTOList[0].title)
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
        const userName = data.result.userName
    }
    useEffect(() => { getToken() }, [])

    
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

    // Plan 등록
    const [addPlan, setAddPlan] = useState({
        planRequestDTO: {
            title: "",
            startTime: "",
            endTime: "",
            categoryId: 0
        },
        cycleRequestDTO: {
            cycling: [
                ""
            ]
        }
    });

    // Do 등록
    const [doPlan, setDoPlan] = useState({
        title: "",
        startTime: "",
        endTime: "",
        categoryId: 0
    })

    const [selectedDay, setSelectedDay] = useState();

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
                    break;
                case 'Add':
                case 'AddModal':
                    await API.post('/category', addCategory);
                    break;
                case 'Plan':
                    await API.post('/plan', addPlan);
                    setAddPlan({
                        planRequestDTO: {
                            title: "",
                            startTime: "",
                            endTime: "",
                            categoryId: 0
                        },
                        cycleRequestDTO: {
                            cycling: [""]
                        }
                    });
                    break;
                default:
                    await API.post('/do', doPlan);
                    setDoPlan({
                        title: "",
                        startTime: "",
                        endTime: "",
                        categoryId: 0
                    });
                    break;
            }

            setCategoryId('')

        } catch (error) {
            console.log('에러:', error)
        }
    }
    // 반복일정
    const handleRepeatCheck = (e) => {
        const { value } = e.target;
        setSelectedDay(prevSelectedDay => prevSelectedDay !== value ? value : null);
    };


    return (
        <CategoryContext.Provider 
        value={{ state, setState, ModalHandler, selectColorCode, 
                addCategory, setAddCategory, HandleAddCategory,
                selectedDay, handleRepeatCheck,
                categoryId, setCategoryId,
                myCategory, setMyCategory, ShowCategoryList,
                fixCategory, setFixCategory,
                addPlan, setAddPlan,
                doPlan, setDoPlan
            }}>
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
            
            {/* <Category /> */}
            <AddModal />
            <FixModal />
            {/* <PlanModal />
            <DoModal />  */}
            </PDSTableContext.Provider>
        </CategoryContext.Provider>
    );
};

export default Pds;