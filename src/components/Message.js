import React from 'react'
import styled from 'styled-components'

const Message = ({own}) => {
    return (
            <Container >
                {!own ? <MessageTop>
                    <img 
                    src="https://i.pinimg.com/originals/cc/6b/54/cc6b54bb61602620247a3165298895e0.jpg" 
                    alt="user-img" />
                    <p>Hello this is a Message Hello this is a Message</p>
                </MessageTop> :
                <MessageOwn>
                    <img 
                        src="https://i.pinimg.com/originals/cc/6b/54/cc6b54bb61602620247a3165298895e0.jpg" 
                        alt="user-img" />
                    <p>Hello this is a Message Hello this is a Message</p>
                </MessageOwn>
                }
                {!own ? <MessageBottom>
                    <p>1 hour ago</p>
                </MessageBottom> : 
                <MessageBottomOwn>
                    <p>1 hour ago</p>
                </MessageBottomOwn>}
            </Container>

    )
}
const MessageBottomOwn = styled.div`
    font-size: 12px;
    margin-top: 2px;
    display: flex;
    justify-content: flex-end;
`
const MessageOwn = styled.div`
    justify-content: flex-end;
    p{
        padding: 10px;
         border-radius: 20px;
         max-width: 300px;
         background-color: rgb(245, 241, 241);
        color: black;
    }
    display: flex;
    align-items: center;
    img{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 10px;
    }
`
const Container = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  
`;
const MessageTop = styled.div`
    
    p{
        padding: 10px;
         border-radius: 20px;
         background-color: #1877f2;
         color: white;
         max-width: 300px;
    }
    display: flex;
    align-items: center;
    img{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 10px;
    }
`;

const MessageBottom = styled.div`
    font-size: 12px;
    margin-top: 2px;
`;

export default Message
