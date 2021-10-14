import React, {useContext} from 'react'
import styled from 'styled-components'
import {MdRssFeed} from "react-icons/md"
import {BsChatSquareDotsFill} from "react-icons/bs"
import {AiFillPlayCircle} from "react-icons/ai"
import {HiUserGroup} from "react-icons/hi"
import {BsFillBookmarksFill} from "react-icons/bs"
import {FaQuestionCircle} from "react-icons/fa"
import {BiCalendarEvent} from "react-icons/bi"
import { PostContext } from '../context/PostContext'

const Leftbar = () => {
    const {friends} = useContext(PostContext);
    console.log(friends);
    return (
        <Container>
            <div className="sidebar">
                <ul className="leftbar-list">
                    <li className="list-item">
                        <MdRssFeed className="leftbar-icon" />
                        <span className="icon-text">Feed</span>
                    </li>
                    <li className="list-item">
                        <BsChatSquareDotsFill className="leftbar-icon" />
                        <span className="icon-text">Chats</span>
                    </li>
                    <li className="list-item">
                        <AiFillPlayCircle className="leftbar-icon" />
                        <span className="icon-text">Videos</span>
                    </li>
                    <li className="list-item">
                        <HiUserGroup className="leftbar-icon" />
                        <span className="icon-text">Groups</span>
                    </li>
                    <li className="list-item">
                        <BsFillBookmarksFill className="leftbar-icon" />
                        <span className="icon-text">Bookmarks</span>
                    </li>
                    <li className="list-item">
                        <FaQuestionCircle className="leftbar-icon" />
                        <span className="icon-text">Questions</span>
                    </li>
                    
                    <li className="list-item">
                        <BiCalendarEvent className="leftbar-icon" />
                        <span className="icon-text">Events</span>
                    </li>
                   
                </ul>
                <Button>Show More</Button>
                <hr className="leftbarhr" />
            </div>

        </Container>
    )
}

const Button = styled.button`
    width: 80%;
    border: none;
    padding: 10px;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 1vh;
`

const Container = styled.div`
    top: 8vh;
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
    .sidebar{
        padding: 3vh;
    }
    
    .leftbar-list{
        padding: 0;
        margin: 0;
        list-style: none;
        .list-item{
            display: flex;
            align-items: center;
            margin-bottom: 3vh;
            .leftbar-icon{
                margin-right: 1vw;
            }
        }
    }
`

export default Leftbar;
