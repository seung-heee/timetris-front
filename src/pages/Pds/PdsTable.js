import React, { useState, useContext } from 'react';
import { images } from '../../utils/images';
import styled from 'styled-components'
import Plan from './Plan';
import Do from './Do';
import See from './See';

const TableContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: center;
`
const ToolTipContainer = styled.div`
    margin-top : 25px;
    display : flex;
    cursor : pointer;
    justify-content : space-between;
`
const ToolTip = styled.div`
    width: 400px;
    height: 49px;
    flex-shrink: 0;
    border-radius: 16px;
    background: #9B9B9B;
    margin-left : 10px;
    padding : 15px 21px 15px 22px;
    color: #383838;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
const OKBtn = styled.button`
    text-decoration : underline;
    font-weight: 800;
`
const BtnContainer = styled.div`
    display : flex;
    justify-content : flex-end;
`
const PDSContainer = styled.div`
    margin-top : 16px;
    display : flex;
    justify-content : center;
`
const Mix = styled.div`
    display:flex;
    flex-direction :column;
`
const TopContainer = styled.div`
    display:flex;
    flex-direction :row;
`
const BottomContainer = styled.div`
`

const PdsTable = () => {

    const [showAlert, setShowAlert] = useState(false);
    // const [planok, setPlanok] = useState(planDatas.length > 0)

    // 버튼을 누를 때 알림 보이기
    const handleButtonClick = () => {
        setShowAlert(true);

        // 1300ms 후에 알림 숨기기
        setTimeout(() => {
            setShowAlert(false);
        }, 1300);
    };

    return (
        <TableContainer>
            <ToolTipContainer>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <img
                        src={images.btn30}
                        alt="안내버튼"
                        onClick={handleButtonClick} // 버튼 클릭 이벤트 추가
                    />
                    {showAlert && (
                        <ToolTip>
                            원하는 시간대를 드래그해서 일정을 작성해보세요!
                        </ToolTip>
                    )}
                </div>
                <BtnContainer>
                    <OKBtn>DO 드래그 완료하면 이곳을 눌러주세요!</OKBtn>
                </BtnContainer>
            </ToolTipContainer>

            <PDSContainer>
                <Mix>
                    <TopContainer>
                        <Plan />
                        < Do />
                    </TopContainer>
                    <BottomContainer>
                        <See />
                    </BottomContainer>
                </Mix>
            </PDSContainer>

        </TableContainer>
    )
}
export default PdsTable