import styled from "styled-components";
import { useState, useEffect } from "react";
import * as API from "../../../api/API"

const ProfileContainer = styled.div`
    display : flex;
    flex-direction : column;
    color: #383838;
    padding-top : 139px;
    padding-left : 37px;
    margin-bottom : 113px;
`
const Title = styled.div`
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
`

const SubTitle = styled.div`
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top : ${props => props.px}
`

const Form = styled.div`
    display : flex;
    gap : 20px;
`

const InputName = styled.input`
    border-bottom: 1px solid #CFCFCF;
    width: 238px;
    &:focus {outline: none;}
`

const AlterBtn = styled.button`
    display: flex;
    width: 72px;
    height: 51px;
    padding: 15px 20px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 62px;
    background: ${props => props.background};
    color: #FFF;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
// background-props => #6BB8FF(활성화) or #616161(비활성화)

const Email = styled.div`
    color: #616161;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    margin-top: 16px;
    line-height: normal;
`

const Profile = () => {

    const [nicName, setNicName] = useState('이름 변경')
    const [email, setEmail] = useState("")
    const [activeBtn, setActiveBtn] = useState(false)

    const getUSerInfo = async () => {
        const data = await API.get('/mypage')
        setNicName(data.result.name)
        setEmail(data.result.email)
    }
    useEffect(() => {
        getUSerInfo();
    }, [])

    const ChangeName = (e) => {
        if (e.target.value) {
            setActiveBtn(true)
        } else {
            setActiveBtn(false)
        }
        setNicName(e.target.value)
    }

    const SubmitInfo = async () => {
        const data = await API.patch('/mypage', { nickname: nicName })
        console.log(data)
        alert('프로필 이름이 변경되었습니다!')
        setActiveBtn(false)
    }

    return (
        <ProfileContainer>
            <Title>프로필 변경</Title>
            <SubTitle px="30px">이름</SubTitle>
            <Form>
                <InputName type="text" placeholder={nicName} onChange={ChangeName} />
                <AlterBtn background={activeBtn ? "#6BB8FF" : "#616161"} onClick={SubmitInfo}>변경</AlterBtn>
            </Form>
            <SubTitle px="46px">이메일</SubTitle>
            <Email>{email}</Email>
        </ProfileContainer>
    )
}
export default Profile;