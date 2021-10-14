import React, { useContext, useRef, useState } from 'react'
import styled from 'styled-components'
import {MdPermMedia, MdLabel} from "react-icons/md"
import {ImLocation} from "react-icons/im"
import {GrEmoji} from "react-icons/gr"
import { AuthContext } from '../context/AuthContext'
import axios from "axios";
import {ImCancelCircle} from "react-icons/im";

const Share = () => {
    const { user } = useContext(AuthContext);
    const desc = useRef();

    const [ file, setFile ] = useState(null);
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    // const [fileInputState, setFileInputState] = useState('');

    const uploadImage = async (base64EncodedImage) => {
        try {
            await fetch('/', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-Type': 'application/json' },
            });
            // setFileInputState('');
            // setPreviewSource('');
            setFile('');
            setSuccessMsg('Image uploaded successfully');
        } catch (err) {
            console.error(err);
            setErrMsg('Something went wrong!');
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value
           
        }

        if(file){
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
            setErrMsg('something went wrong!');
        };
      
        }

        try {
            await axios.post("/posts", newPost);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Container>
            <Wrapper>
                <ShareTop>
                <img 
                src={user.profilePicture ? user.profilePicture : 
                        (user.gender === "Male" ? 
                        "https://deejayfarm.com/wp-content/uploads/2019/10/Profile-pic.jpg"
                        :"https://images.assetsdelivery.com/compings_v2/thesomeday123/thesomeday1231712/thesomeday123171200008.jpg") } 
                        alt="profile-pic" />
                <input ref={desc} placeholder={`${user.name}, What's in your mind?`} />
                </ShareTop>
                <hr style={{margin: "20px"}}/>
               {file && (
                   <div className="shareImgContainer">
                       <img className="shareImg" src={URL.createObjectURL(file)} alt="shareImg" />
                       <ImCancelCircle className="shareCancelImg" onClick={()=>setFile(null)} />
                   </div>
               )}
                    <ShareBottom onSubmit={submitHandler}>
                    <ShareOptions>
                        <ShareOption>
                            <label htmlFor="file">
                            <MdPermMedia style={{color: "tomato"}} className="share-icon" />
                            <span className="share-text">Photo</span>
                            <input style={{display: "none"}}  
                            type="file" id="file" accept=".png,.jpeg,.jpg" 
                            onChange={(e)=>setFile(e.target.files[0])} />
                            </label>
                        </ShareOption>
                        <ShareOption>
                            <MdLabel style={{color: "blue"}} className="share-icon" />
                            <span className="share-text">Tag</span>
                        </ShareOption>
                        <ShareOption>
                            <ImLocation style={{color: "green"}} className="share-icon" />
                            <span className="share-text">Location</span>
                        </ShareOption>
                        <ShareOption>
                            <GrEmoji style={{color: "goldenrod"}} className="share-icon" />
                            <span className="share-text">Feelings</span>
                        </ShareOption>
                        </ShareOptions>
                  
                        <ShareButton type="submit">Share</ShareButton>
                    
                </ShareBottom>
            </Wrapper>
        </Container>
    )
}
const ShareButton = styled.button`
    border: none;
    padding: 7px;
    border-radius: 5px;
    background-color: blue;
    font-weight: 600;
    margin-right: 20px;
    cursor: pointer;
    color: white;
`
const ShareTop = styled.div`
    display: flex;
    align-items: center;
    img{
        width: 50px;
        height: 50px;
        border-radius: 50px;
        object-fit: cover;
        margin-right: 20px;
        margin-left: 17px;
    }
    input{
        border: none;
        width: 80%;
    }
    input:focus{
        outline: none;
    }
`
const ShareBottom = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Container = styled.div`
    width: 100%;

`
const Wrapper = styled.div`
    width: 90%;
    /* height: 20vh; */
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    
    box-shadow: 0 0 16px -8px rgba(0,0,0,0.68);
    /* -webkit-box-shadow: 0 0 16px -8px rgba(0,0,0,0.68) */
    .shareImgContainer{
        padding: 0 20px 10px 20px;
        position: relative;
    }
    .shareImg{
        width: 100%;
        object-fit: cover;
    }
    .shareCancelImg{
        position: absolute;
        top: 0;
        right: 20px;
        font-size: 30px;
        cursor: pointer;
        opacity: 0.7;
    }
`
const ShareOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ShareOption = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;
    .share-icon{
        margin-right: 8px;
        font-size: 20px;
    }
    .share-text{
        font-size: 15px;
        font-weight: 500;
    }
    label{
        cursor: pointer;
    }
`

export default Share
