import React, {useState, useContext} from 'react'
import styled from "styled-components"
import { FaSearch, FaRegUser, FaTimes } from 'react-icons/fa'
import { BiChat} from 'react-icons/bi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {FaBars} from 'react-icons/fa'
import Sidebar from './Sidebar'
import { Link } from "react-router-dom"
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext);
    // const user = JSON.parse(localStorage.getItem("user"));
    
    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
        // window.location.reload();
    }

    const [isSidebarOpen, SetIsSidebarOpen] = useState(false);
    return (
        <Wrapper>

        <Container>
            <Left>
            <Link to="/" className="logo">
            <span >SocialGen</span>
            </Link>
            </Left>
            <Center>
                    <FaSearch />
                    <input placeholder="Search for friends, posts or pages" />
                      
                    <FaTimes />
            </Center>
            <Right>
                <Links>
                    {/* <span>HomePage</span> */}
                    <Link to="/login" onClick={handleLogout} style={{textDecoration: "none"}}>
                        <span>Logout</span>
                    </Link>
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
                <Link to={`/profile/${user.username}`}>
                <img className="profile-image" 
                src={user.profilePicture ? user.profilePicture : 
                        (user.gender === "Male" ? 
                        "https://deejayfarm.com/wp-content/uploads/2019/10/Profile-pic.jpg"
                        :"https://images.assetsdelivery.com/compings_v2/thesomeday123/thesomeday1231712/thesomeday123171200008.jpg") } 
                        alt="profile-pic"
                 />
                </Link>
                
            </Right>
            <SideBar>
                <FaBars onClick={()=>SetIsSidebarOpen(!isSidebarOpen)} />
            </SideBar>
        </Container>
                <Search>
                        <FaSearch />
                        <input placeholder="Search for friends, posts or pages" />
                        
                        <FaTimes />
                </Search>
                <ShowSidebar>
                    { isSidebarOpen && <Sidebar />}
                </ShowSidebar>
        </Wrapper>
    )
}
const ShowSidebar = styled.div`
    display: none;
    @media (max-width: 768px){
        display: inline-block;
    }
`
const SideBar = styled.div`
    display: none;
    @media (max-width: 768px){
        display: inline-block;
        margin-right: 4vw;
        font-size: 24px;
        cursor: pointer;
    }
`
const Wrapper= styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0;
    z-index: 999;
    position: sticky;
    top:0;
    width: 1349px;
    overflow-x: hidden;

`
const Container = styled.div`
    margin: 0 0 auto 0; 
    background-color: wheat;
    display: flex;
    flex-direction: row ;
    height: 8vh;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    z-index: 999;
    position: sticky;
    top:0;
`
const Search= styled.div`
    display: none;
    @media (max-width: 768px){
        display: inline-block;
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: white;
        justify-content: space-around;
        /* background-color: gray; */
        border: 0.5px solid grey;
        /* border-radius: 20px; */
        /* width: 28vw; */
        margin-right: 4vw;
        padding-left: 1vw;
        padding-right: 2vw;
        input{
            border: none;
            width: 75vw;
            height: 5vh;
            margin-left: 1vw;

        }
        input:focus{
            outline: none;
        }
        
    }
`
const Left = styled.div`
    flex: 2;
    margin-left: 2vw;
    .logo{
        font-size: 4vh;
        cursor: pointer;
        font-weight: bold;
        color: blue;
        text-decoration: none;
        
    }
`
const Center = styled.div`
    flex: 4;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    justify-content: space-around;
    /* background-color: gray; */
    border: 0.5px solid grey;
    border-radius: 20px;
    width: 28vw;
    margin-right: 4vw;
    padding-left: 1vw;
    padding-right: 1vw;
    input{
        border: none;
        width: 24vw;
        height: 5vh;
        margin-left: 1vw;

    }
    input:focus{
        outline: none;
    }
    @media (max-width: 768px){
        display: none;
    }
    
`
const Right = styled.div`
    flex: 6;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-right: 0.6vw;
    .profile-image{
        flex: 1;
        margin-left: 2vw;
        margin-right: 2vw;
        height: 6vh;
        width: 3vw;
        object-fit: cover;
        border-radius: 50%;
        cursor: pointer;
    }
    @media (max-width: 768px){
        display: none;
    }
`

const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
    margin-right: 10vw;
    span{
        font-size: 3vh;
        cursor: pointer;
        font-weight: bold;
        margin-left: 0.5vw;
        margin-right: 0.5vw;
        
    }

`
const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
    .icon-item{
        margin-left: 2vw;
        margin-right: 2vw;
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



export default Navbar
