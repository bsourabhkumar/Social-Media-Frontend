import React from 'react'
import styled from 'styled-components'

const Rightbar = () => {
    return (
       <Container>
            
            <Wrapper>
            <span className="title">Sponsored</span>
                <Sponsored>
                    <img src="https://i.ytimg.com/vi/yWb-TkxQBR4/maxresdefault.jpg" alt="ads" />
                    <span>Get the best smartphone for your loved ones</span>
                    <a target="_blank" rel="noreferrer" href="https://www.htc.com/in/">HTC India</a>
                </Sponsored>
            </Wrapper>                   
       </Container>
    )
}
const Sponsored = styled.div`
    border-radius: 10px;
    box-shadow: 0 0 16px -8px rgba(0,0,0,0.68);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    border-radius: 10px;
    margin: 20px 0;
    img{
        width: 100%;
        height: 50%;
        margin-bottom: 10px;
    }
    span{
        margin-left: 10px;
        margin-bottom: 10px;
        font-size: 22px;
        font-weight: 500;
    }
    a{
        text-decoration: none;
        align-items: center;
        /* margin-left: 50px; */
        width: 97%;
        padding: 2px;
        background-color: yellowgreen;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        font-size: 18px;
        font-weight: 600;
    }
    a:hover{
        background-color: white;
        color: green;
    }
`
const Container = styled.div`
    width: 100%;
    
    
`
const Wrapper = styled.div`
    margin-top: 10px;
    .title{
        font-size: 30px;
        padding-top: 2vh;
        color: gray;
        margin-left: 80px;
        
    }
`

export default Rightbar
