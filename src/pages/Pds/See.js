import styled from "styled-components"
import Button from "../../components/Button"
import { useState, useEffect, useContext } from "react"
import { PDSTableContext } from '../../context/PDSTableContext';
import * as API from '../../api/API'

const SeeContainer = styled.div`
    width: 1090.5px;
    height: 400px;
    flex-shrink: 0;
    border-radius: 0px 0px 8px 8px;
    border: 0.5px solid #E4E4E4;
    background: #F6F6F6;
    margin-bottom : 162px;
    display : flex;
    flex-direction : row;
`
const Title = styled.div`
    margin-left : 39px;
    margin-right : 21px;
    margin-top : 29px;
    color: #383838;
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px; /* 150% */
`
const Text = styled.div`
    margin-top : 29px;
    display: flex;
    width: 920px;
    flex-direction: column;
    flex-shrink: 0;
`
const Textarea = styled.textarea`
    height: 280px;
    background: #F6F6F6;
    color: #BBB;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px; /* 240% */
    padding-left : 10px;
    outline: none;
    margin-bottom: 15px;
`

const See = () => {
    const { seeData } = useContext(PDSTableContext)

    let content = ""
    if (seeData.length > 0) {
        content = seeData[0].content
    }
    const [activeBtn, setActiveBtn] = useState(false)
    const [writeBtn, setWriteBtn] = useState(false)
    const [seeContent, setSeeContent] = useState(content)

    const submitData = {
        content: seeContent
    }

    const ChangeText = (e) => {
        setSeeContent(e.target.value)
    }

    useEffect(() => {
        if (seeContent) {
            setActiveBtn(true)
        } else {
            setActiveBtn(false)
        }
    }, [seeContent])
    const submitText = async () => {
        // const data = await API.put('/see/0', submitData)
        setWriteBtn(!writeBtn)
        // console.log(submitData)
    }

    return (
        <SeeContainer>
            <Title>SEE</Title>
            <Text>
                <Textarea className="content" placeholder="오늘 하루는 어떠셨나요?"
                    disabled={writeBtn}
                    onChange={ChangeText}>{content}</Textarea>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <></>
                    <Button
                        style={{ marginLeft: "auto" }}
                        Btnbg={writeBtn ? "#E4E4E4" : "#616161"}
                        width={"103px"}
                        text={writeBtn ? "수정하기" : "작성하기"}
                        color={writeBtn ? "black" : "white"}
                        onClick={submitText}
                    />
                </div>
            </Text>
        </SeeContainer>
    )
}
export default See