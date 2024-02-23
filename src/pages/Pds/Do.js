import styled from "styled-components"
import { useTableDragSelect } from 'use-table-drag-select'
import { PDSTableContext } from '../../context/PDSTableContext';
import { useEffect, useState, useContext } from "react"

const DoContainer = styled.div`
    display : flex;
    position: relative;
`
const DoTable = styled.table`
    width: 480.5px;
    table-layout:fixed 
`
const TableHead = styled.thead`
    th {
        height: 51px;
        border-radius: 0px 8px 0px 0px;
        border-left: 0.5px solid #E4E4E4;
        background: #F1F1F1;
        color: #A6A6A6;
        text-align: center;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 48px; /* 200% */
    }
`
const DoTableRow = styled.tr`
    // border-right: 0.5px solid #E4E4E4;
    height: 80px;

`
const DoTableCell = styled.td`
    border: 0.5px solid #E4E4E4;
    background: ${props => props.bg};
    height: 80px;
    width : 80px;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    overflow: hidden; /* 넘치는 콘텐츠 숨기기 */
    text-overflow: ellipsis; /* 넘치는 콘텐츠 생략 부호(...)로 표시 */
    white-space : nowrap;
    padding-left : 15px;
    color : #424448;
    `

const Do = () => {
    const { doData } = useContext(PDSTableContext);

    const isCheckedCell = () => {
        const checkedTable = [];
        doData.forEach(activity => {
            const normalizedStartHour = activity.startTime.hour >= 4 ? activity.startTime.hour - 4 : activity.startTime.hour + 20;
            const normalizedEndHour = activity.endTime.hour >= 4 ? activity.endTime.hour - 4 : activity.endTime.hour + 20;
            const normalizedStartMin = Math.floor(activity.startTime.minute / 10);
            const normalizedEndMin = Math.floor(activity.endTime.minute / 10) - 1;

            const activityTable = [];

            for (let i = 0; i < 24; i++) {
                const rowData = [];
                for (let j = 0; j < 6; j++) {
                    const isChecked = (i > normalizedStartHour || (i === normalizedStartHour && j >= normalizedStartMin)) &&
                        (i < normalizedEndHour || (i === normalizedEndHour && j <= normalizedEndMin));
                    rowData.push(isChecked);
                }
                activityTable.push(rowData);
            }
            checkedTable.push(activityTable);
        });
        return checkedTable;
    };

    const tableData = [];
    for (let i = 0; i < 24; i++) {
        const rowData = [];
        for (let j = 0; j < 6; j++) {
            rowData.push(false); // 각 셀에 들어갈 값
        }
        tableData.push(rowData);
    }
    const [ref, value] = useTableDragSelect(tableData);

    // 각 행을 나타내는 JSX 배열을 생성
    const tableRows = value.map((rowData, rowIndex) => (
        <DoTableRow key={rowIndex}>
            {rowData.map((colData, colIndex) => {
                const checkedTable = isCheckedCell();
                let backgroundColor = "#F6F6F6";
                let title = ""

                doData.forEach((activity, index) => {
                    if (checkedTable[index][rowIndex][colIndex]) {
                        backgroundColor = activity.category.colorCode;
                        title = activity.title;
                    }
                });

                return (
                    <DoTableCell key={colIndex} bg={colData ? "#616161" : backgroundColor}>
                        {/* {colData ? "" : title} */}
                    </DoTableCell>
                );
            })}
        </DoTableRow>
    ));

    return (
        <DoContainer>
            <DoTable ref={ref}>
                <TableHead style={{ height: "51px" }}>
                    <tr><th colSpan="6">Do</th></tr>
                </TableHead>
                <tbody style={{ cursor: "pointer" }}>
                    {tableRows}
                </tbody>
            </DoTable>
        </DoContainer>
    );
}
export default Do;

