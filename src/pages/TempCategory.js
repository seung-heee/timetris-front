import React, { useState } from 'react';
import Category from '../components/category/Category';
import '../css/category.css';
import { CategoryContext } from '../context/CategoryContext';

import AddModal from '../components/category/categoryModal/AddModal';
import FixModal from '../components/category/categoryModal/FixModal';
import PlanModal from '../components/category/categoryModal/PlanModal';
import DoModal from '../components/category/categoryModal/DoModal';
import axios from 'axios';

const TempCategory = () => {
    // 토큰
    const headers = {
        'Authorization': `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcwODQ1NTkyMSwiZW1haWwiOiJzaHRtZGdtbDI1OTVAZ21haWwuY29tIiwibWVtYmVySWQiOjJ9.G2mQC9by4nt30bkbwyHNUuXxa_p06OQyidcbkAiMW5e8K9d-w53ISZuYUw-BkkasopReSKrBTHiI_tHLenJysw`
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

    const [selectedDay, setSelectedDay] = useState(null); // 반복 일정

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
            if (type === 'Fix') { // 카테고리 수정
                await axios.put(`http://43.203.6.58:8080/category/${categoryId}`, fixCategory, { headers });
                setFixCategory({
                    name: '',
                    colorCode: '',
                })
            } else if (type === 'Delete') { // 카테고리 삭제
                await axios.delete(`http://43.203.6.58:8080/category/${categoryId}`, { headers });
            } else { // 카테고리 작성
                await axios.post('http://43.203.6.58:8080/category', addCategory, { headers });
                setAddCategory({
                    name: '',
                    colorCode: '',
                })
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
                fixCategory, setFixCategory }}>
            <Category />

            <AddModal /><br /> {/* 카테고리 추가 */}
            <FixModal /><br /> {/* 카테고리 수정 */}
            <PlanModal /><br />
            <DoModal /><br />
        </CategoryContext.Provider>
    );
};

export default TempCategory;