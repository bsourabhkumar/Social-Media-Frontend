import React from 'react'
import styled from 'styled-components'

const Conversation = () => {
    return (
        <Contconver>
            <img className="user-img"
            src="https://i.pinimg.com/originals/cc/6b/54/cc6b54bb61602620247a3165298895e0.jpg" alt="user-img" />
            <span>Subham Singh</span>
        </Contconver>
    )
}

const Contconver = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    margin-top: 10px;
    .user-img{
        height: 40px;
        width: 40px;
        border-radius: 60px;
        margin-right: 20px;
        object-fit: cover;

    }
    span{
        font-weight: 600;
    }
    :hover{
        background-color: rgb(245, 243, 243);
    }
`
export default Conversation
