import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  width: 100vw;
  position: absolute;
  bottom: 0;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const FooterNoScroll = () => {
    return (
        <FooterContainer>
            <img src="/img/푸터.svg" />
        </FooterContainer>
    );
};

export default FooterNoScroll;