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
    `

const Do = () => {
    const { doData } = useContext(PDSTableContext)
    const isCheckedCell = () => {
        let normalizedStartHour = doData.startTime.hour;
        let normalizedEndHour = doData.endTime.hour;

        if (doData.startTime.hour >= 4 && doData.startTime.hour <= 24) {
            normalizedStartHour = doData.startTime.hour - 4;
        } else if (doData.startTime.hour >= 1 && doData.startTime.hour <= 3) {
            normalizedStartHour = doData.startTime.hour + 20;
        }

        if (doData.endTime.hour >= 4 && doData.endTime.hour <= 24) {
            normalizedEndHour = doData.endTime.hour - 4;
        } else if (doData.endTime.hour >= 1 && doData.endTime.hour <= 3) {
            normalizedEndHour = doData.endTime.hour + 20;
        }

        let normalizedStartMin = Math.floor(doData.startTime.minute / 10);
        let normalizedEndMin = Math.floor(doData.endTime.minute / 10) - 1;

        const checkedTable = [];
        for (let i = 0; i < 24; i++) {
            const rowData = [];
            for (let j = 0; j < 6; j++) {
                if ((i > normalizedStartHour || (i === normalizedStartHour && j >= normalizedStartMin)) &&
                    (i < normalizedEndHour || (i === normalizedEndHour && j <= normalizedEndMin))) {
                    rowData.push(true);
                } else {
                    rowData.push(false);
                }
            }
            checkedTable.push(rowData);
        }
        return [normalizedStartHour, normalizedStartMin, checkedTable];
    }

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
                let isChecked = false
                const [normalizedStartHour, normalizedStartMin, checkedTable] = isCheckedCell()
                console.log(normalizedStartHour, normalizedStartMin)
                isChecked = checkedTable[rowIndex][colIndex];
                return (
                    <DoTableCell key={colIndex}
                        bg={
                            colData ? "#616161" :
                                isChecked ? doData.category.colorCode :
                                    "#F6F6F6"}
                    >
                        {
                            rowIndex == normalizedStartHour && colIndex == normalizedStartMin ?
                                doData.title : null
                        }
                    </DoTableCell>
                )
            })}
        </DoTableRow>
    ));

    return (
        <DoContainer >
            <DoTable ref={ref}
            //  onMouseUp={(e) => handleMouseUp(e)} onMouseDown={handleMouseDown}
            >
                <TableHead style={{ height: "51px" }}>
                    <tr><th colSpan="6">Do</th></tr>
                </TableHead>
                <tbody style={{ cursor: "pointer" }}>
                    {tableRows}
                </tbody>
            </DoTable>
            {/* {showSelect && <Select x={mousePosition.x} y={mousePosition.y} />} */}
        </DoContainer>
    )
}
export default Do