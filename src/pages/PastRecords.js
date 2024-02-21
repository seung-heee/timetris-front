import React, { useEffect, useState } from 'react';
import PdsMiddle from './Pds/PdsMiddle';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import axios from 'axios';

const PastRecords = () => {
    const today = new Date();
    const year = today.getFullYear() // 현재 년
    const month = today.getMonth()+1 // 현재 월

    const [recordDate, setRecordDate] = useState({ // 조회할 년/월
        "year" : year,
        "month": month
    })

    useEffect(() => {
        // 해당 달 데이터 요청 함수
        // HandleSelectedMonth();
    }, [recordDate])

    // 데이터 요청 함수
    const HandleSelectedMonth = async () => {
        try {
            const resonse = await axios.get(`/http://43.203.6.58:8080/past/${recordDate.year}년${recordDate.month}월`)
            // const day = resonse.data.result.localDate
        } catch (error) {
            console.log(error)
        }
    }

    // 년, 월 변경함수
    const handlerecordDate = (oper) => {
        if (oper==='-') {
            if (recordDate.month === 1) { // 1월이면
                setRecordDate(()=> ({
                    "year": recordDate.year-1, // year-1
                    "month": 12 // 12월로
                }))
            } else {
                setRecordDate(prevState => ({
                    ...prevState,
                    "month": recordDate.month-1
                }))
            }
            
        } else { // 증가할 때
            if (recordDate.month === 12) {
                setRecordDate(() => ({
                    "year": recordDate.year+1, // year-1
                    "month": 1 // 12월로
                }))
            } else {
                setRecordDate(prevState => ({
                    ...prevState,
                    "month": recordDate.month+1
                }))
            }
        }
    }

    return (
        <div className='PastRecords container'>
            <div className='flex flex-col p-[120px] pb-[30px]'>
                <span>나의 지난 기록들</span>
                <span className='flex items-center text-[36px] font-bold'>
                    <MdKeyboardArrowLeft onClick={()=>{handlerecordDate('-')}}/>
                    {recordDate.year}년 {recordDate.month}월
                    <MdKeyboardArrowRight
                        className={`${recordDate.year === year && recordDate.month === month ? 'hidden' : ''}`}
                        onClick={()=>{handlerecordDate('+')}}/>
                </span>
            </div>

            <div className='grid grid-cols-5 gap-y-10 px-[120px]'>
                {/* 받은 데이터 map 함수로 돌리기 */}
                <PdsBox />
                <PdsBox />
                <PdsBox />
                <PdsBox />
                <PdsBox />
                <PdsBox />
            </div>
        </div>
    );
};

export default PastRecords;

const PdsBox = ()=> {
    return (
        <div className='flex flex-col mx-auto'>
            <div className='w-[230px] h-[500px] bg-grey mb-2'>PDS UI</div>
            {/* <div>{day}</div> */}
            <div>날짜</div>
        </div>
    )
}