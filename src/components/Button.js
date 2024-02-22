import styled from "styled-components"

const ButtonContainer = styled.button`
    display: inline-flex;
    padding: 15px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 62px;
    background: ${props => props.bg};
    width : ${props => props.width};
    color : ${props => props.color}
    active : inactive;
`

const Button = ({ Btnbg, width, text, color, onClick }) => {
    return (
        <ButtonContainer bg={Btnbg} width={width} color={color}
            onClick={onClick}
        >
            {text}
        </ButtonContainer>
    )
}
export default Button;