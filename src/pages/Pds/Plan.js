import styled from "styled-components"
import * as API from '../../api/API'
import { PDSTableContext } from '../../context/PDSTableContext';
import { CategoryContext } from '../../context/CategoryContext';
import HeaderModal from '../../components/category/categoryModal/ModalElement/HeaderModal';
import CategoryListBox from '../../components/category/categoryModal/ModalElement/CategoryListBox';
import SelectedCategory from '../../components/category/categoryModal/ModalElement/SelectedCategory';
import FooterModal from '../../components/category/categoryModal/ModalElement/FooterModal';
import InputEle from '../../components/category/categoryModal/ModalElement/InputEle';
import { useContext, useState, useMemo, useEffect } from "react";

const PlanContainer = styled.div`

`
const PlanTable = styled.table`
    width: 610px;
`
const TableHead = styled.thead`
    tr {
        height: 51px;
        background: #F1F1F1;
        color: #A6A6A6;
        text-align: center;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 48px; /* 200% */
    }
    .planHead1 {
        border-radius: 8px 0px 0px 0px;
    }
    .planHead2 {
        border-left: 0.5px solid #E4E4E4;
        width: 130px;
    }
`
const PlanTableRow = styled.tr`
    height : 80px;
`
const PlanTableCell = styled.td`
    border: 0.5px solid #E4E4E4;
    border-right : none;
    background: #F6F6F6;
    height: 80px;
    flex-shrink: 0;
    color: #616161;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px; /* 200% */
    color : #424448
`

const Plan = () => {
    const { planDatas } = useContext(PDSTableContext);
    const { timeData, state, setTimeData, ModalHandler, setAddPlan} = useContext(CategoryContext);


    const Time = [
        "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM",
        "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM",
        "11PM", "12AM", "1AM", "2AM", "3AM"
    ];

    const tableData = [];
    for (let i = 0; i < 24; i++) {
        const rowData = [];
        for (let j = 0; j < 2; j++) {
            if (j == 0) {
                rowData.push("")
            } else {
                rowData.push(Time[i])
            }
        }
        tableData.push(rowData);
    }
        // Do Modal Open 함수
    const handleClickPlan = (Hour) => {
        setTimeData(Hour+4);            
        ModalHandler("isPlanOpen");
    };

    useEffect(()=>{
        setAddPlan(prevState => ({
            ...prevState,
            planRequestDTO: {
                ...prevState.planRequestDTO,
                startTime: timeData,
            }
        }));
    }, [timeData])

    // 각 행을 나타내는 JSX 배열을 생성
    const tableRows = Time.map((time, rowIndex) => {
        // 현재 row에 해당하는 모든 일정을 필터링
        const rowPlanDatas = planDatas.filter(planData => {
            let normalizedStartHour = planData.startTime.hour;
            let normalizedEndHour = planData.endTime.hour;

            if (planData.startTime.hour >= 4 && planData.startTime.hour <= 24) {
                normalizedStartHour = planData.startTime.hour - 4;
            } else if (planData.startTime.hour >= 1 && planData.startTime.hour <= 3) {
                normalizedStartHour = planData.startTime.hour + 20;
            }

            if (planData.endTime.hour >= 4 && planData.endTime.hour <= 24) {
                normalizedEndHour = planData.endTime.hour - 4;
            } else if (planData.endTime.hour >= 1 && planData.endTime.hour <= 3) {
                normalizedEndHour = planData.endTime.hour + 20;
            }

            // startTime이 endTime보다 작거나 같고, rowIndex가 startTime과 endTime 사이에 있는 경우
            return normalizedStartHour <= normalizedEndHour
                ? rowIndex >= normalizedStartHour && rowIndex <= normalizedEndHour
                : rowIndex >= normalizedStartHour || rowIndex <= normalizedEndHour;
        });

        // row에 대한 배경색을 저장할 변수
        let backgroundColor = '#F6F6F6';

        // row에 해당하는 일정이 있다면 첫 번째 일정의 색상을 사용
        if (rowPlanDatas.length > 0) {
            backgroundColor = rowPlanDatas[0].category.colorCode;
        }
        // row에 해당하는 첫 번째 일정의 제목만 표시
        const firstPlanData = rowPlanDatas[0];
        const titleToShow = firstPlanData ? firstPlanData.title : '';

        return (
            <PlanTableRow key={rowIndex}>
                <PlanTableCell 
                onClick={()=>{handleClickPlan(rowIndex)}}
                style={{ backgroundColor }}>
                    {titleToShow}
                </PlanTableCell>
                <PlanTableCell>{time}</PlanTableCell>
            </PlanTableRow>
        );
    });

    return (
        <PlanContainer>
            {state.isPlanOpen && <PlanModal />}
            <PlanTable>
                <TableHead>
                    <tr>
                        <th className="planHead1">Plan</th>
                        <th className="planHead2"></th>
                    </tr>
                </TableHead>
                <tbody>
                    {tableRows}
                </tbody>
            </PlanTable>
        </PlanContainer>
    );
}
export default Plan

const PlanModal = () => {
    const { state, ModalHandler } = useContext(CategoryContext);
    return (
        <>
        <button onClick={() => { ModalHandler("isPlanOpen") }} className='fixed z-10 flex justify-center items-center bg-[rgba(0,0,0,0.4)] rounded-[10px] top-0 left-0 right-0 bottom-0'>
            <button onClick={(e) => e.stopPropagation()} className='flex flex-col justify-start items-center rounded-[20px] p-[30px] w-[800px] bg-[#fff]'>
                <HeaderModal title={'Plan 선택한 날짜'} type={'Plan'} />
                <InputEle type={'Plan'} />
                <div className='flex justify-between w-11/12 items-center'>
                    <CategoryListBox text={'카테고리를 선택해주세요.'} type={"Plan"} />
                    <SelectedCategory type={"Plan"} />
                </div>
                <FooterModal type={'Plan'} />
            </button>
        </button>
        </>
    );
};