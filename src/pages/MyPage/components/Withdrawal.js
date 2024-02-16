import styled from "styled-components";

const WithdrawalContainer = styled.div`
    padding-left : 37px;
`
const Title = styled.div`
    color: #383838;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    margin-bottom: 12px;
`
const Content = styled.div`
    color: #616161;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 45px;
`
const OutBtn = styled.button`
    color: #CCC;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const Withdrawal = (props) => {
    return (
        <WithdrawalContainer>
            <Title>계정 탈퇴</Title>
            <Content>계정을 탈퇴하시면 지금까지 작성한 기록들이 모두 사라지게 됩니다.</Content>
            <OutBtn onClick={props.showModal} > 탈퇴하기</OutBtn>
        </WithdrawalContainer >
    )
}
export default Withdrawal;