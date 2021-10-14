import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Leftbar from "../components/Leftbar"
import Feed from "../components/Feed"
import Rightbar from "../components/Rightbar"
import styled from 'styled-components'
import { AuthContext } from '../context/AuthContext'

const HomePage = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
           
            <Navbar />
            <HomeContainer>
                <div className="left">
                    <Leftbar />
                </div>
                <div className="feed">
                     <Feed username={user.username} />
                </div>
                <div className="right">
                    <Rightbar />
                </div>
            </HomeContainer>
        </div>
    )
}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .left{
        z-index:998;
        position: -webkit-sticky !important;
        position: sticky !important;
        
         height: auto;
        flex: 2;
        /* height: 92vh; */
        /* background-color: yellowgreen; */
        
    }
    
    .feed{
        flex: 7;
    }
    .right{
        flex: 3;
        display: unset;
        z-index:998;
        position: -webkit-sticky !important;
        position: sticky !important;
        height: auto;
    }
`
export default HomePage
