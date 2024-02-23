import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const UnAuthorizedContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;
  align-items: center;
`;
const Header = styled.header`
  font-size: 50px;
  margin-bottom: 50px;
`;
const ButtonContainer = styled.button`
    display: inline-flex;
    padding: 15px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 62px;
    background: #F57E64;
    width : 200px;
    color : white;
`

const NotFound = () => {
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/login')
    }
    return (
        <UnAuthorizedContainer>
            <Header>권한이 없습니다 401</Header>
            <ButtonContainer onClick={goToLogin}>로그인 하러 가기</ButtonContainer>
        </UnAuthorizedContainer>
    );
};

export default NotFound;