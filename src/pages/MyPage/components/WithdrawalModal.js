import styled from "styled-components";
import * as API from "../../../api/API"

const ModalConatiner = styled.div`
`

const ModalView = styled.div`
    width: 496px;
    height: 265px;
    border-radius: 8px;
    background: #FFF;
    position : fixed;
    top : 40%;
    left: 50%;
    transform: translateX( -50% ); /*가운데 정렬*/
`
const Text = styled.div`
    color: #383838;
    text-align: center;
    font-size: ${props => props.size};
    font-style: normal;
    font-weight: ${props => props.weight};
    line-height: normal;
    margin-top : ${props => props.margin};
`

const BtnContainer = styled.div`
    display : flex;
    flex-direction : row;
    gap : 121px;
    justify-content : center;
    margin-top : 51px;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const WithdrawalModal = (props) => {
    const DeleteUserInfo = async () => {
        const data = await API.post('/mypage')
        console.log(data)
        sessionStorage.removeItem('Authorization')
        window.location.href = '/';
    }

    return (
        <ModalConatiner onClick={props.closeModal}>
            <dialog ref={props.dialogRef}>
                <ModalView>
                    <Text size="24px" weight="600" margin="53px">정말로 탈퇴하시겠습니까?</Text>
                    <Text size="18px" weight="500" margin="16px">탈퇴하시면 작성한 모든 기록들이 사라지며,<br />모든 정보를 다시 설정해야 합니다.</Text>
                    <BtnContainer onClick={(e) => { e.stopPropagation() }}>
                        <button style={{ color: "#EA7156" }} onClick={DeleteUserInfo}>탈퇴하기</button>
                        <button style={{ color: "#CCC" }} onClick={props.closeModal}>취소하기</button>
                    </BtnContainer>
                </ModalView>
            </dialog>
        </ModalConatiner>
    )
}
export default WithdrawalModal;