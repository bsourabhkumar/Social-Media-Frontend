import React from 'react'
import styled from 'styled-components'

const ChatOnline = () => {
    return (
       <Container>
           <Wrapper>
               <ChatOnlineImgContainer>
                    <img 
                    src="https://i.pinimg.com/originals/cc/6b/54/cc6b54bb61602620247a3165298895e0.jpg"
                    alt="" />
                    <ChatOnlineBadge></ChatOnlineBadge>
               </ChatOnlineImgContainer>
               <ChatOnlineName>Subham Singh</ChatOnlineName>
           </Wrapper>
       </Container>
    )

}
const ChatOnlineName = styled.span`

`
const ChatOnlineBadge = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: limegreen;
    top:0;
    right: 0;
`
const ChatOnlineImgContainer = styled.div`
position: relative;
margin-right: 10px;
    img{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
        border: 1px solid white;
    }
`

const Container = styled.div`
    margin: 18px auto;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
    cursor: pointer;
`
export default ChatOnline
