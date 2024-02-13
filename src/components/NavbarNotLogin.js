import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavBarContainer = styled.nav`
    width : 100vw;
    display : flex;
    justify-content : space-between;
    padding : 0 100px 0 100px;
    border-bottom : 1px solid #CCCCCC;
`

const NavbarNotLogin = () => {
    const navigate = useNavigate();
    return (
        <NavBarContainer>
            <img src="/img/mainLogo.svg" onClick={() => navigate('/')} style={{ cursor: "pointer", padding: "24px 0 24.74px 0" }} />
            <img src="/img/로그인.svg" onClick={() => navigate('/login')} style={{ cursor: "pointer" }} />
        </NavBarContainer>
    )
}
export default NavbarNotLogin;