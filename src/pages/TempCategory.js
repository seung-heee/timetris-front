import React, { useState } from 'react';
import Category from '../components/category/Category';
import '../css/category.css';
import { CategoryContext } from '../context/CategoryContext';

import AddModal from '../components/category/categoryModal/AddModal';
import FixModal from '../components/category/categoryModal/FixModal';
import PlanModal from '../components/category/categoryModal/PlanModal';
import DoModal from '../components/category/categoryModal/DoModal';
import axios from 'axios';
import InputEle from '../components/category/categoryModal/ModalElement/InputEle';

const TempCategory = () => {
    // 토큰
    const headers = {
        'Authorization': `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcwODU0NDc4NSwiZW1haWwiOiJzaHRtZGdtbDI1OTVAZ21haWwuY29tIiwibWVtYmVySWQiOjJ9.YZ1oGyr5f7WGHqs68ECoMeQGjzI_iG90Ycv5PUo6L4m2uTavPUoqsR5FYT35PbBe6oPBshFiEgukzwrqX5jB8w`
    };
    // 색상 코드
    const selectColorCode = ["#e15d5e","#f0b0a9","#f3bec7","#ee82a1","#edb18c","#f49963","#f48068","#eccd85","#f3bd72", "#96d4bf","#79a5c8", "#4692bb", "#53bfcc", "#88d7da","#d0b8de"]
    // 모달 띄우기 state
    const [state, setState] = useState({
        isAddOpen: false,
        isFixOpen: false,
        isPlanOpen: false,
        isDoOpen: false,
    })
    // 카테고리 추가
    const [addCategory, setAddCategory]= useState({
        name: "",
        colorCode: ""
    })
    // 카테고리 수정
    const [fixCategory, setFixCategory]= useState({
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
            const response = await axios.get(`http://43.203.6.58:8080/category`, { headers });
            setMyCategory(response.data.result); 
        } catch (error) {
            console.error('에러:', error);
        }
    }

    // API 연동 함수
    const HandleAddCategory = async (type) => {
        try {
            switch(type) {
                case 'Fix':
                    await axios.put(`http://43.203.6.58:8080/category/${categoryId}`, fixCategory, { headers });
                    setFixCategory({
                        name: '',
                        colorCode: '',
                    });
                    break;
                case 'Delete':
                    await axios.delete(`http://43.203.6.58:8080/category/${categoryId}`, { headers });
                    break;
                case 'Add':
                case 'AddModal':
                    await axios.post('http://43.203.6.58:8080/category', addCategory, { headers });
                    setAddCategory({
                        name: '',
                        colorCode: '',
                    });
                    break;
                case 'Plan':
                    await axios.post('http://43.203.6.58:8080/plan', addPlan, { headers });
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
                    await axios.post('http://43.203.6.58:8080/do', doPlan, { headers });
                    setDoPlan({
                        title: "",
                        startTime: "",
                        endTime: "",
                        categoryId: 0
                    });
                    break;
            }

            setCategoryId('')
            
        } catch(error) {
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
                doPlan, setDoPlan }}>
            <Category />
            <AddModal />
            <FixModal />
            <PlanModal />
            <DoModal />
        </CategoryContext.Provider>
    );
};

export default TempCategory;