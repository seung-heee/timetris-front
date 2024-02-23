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
    const { state, ModalHandler } = useContext(CategoryContext);

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
    // useEffect(() => {
    //     handleDragEnd();
    // }, [value]);

    const [timeData, setTimeData] = useState([0, 0]); // 시간 정보 저장

    // Do Modal Open 함수
    const handleDragEnd = () => {
        const newTimeData = value.map((row, rowIdx) => row.map((col, colIdx) => {
            return col ? `${rowIdx+4}${colIdx+1}`*1 : 0;
        }));
        
        const filteredTimeData = newTimeData.flat().filter(cell => cell !== 0);
        setTimeData(filteredTimeData);

        const startTime = Math.min(...filteredTimeData); 
        const endTime = Math.max(...filteredTimeData); 
        setTimeData([startTime, endTime])
        
        ModalHandler("isDoOpen");
        console.log(timeData)
    };

    // 각 행을 나타내는 JSX 배열을 생성
    const tableRows = value.map((rowData, rowIndex) => (
        <DoTableRow key={rowIndex}>
            {rowData.map((colData, colIndex) => {
                let isChecked = false
                const [normalizedStartHour, normalizedStartMin, checkedTable] = isCheckedCell()
             //    console.log(normalizedStartHour, normalizedStartMin)
                isChecked = checkedTable[rowIndex][colIndex];
                return (
                    <>
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
                    </>
                )
            })}
        </DoTableRow>
    ));

    return (
        <DoContainer >
            {state.isDoOpen && <DoModal timeData={timeData}/>}
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
            {/* {showSelect && <Select x={mousePosition.x} y={mousePosition.y} />} */}
        </DoContainer>
    )
}
export default Do

const DoModal = ({timeData}) => {
    const { state, ModalHandler } = useContext(CategoryContext);

    return (
        <>
        {/* <button onClick={()=>{ModalHandler("isDoOpen")}}>Do</button> */}
        {state.isDoOpen && 
            <div className='fixed z-10 flex justify-center items-center bg-[rgba(0,0,0,0.4)] rounded-[10px] top-0 left-0 right-0 bottom-0'>
                <div onClick={(e) => e.stopPropagation()} className='flex flex-col justify-start items-center rounded-[20px] p-[30px] w-[800px] bg-[#fff]'>
                    <HeaderModal title={'Do 선택한 날짜'} type={'Do'} />
                    <InputEle type={'Do'} />
                    tㅅㅂ{timeData}
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