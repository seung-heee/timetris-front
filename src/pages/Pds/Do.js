import styled from "styled-components"
import { useTableDragSelect } from 'use-table-drag-select'
import { useEffect, useState } from "react"

const DoContainer = styled.div`
    display : flex;
    position: relative;
`
const DoTable = styled.table`
    width: 480.5px;
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
`
const DoTableCell = styled.td`
    border: 0.5px solid #E4E4E4;
    background: ${props => props.bg};
    `

const Do = () => {
    // const [showSelect, setShowSelect] = useState(false);
    // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // const handleMouseUp = (e) => {
    //     setMousePosition({ x: e.clientX, y: e.clientY });
    //     setShowSelect(true);
    // };
    // const handleMouseDown = (e) => {
    //     setShowSelect(false);
    // }
    // useEffect(() => { handleMouseUp() }, [])

    const tableData = [];
    for (let i = 0; i < 24; i++) {
        const rowData = [];
        for (let j = 0; j < 6; j++) {
            rowData.push(false); // 각 셀에 들어갈 값
        }
        tableData.push(rowData);
    }
    const [ref, value] = useTableDragSelect(tableData);
    // console.log("ref " + ref)
    // console.log("value " + value)

    // 각 행을 나타내는 JSX 배열을 생성합니다.
    const tableRows = value.map((rowData, rowIndex) => (
        <DoTableRow key={rowIndex}>
            {rowData.map((colData, colIndex) => (
                <DoTableCell key={colIndex}
                    bg={colData ? "#616161" : "#F6F6F6"}
                ></DoTableCell>
            ))}
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

const SelectContainer = styled.div`
    position: absolute;
    top: ${props => props.y}px; /* 마우스 이벤트에서 추적한 y 좌표를 기반으로 위치를 설정합니다. */
    padding-left: 20px; /* 선택 옵션을 띄울 위치를 조절합니다. */
`

function Select({ x }, { y }) {
    return (
        <SelectContainer y={y}>
            선택을 완료하시겠습니까?
            <button>YES</button>
        </SelectContainer>
    )
}