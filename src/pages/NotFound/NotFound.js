import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NotFoundContainer = styled.section`
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
  const goToMain = () => {
    navigate('/')
  }
  return (
    <NotFoundContainer>
      <Header>Page Not Found 404</Header>
      <ButtonContainer onClick={goToMain}>메인으로 돌아가기</ButtonContainer>
    </NotFoundContainer>
  );
};

export default NotFound;