import { useTableDragSelect } from 'use-table-drag-select'
import styled from 'styled-components';

const TableBox = styled.td`
    width : 40px;
    height : 40px;
    border : 1px solid black;
    cursor : pointer;
    background : ${props => props.bg};
`
const DragNDrop = () => {
    const [ref, value] = useTableDragSelect([
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
    ]);
    console.log("ref " + ref)
    console.log("value " + value)

    return (
        <table ref={ref} className="timetable">
            <thead>
                <tr>
                    <th></th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                    <th>Sun</th>
                </tr>
            </thead>
            <tbody>
                {value.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        <th>{rowIndex + 1}</th>
                        {row.map((col, columnIndex) => (
                            <TableBox key={columnIndex}
                                bg={col ? "pink" : "white"}
                            ></TableBox>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export default DragNDrop