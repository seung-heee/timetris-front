import styled from "styled-components"

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
`

const Plan = () => {
    const Time = ["4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM",
        "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM"
        , "11PM", "12AM", "1AM", "2AM", "3AM"]

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
    console.log(tableData)

    // 각 행을 나타내는 JSX 배열을 생성합니다.
    const tableRows = tableData.map((rowData, rowIndex) => (
        <PlanTableRow key={rowIndex}>
            {rowData.map((colData, colIndex) => (
                <PlanTableCell key={colIndex}>{colData}</PlanTableCell>
            ))}
        </PlanTableRow>
    ));

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
    )
}
export default Plan
