import React, {useState, useEffect, useContext, useRef} from 'react'
import styled from 'styled-components'
import {AiTwotoneLike, AiOutlineLike} from "react-icons/ai"
import axios from "axios"
import {format} from "timeago.js"
import {Link} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'


const Post = (post) => {
    // const [posts, setPosts] = useState([])
    const [user, setUser] = useState({})
    const {user: currentUser } = useContext(AuthContext);
    const postOwner = post.userId;
    const currentUserId = currentUser._id;
    const desc = useRef();
    const [descrip, setDescrip] = useState(post.desc);
    const [isEdit, setIsEdit] = useState(false);
    
    // for likes
    const [likenum, setLikenum] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)

    // for cloudinary
    const [imageIds, setImageIds] = useState();
    const loadImages = async () => {
        try {
            const res = await fetch('/');
            const data = await res.json();
            setImageIds(data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        loadImages();
    }, []);

    useEffect(()=>{
        setIsLiked(post.likes.includes(currentUser._id))
    },[post.likes, currentUser._id])
    
    const handleLike = ()=>{
        try {
            axios.put("/posts/" + post._id + "/like", {userId: currentUser._id})
        } catch (err) {
            console.log(err);
        }
        if(isLiked) setLikenum(likenum-1)
        else setLikenum(likenum+1)
    }
   
    useEffect(()=>{
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`)
            setUser(res.data)
        };
        fetchUser();
    }, [post.userId]);



    const handleEdit = async () => {
        
        await axios.put("/posts/" + post._id, { userId: currentUser._id, 
                                                desc: desc.current.value,
                                                img: post.img });
        window.location.reload();
    }
    const handleDelete = async () => {
        console.log(post.userId);
        console.log(currentUser._id);
        console.log(post._id)
        await axios.delete(`/posts/${post._id}`, {userId: currentUser._id});
        window.location.reload();
    }

    return (
         <PostContainer>
             <Wrapper>
                <Top>
                    <TopLeft>

                    <Link to={`profile/${user.username}`}>
                        <img 
                        src={user.profilePicture ? user.profilePicture : 
                        (user.gender === "Male" ? 
                        "https://deejayfarm.com/wp-content/uploads/2019/10/Profile-pic.jpg"
                        :"https://images.assetsdelivery.com/compings_v2/thesomeday123/thesomeday1231712/thesomeday123171200008.jpg") } 
                        alt="profile-pic" />
                    </Link>

                        <span className="username">{user.name}</span>
                        <span className="time">{format(post.createdAt)}</span>
                    </TopLeft>
                    {postOwner === currentUserId && <TopRight >               
                            {!isEdit && <button className="option-btn" onClick={()=>setIsEdit(true)}>Edit Post</button>}
                            {!isEdit && <button className="option-btn" onClick={handleDelete}>Delete Post</button>}
                    </TopRight>}
                </Top>
                <Center>
                    {!isEdit && <span className="text-post">{post.desc ? post.desc : "" } </span>}
                    {isEdit && <input ref={desc} value={descrip} onChange={(e)=>setDescrip(e.target.value)}  />}
                    {post.img && <img src={post.img} alt="post-img" />}

                </Center>
                <Bottom>
                    <BottomLeft>
                        <Like>
                            {isLiked? <AiTwotoneLike className="icon-click" 
                            onClick={()=>{
                                handleLike(); 
                                setIsLiked(!isLiked);}} 
                            />: <AiOutlineLike className="icon-click" 
                            onClick={()=>{
                                handleLike(); 
                                setIsLiked(!isLiked);}} 
                            />}
                            <span>{likenum} people liked this</span>
                            
                        </Like>                      
                    </BottomLeft>
                    <BottomRight>
                        {isEdit && <button onClick={() => handleEdit()}>Save</button>}
                        {isEdit && <button onClick={() => setIsEdit(false)}>Cancel</button>}
                    </BottomRight>
                </Bottom>
            </Wrapper>
 

        </PostContainer>
    )
}
const Like = styled.div`
    margin-right: 20px;
    .icon-click{
        cursor: pointer;
    }
`
const BottomLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    span{
        font-size: 20px;
    }
    .icon-click{
        font-size: 30px;
        margin-right: 5px;
    }
`
const BottomRight = styled.div`
    span{
        cursor: pointer;
    }
    button{
        border: none;
        cursor: pointer;
        font-size:15px;
        font-weight: 600;
        margin: 0 7px;
        padding: 6px;
        background-color: pink;
        color: black;
        border-radius: 10px;
    }
`
const TopRight = styled.div`
    margin-right: 10px;
    margin-left: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .option-btn{
        border: none;
        cursor: pointer;
        font-size:15px;
        font-weight: 600;
        margin: 0 7px;
        padding: 6px;
        background-color: pink;
        color: gray;
        border-radius: 10px;
    }
`
const TopLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .time{
        font-size: 15px;
        margin: 0 10px;
    }
    .username{
        font-size: 20px;
        font-weight: 500;
        margin: 0 15px;

    }
    img{
        width: 50px;
        height: 50px;
        border-radius: 50px;
        object-fit: cover;
        cursor: pointer;
        margin-right: 10px;
    }
`
const PostContainer = styled.div`
    width: 100%;
    margin: 30px 10px;

`
const Wrapper = styled.div`
    padding: 20px;
   
    width: 90%;
    border-radius: 10px;
    box-shadow: 0 0 16px -8px rgba(0,0,0,0.68)
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
        object-fit: contain;
        margin: 0;
        width: 100%;
        max-height: 500px;
    }
    span{
        margin: 20px 0;
    }
    .text-post{
        font-size: 20px;
        font-weight: 500;
    }
    input{
        margin: 3vh 0;
        border: 1px solid gray;
        width: 80%;
        font-size: 20px;
        font-weight: 500;
        padding: 2vh 1vh;
    }
    input:focus{
        outline: none;
    }
    
`
const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px auto;
    span{
        font-size: 20px;
        margin-right: 5px;
    }

`

export default Post
