import styled from "styled-components"
import * as API from '../../api/API'
import { PDSTableContext } from '../../context/PDSTableContext';
import { useContext, useState, useMemo } from "react";

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

    const Time = [
        "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM",
        "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM",
        "11PM", "12AM", "1AM", "2AM", "3AM"
    ];

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
                <PlanTableCell style={{ backgroundColor }}>
                    {titleToShow}
                </PlanTableCell>
                <PlanTableCell>{time}</PlanTableCell>
            </PlanTableRow>
        );
    });

    return (
        <PlanContainer>
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
export default Plan;
