import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    padding-top : 175px;
`
const LoginHello = styled.div`
    padding-top : 58.1px;
    font-size : 36px;
    font-style : normal;
    font-weight : 700;
    line-height : 48px;
    color : #2C2E34;
`
const Loginstart = styled.div`
    padding-top : 22px;
    color: #2C2E34;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const GoogleBtn = styled.button`
    margin-top : 119px;
    cursor : pointer;
    background-image: url('/img/구글로그인버튼.svg');
    background-size : cover;
    width : 256px;
    height : 79px;
    border : none;

    &:hover{
        background-image : url('/img/구글로그인버튼Hover.svg');
    }
`

const Login = () => {

    return (
        <LoginContainer>
            <img src="/img/mainLogo.svg" style={{ width: "278.165px", height: "57.899px" }} />
            <LoginHello>타임트리스에 오신 것을 환영합니다.</LoginHello>
            <Loginstart>시작하려면 로그인하세요.</Loginstart>
            <a href="http://ec2-43-203-6-58.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google">
                <GoogleBtn />
            </a>
        </LoginContainer>
    )
}

export default Login;