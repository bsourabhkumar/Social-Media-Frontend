import React from 'react'
import styled from "styled-components"
import ChatOnline from '../components/ChatOnline'
import Conversation from '../components/Conversation'
import Message from '../components/Message'
import Navbar from '../components/Navbar'

const Messenger = () => {
    return (
        <>
        <Navbar />
        <Chat>
            <ChatMenu>
                <ChatMenuWrapper>
                    <input placeholder="Search for friends" className="chatMenuInput" />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                </ChatMenuWrapper>
            </ChatMenu>
            <ChatBox>
                <ChatBoxWrapper>
                    <ChatBoxTop>
                        <Message />
                        <Message own={true} />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                    </ChatBoxTop>
                    <ChatBoxBottom>
                        <textarea placeholder="Write Something..."></textarea>
                        <button>Send</button>
                    </ChatBoxBottom>
                </ChatBoxWrapper>
            </ChatBox>
            <ChatOnlineBox>
                <ChatOnlineWrapper>
                    <ChatOnline />
                    <ChatOnline />
                    <ChatOnline />
                    <ChatOnline />
                </ChatOnlineWrapper>
            </ChatOnlineBox>
        </Chat>
        </>
    )
}
const Chat = styled.div`
    height: 92vh;
    display: flex;
`
const ChatMenu = styled.div`
    flex: 3.5;
`
const ChatBox = styled.div`
    flex: 5.5;
`
const ChatOnlineBox = styled.div`
    flex: 3;
`
const ChatMenuWrapper = styled.div`
    padding: 10px;
    height: 100%;
    .chatMenuInput{
        width: 90%;
        padding: 10px 0;
        border: none;
        border-bottom: 1px solid gray;
    }
`
const ChatBoxWrapper = styled.div`
    padding: 8px;
    padding-bottom: 0;
    margin-bottom: 0;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ChatOnlineWrapper = styled.div`
    padding: 10px;
    height: 100%;
`
const ChatBoxTop = styled.div`
    height: 90%;
    overflow-y: scroll;
        ::-webkit-scrollbar{
        width: 5px;
        }
        ::-webkit-scrollbar-track{
            background-color: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb{
            background-color: rgb(179, 179, 179);
        }
    padding-right: 10px;
`
const ChatBoxBottom = styled.div`
    margin-top: 10px;
    margin-bottom: 0;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    textarea{
        width: 80%;
        height: 50px;
        padding: 8px;
        padding-bottom: 0;
    }
    button{
        width: 70px;
        height: 40px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background-color: teal;
        color: white;

    }
`
export default Messenger
