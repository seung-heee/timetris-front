import styled from "styled-components"
import { useTableDragSelect } from 'use-table-drag-select'
import { PDSTableContext } from '../../context/PDSTableContext';
import { CategoryContext } from '../../context/CategoryContext';
import { useEffect, useState, useContext } from "react"
// import DoModal from '../../components/category/categoryModal/DoModal';
import HeaderModal from '../../components/category/categoryModal/ModalElement/HeaderModal';
import CategoryListBox from '../../components/category/categoryModal/ModalElement/CategoryListBox';
import SelectedCategory from '../../components/category/categoryModal/ModalElement/SelectedCategory';
import FooterModal from '../../components/category/categoryModal/ModalElement/FooterModal';
import InputEle from '../../components/category/categoryModal/ModalElement/InputEle';

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

const DoClick = styled.button`
    position: absolute;
    top: -50px;
    right: 0;
    text-decoration : underline;
    font-weight: 800;
`

const Do = () => {
    const { doData } = useContext(PDSTableContext)
    const { state, ModalHandler, timeData, setTimeData } = useContext(CategoryContext);

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

    // Do Modal Open 함수
    const handleDragEnd = () => {
        const newTimeData = value.map((row, rowIdx) => row.map((col, colIdx) => {
            return col ? `${rowIdx+4}${colIdx+1}`*1 : 0;
        }));
        
        const filteredTimeData = newTimeData.flat().filter(cell => cell !== 0);

        const minData = Math.min(...filteredTimeData); 
        const maxData = Math.max(...filteredTimeData); 
        setTimeData([minData, maxData])
        ModalHandler("isDoOpen");
    };

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
                    <DoTableCell 
                        onClick={()=>{console.log(checkedTable[0][rowIndex][colIndex])}}
                        key={colIndex} bg={colData ? "#616161" : backgroundColor}>
                        {/* {colData ? "" : title} */}
                    </DoTableCell>
                );
            })}
        </DoTableRow>
    ));

    return (
        <DoContainer >
            {state.isDoOpen && <DoModal />}
            <DoClick onClick={()=>{handleDragEnd()}}>DO 드래그 완료하면 이곳을 눌러주세요!</DoClick>
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
        </DoContainer>
    );
}
export default Do

const DoModal = () => {
    const { state, ModalHandler, today, timeData, setTimeData } = useContext(CategoryContext);

    const num = timeData[0] >= 100 ? 2 : 1;
    const startHour = parseInt(timeData[0].toString().substring(0, num));
    const startMinute = parseInt(timeData[0].toString().substring(num));
    const endHour = parseInt(timeData[1].toString().substring(0, num));
    const endMinute = parseInt(timeData[1].toString().substring(num));
    
   useEffect(()=>{
        const startTime = `${startHour}:${startMinute - 1}0`;
        const endTime = endMinute === 6 ? `${endHour + 1}:00` : `${endHour}:${endMinute}0`;
        setTimeData([startTime, endTime])
    }, [])

    return (
        <>
        {/* <button onClick={()=>{ModalHandler("isDoOpen")}}>Do</button> */}
        {state.isDoOpen && 
            <div className='fixed z-10 flex justify-center items-center bg-[rgba(0,0,0,0.4)] rounded-[10px] top-0 left-0 right-0 bottom-0'>
                <div onClick={(e) => e.stopPropagation()} className='flex flex-col justify-start items-center rounded-[20px] p-[30px] w-[800px] bg-[#fff]'>
                    <HeaderModal type={'Do'} />

                    <InputEle type={'Do'} />
                    <div className='flex justify-between w-11/12 items-center'>
                        <CategoryListBox text={'카테고리를 선택해주세요.'} type={'Do'}/>
                        <SelectedCategory inputText={'이곳에 할 일(Do)을 적어주세요.'} />
                    </div>
                    <FooterModal type={'Do'} />
                </div>
            </div>
        }
        </>
    );
};
