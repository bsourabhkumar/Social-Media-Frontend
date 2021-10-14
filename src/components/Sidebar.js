import React from 'react'
import {FaRegUser } from 'react-icons/fa'
import { BiChat} from 'react-icons/bi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import styled from "styled-components"

const Sidebar = () => {
    return (
        <Wrapper>
               
                <Links>
                    <span>HomePage</span>
                    <span>Timeline</span>
                </Links>
                <Icons>
                    <div className="icon-item">
                        <FaRegUser className="icon" />
                        <span className="icon-badge">1</span>
                    </div>
                    <div className="icon-item">
                        <BiChat className="icon" />
                        <span className="icon-badge">1</span>
                    </div>
                    <div className="icon-item">
                        <IoMdNotificationsOutline className="icon" />
                        <span className="icon-badge">1</span>
                    </div>
                </Icons>
                <img className="profile-image" src="https://pbs.twimg.com/profile_images/1432583638319656960/BoR_X0wT_400x400.jpg" alt="DP" />
               
            </Wrapper>
       
    )
}

const Wrapper = styled.div`
    background-color: lightpink;
    padding-left: 2vw ;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    width: 30vw;
    
    .profile-image{
        height: 6vh;
        width: 40px;
        object-fit: cover;
        border-radius: 40px;
        cursor: pointer; 
    }
`

const Links = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    span{
       
        font-size: 3vh;
        cursor: pointer;
        font-weight: bold;
        margin-top: 1vh;
        margin-bottom: 1vh;

    
    }
`
const Icons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .icon-item{
        margin-top: 8px;
        margin-bottom: 8px;
        position: relative;
        cursor: pointer;
        .icon{
            height: 25px;
            width: 25px;
            }
        .icon-badge{
            width: 16px;
            height: 16px;
            background-color: red;
            border-radius: 50%;
            color: white;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            top: -1vh;
            right: -0.4vw;
            font-size: 12px;

        }
    }
`

export default Sidebar
