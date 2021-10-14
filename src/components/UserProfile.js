import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
// import Share from "./Share"
// import Post from "./Post"
import Feed from './Feed'
import axios from "axios"
import { useParams } from 'react-router'
import Navbar from '../components/Navbar'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import {GrAdd, GrSubtract} from "react-icons/gr"
import { PostContext } from '../context/PostContext'
import Post from './Post'


const UserProfile = () => {
    const [user, setUser] = useState({});
    const username = useParams().username;
    // console.log(username)

    const { dispatch} = useContext(PostContext);

    const [friends, setFriends] = useState([]);
    
    const {user:currentUser} = useContext(AuthContext);
    const [posts, setPosts] = useState([])


    
    useEffect(()=>{
        const fetchUser = async () => {
            const res = await axios.get(`https://aqueous-reef-25837.herokuapp.com/api/users?username=${username}`);
            setUser(res.data);
        };
        fetchUser();
    }, [username]);
    useEffect(()=>{
        const fetchPosts = async ()=>{
                       const res = await axios.get("https://aqueous-reef-25837.herokuapp.com/api/posts/timeline/" + currentUser._id );
                       const updatedPosts = res.data.filter((post)=>post.userId === user._id)
                       const newPost = updatedPosts.sort((p1, p2) => {
                            return new Date(p2.createdAt) - new Date(p1.createdAt);
                        })
            setPosts(newPost);
        };
        fetchPosts();

    }, [user._id, currentUser._id]);

    const [followed, setFollowed] = useState(currentUser.followings.includes(user._id));
    
    useEffect(()=>{
        setFollowed(currentUser.followings.includes(user._id));
    }, [currentUser, user._id])

    useEffect(()=>{
        const getFriends = async () => {
            try {
               const friendList = await axios.get("https://aqueous-reef-25837.herokuapp.com/api/users/friends/" + user._id);
               setFriends(friendList.data);
               dispatch({type: "UPDATE_FRIENDS", payload: friends});
            } catch (err) {
                console.log(err);
            }
        }
        getFriends();
    }, [user._id, friends, dispatch])

    const handleFollow = async () => {
            try {
                if(followed){
                    await axios.put("https://aqueous-reef-25837.herokuapp.com/api/users/" + user._id + "/unfollow", {userId: currentUser._id})
                    setFollowed(false);
                }else{
                    await axios.put("https://aqueous-reef-25837.herokuapp.com/api/users/" + user._id + "/follow", {userId: currentUser._id})
                    setFollowed(true);
                }
            } catch (err) {
                console.log(err)
            }
    }

    return (
        <User>
        <Navbar />
            <Top>
                <Left>
                    <ProfilePic src={user.profilePicture ? user.profilePicture :  (user.gender === "Male" ? 
                                    "https://deejayfarm.com/wp-content/uploads/2019/10/Profile-pic.jpg"
                                     :"https://images.assetsdelivery.com/compings_v2/thesomeday123/thesomeday1231712/thesomeday123171200008.jpg") 
                                }  
                                alt="DP"  />
                    <h4 style={{textTransform: "capitalize"}}>{user.name}</h4>
                   
                </Left>
                <Right>
                    <UserInfo>
                    {user.username !== currentUser.username && (
                        <button className="follow-btn" onClick={handleFollow}>
                           {followed ? "UNFOLLOW" : "FOLLOW"}
                           {followed ? <GrSubtract /> : <GrAdd />}
                        </button>
                    )}
                        <h3>Bio: </h3>
                        <p>{user.desc}</p>
                        <h3>City: </h3>
                        <p>{user.city}</p>
                        <h3>Education:</h3>
                        <p>{user.education}</p>
                        <h3>Relationship:</h3>
                        <p>{user.relationship===1 ? "Single" 
                        : user.relationship===2 ? "Married"
                        : user.relationship===3 ? "Complicated" : "-" }</p>
                    </UserInfo>
                </Right>
            </Top>
            <hr />
            <Bottom>
            <h3>Friends</h3>
                <BottomRight>
                    {!friends && <h5>No Friends to show</h5>}
                    {friends.map(friend=> {
                    return  <div className="friend">
                            <Link className="friend" to={`/profile/${friend.username}`} style={{textDecoration: "none"}}>
                                <img src={friend.DP ? friend.DP 
                                :  (friend.gender === "Male" ? 
                                    "https://deejayfarm.com/wp-content/uploads/2019/10/Profile-pic.jpg"
                                     :"https://images.assetsdelivery.com/compings_v2/thesomeday123/thesomeday1231712/thesomeday123171200008.jpg")  
                                } 
                                alt="DP" />
                                <span style={{textTransform: "capitalize"}}>{friend.Name}</span>
                            </Link>
                            </div>
                })}
                
                </BottomRight>
                
                <BottomLeft>
                    {/* <Share /> */}
                    {/* <Post /> */}
                     <Feed username = {username} />
                     {posts.map((post)=>{
                            return <Post key={post._id} {...post} />
                            })
                        }
                </BottomLeft>
            </Bottom>
        </User>
    )
}
const User = styled.div`

`
const Top = styled.div`
    height: 40vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 50px auto;
`
const Left = styled.div`
    h4{
        margin-left: 70px;
    }
`
const Right = styled.div`
`
const BottomRight = styled.div`
        width: 80vw;
        overflow: hidden;
        height: 20vh;
        margin-bottom: 30px;
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: space-between;
        margin-left: 30px;
        margin-right: 30px;
        .friend{
            display: flex;
            flex-direction: column;
            /* align-items: center; */
            height: 100px;
        img{
            width: 80px;
            height: 80px;
            margin-bottom: 20px;
        }
        span{
            margin-bottom: 40px;
        }
    }
`
const Bottom = styled.div`
display: flex;
flex-direction: column;
margin-left: 40px;
h3{
    margin-left: 40vw;
}
/* align-items: center; */
/* justify-content: space-around; */
`
const BottomLeft = styled.div`

`
const UserInfo = styled.div`
    .follow-btn{
        width: 140px;
        height: 40px;
        cursor: pointer;
        background-color: goldenrodyellow;
        color: blue;
        outline: none;
        border: none;
        font-weight: 800;
        line-height: 30px;
        margin-bottom: 30px;
    }
    button:hover{
        background-color: lightblue ;
        color: black;
    }
    
`
const ProfilePic = styled.img`
    border-radius: 50%;
    height: 200px;
    width: 200px;
    
`


export default UserProfile
