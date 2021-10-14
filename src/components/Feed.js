import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import Share from './Share'
import Post from './Post'
// import { Posts } from '../dummyData'
import axios from "axios"
import { AuthContext } from '../context/AuthContext'
// import { PostContext } from '../context/PostContext'

const Feed = ({username}) => {
    // const {post, dispatch} = useContext(PostContext);
    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext);

    useEffect(()=>{
        const fetchPosts = async ()=>{
            // const res = username 
            // ? await axios.get("posts/profile/" + username) 
            // : await axios.get("posts/timeline/" + user._id )
            const res = await axios.get("posts/timeline/" + user._id );
            const newPost = res.data.sort((p1, p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
            // dispatch({type: "UPDATE_POST", payload: newPost})
            setPosts(newPost);
        };
        fetchPosts();
    }, [username, user._id]);

    return (
        <Container>

           
            {user.username === username && <Share />}
            {posts.map((post)=>{
                return <Post key={post._id} {...post} />
                })
            }
        
        </Container>
    )
}

const Container = styled.div`

`
export default Feed
