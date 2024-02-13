// 전역 스타일 컴포넌트 > 하위 모든 컴포넌트에 해당 스타일 일괄 적용
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Pretendard-Regular';
        display : flex;
        justify-content : center;
        margin : 0;
        padding : 0;
    }
`

export default GlobalStyle;