import React, { useState, useEffect, useRef, useContext } from "react";
import Calendar from "react-calendar";
import { images } from '../../utils/images';
import Category from '../../components/category/Category';
import TempCategory from './../TempCategory';
import { PDSTableContext } from '../../context/PDSTableContext';
import styled from 'styled-components';
import moment from 'moment'; // MomentTypes는 사용하지 않으므로 삭제
import 'moment/locale/ko'; // 한국어 locale 추가
import '../../css/pds.css'

const PdsLeft = () => {
    const { name } = useContext(PDSTableContext);
    const [value, onChange] = useState(new Date());
    const [nowDate, setNowDate] = useState(moment().format("YYYY년 M월 DD일 ddd요일")); // 오늘의 날짜로 초기화
    const [isOpen, setIsOpen] = useState(false);
    const calendarRef = useRef(null);

    useEffect(() => {
        moment.locale('ko'); // 한국어 locale 설정
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleToggleCalendar = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (calendarRef.current && !calendarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleDateChange = (selectedDate) => {
        onChange(selectedDate);
        setIsOpen(false);
        setNowDate(moment(selectedDate).format("YYYY년 M월 DD일 ddd요일")); // 선택한 날짜로 변경
    };

    const handlePreviousDay = () => {
        const previousDay = moment(value).subtract(1, 'days').toDate();
        onChange(previousDay);
        setNowDate(moment(previousDay).format("YYYY년 M월 DD일 ddd요일")); // 선택한 날짜로 변경
    };

    const handleNextDay = () => {
        const nextDay = moment(value).add(1, 'days').toDate();
        onChange(nextDay);
        setNowDate(moment(nextDay).format("YYYY년 M월 DD일 ddd요일")); // 선택한 날짜로 변경
    };

    return (
        <div className="flex justify-center mt-24">
            {/* 왼쪽 */}
            <div className="mr-12 mt-5">
                <div className="text-neutral-700 text-2xl font-semibold leading-10">{name}님, 오늘 하루는 어떻게 보내실 계획이신가요?</div>
                <div className="flex">
                    <button onClick={handlePreviousDay} className="text-center text-neutral-400 text-lg font-semibold bg-[#F1F1F1] text-[#A6A6A6] w-16 h-10 relative bg-zinc-100 rounded-3xl">
                        이전
                    </button>
                    <div ref={calendarRef}>
                        <CalendarContainer>
                            <DropdownButton onClick={handleToggleCalendar} className="text-neutral-700 text-4xl font-bold font-['Pretendard'] leading-10 mx-2 hover:text-[#6BB8FF]">{nowDate}</DropdownButton>
                            <CalendarWrapper isOpen={isOpen} className="mt-3">
                                <Calendar
                                    onChange={handleDateChange}
                                    value={value}
                                    formatDay={(locale, date) => moment(date).format("DD")}
                                    navigationLabel={null}
                                    showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
                                />
                            </CalendarWrapper>
                        </CalendarContainer>
                    </div>
                    <button onClick={handleNextDay} className="text-center text-neutral-400 text-lg font-semibold bg-[#F1F1F1] text-[#A6A6A6] w-16 h-10 relative bg-zinc-100 rounded-3xl">
                        다음
                    </button>
                </div>
            </div>
            <TempCategory />
        </div>
    );
};


export default PdsLeft;

const CalendarContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  text-align: start;
  background-position: right 12px center;
`;

const CalendarWrapper = styled.div`
  z-index: 11;
  position: absolute;
  top: 100%;
  left: 0;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;






// import React, { useContext } from 'react';
// import { images } from '../../utils/images';
// import Category from '../../components/category/Category';
// import TempCategory from './../TempCategory';
// import { PDSTableContext } from '../../context/PDSTableContext';

// const PdsLeft = () => {
//     // api > userName 가져오면,
//     const { name } = useContext(PDSTableContext)

//     return (
//         <div className="flex justify-center mt-24">
//             {/* 왼쪽 */}
//             <div className="mr-12 mt-5">
//                 <div className="text-neutral-700 text-2xl font-semibold leading-10">{name}님, 오늘 하루는 어떻게 보내실 계획이신가요?</div>
//                 <div className="flex">
//                     <button className="text-center text-neutral-400 text-lg font-semibold bg-[#F1F1F1] text-[#A6A6A6] w-16 h-10 relative bg-zinc-100 rounded-3xl" >이전</button>
//                     <div className="text-neutral-700 text-4xl font-bold font-['Pretendard'] leading-10 mx-4">2024년 1월 31일 수요일</div>
//                     <button className="text-center text-neutral-400 text-lg font-semibold bg-[#F1F1F1] text-[#A6A6A6] w-16 h-10 relative bg-zinc-100 rounded-3xl">다음</button>
//                 </div>
//             </div>

//             {/* 오른쪽 */}
//             {/* <div className="w-96 h-60 relative bg-neutral-100 rounded-lg bg-[#F6F6F6] flex flex-col items-center justify-center">

//             {/* 소은 작업 부분
//             <div className="w-96 h-60 relative bg-neutral-100 rounded-lg bg-[#F6F6F6] flex flex-col items-center justify-center">

//                 <div className="mb-4 w-full">
//                     <div className="flex justify-between w-full">
//                         <div className="flex items-center">
//                             <div className="text-center text-neutral-700 text-xl font-medium ml-5">나의 카테고리</div>
//                             <div><img src={images.btn20} alt="추가전버튼" /></div>
//                         </div>
//                         <div><img src={images.btn10} alt="수정전버튼" /></div>
//                     </div>
//                 </div>
//                 <div className="text-center text-neutral-700 text-lg font-medium font-['Pretendard'] mb-4">
//                     <div className="flex justify-center">아직 카테고리가 없으시네요.</div>
//                     <div className="flex justify-center">카테고리를 추가하고 편하게 기록해보세요!</div>
//                 </div>
//                 <div className="flex justify-center">
//                     <button className="w-32 h-12 bg-neutral-200 rounded-3xl bg-[#E4E4E4] text-[#A6A6A6]">추가하기</button>
//                 </div>
//             </div> */}
//             <TempCategory />
//         </div>
//     );
// };

// export default PdsLeft;