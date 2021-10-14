import React, {useRef, useContext, useState} from 'react'
import styled from 'styled-components'
import { loginCall } from '../apiCalls';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';


const Profile = () => {
    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);
    const [testemail, setEmail] = useState("bsourabh@gmail.com");
    const [testpassword, setPassword] = useState("1234556");
    const [test, setTest] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(test){
            loginCall({email: testemail, 
                password: testpassword}, dispatch )
        }
        if(!test){
            loginCall({email: email.current.value, 
            password: password.current.value}, dispatch )
        }
   }
    
    return (
        <Login>
            <Wrapper>
                <Left>
                    <h3>SocialGen</h3>
                    <span>The next gen Social Network</span>
                </Left>
                <Right>
                <form onSubmit={handleSubmit} >
                        <LoginBox>
                        
                            {!test && <input type="email" required placeholder="Email" ref={email} />}
                            {!test && <input type="password" 
                            required 
                            minLength="6"
                            placeholder="password" ref={password} />}
                            {test && <input type="email" value={testemail} required placeholder="Email" ref={email} />}
                            {test && <input type="password" value={testpassword}
                            required 
                            minLength="6"
                            placeholder="password" ref={password} />}
                            <button className="login-button" type="submit" disabled={isFetching} 
                            onClick={()=>setTest(true)}>
                                { isFetching ? "loading..." : "Log In With Test Credentials" }
                           </button>
                           <button className="login-button" type="submit" disabled={isFetching}>
                                { isFetching ? "loading..." : "Log In" }
                           </button>
                           <span>Forgot Password?</span>
                           <Link to="/register">
                                <button className="account-button">Create a New Account</button>
                           </Link>
                            
                        </LoginBox>
                </form>
                </Right>
            </Wrapper>
        </Login>
    )
}
const Login = styled.div`
        width: 100vw;
        height: 100vh;
        background-color: lightgoldenrodyellow;
        display: flex;
        align-items: center;
        justify-content: center;
`
const Wrapper = styled.div`
        width: 70%;
        height: 70%;
        display: flex;
`
const Left = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h3{
            font-size: 50px;
            color: #1775ee;
            font-weight: 800;
            margin-bottom: 50px;
        }
        span{
            font-size: 30px;

        }
`
const Right = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
`
const LoginBox = styled.div`
        height: 300px;
        padding: 20px;
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        input{
            height: 40px;
            border-radius: 10px;
            border: 1px solid gray;
            font-size: 18px;
            padding-left: 20px;

        }
        input:focus{
            outline: none;
        }
        .login-button{
            align-self: center;
            width: 100%;
            height: 50px;
            border-radius: 10px;
            border: none;
            background-color: #1775ee;
            color: white;
            font-size: 20px;
            font-weight: 600;
            cursor: pointer;
        }
        .login-button:hover{
            background-color: silver;
            color: #1775ee;
        }
        .login-button:disabled
            {
                cursor: not-allowed;
            }
        span{
            text-align: center;
            color: tomato;
            font-size: 18px;
            cursor: pointer;
            font-weight: 600;
        }
        .account-button{
            width: 100%;
            height: 30px;
            align-self: center;
            border-radius: 10px;
            border: none;
            background-color: #42b72a;
            color: white;
            font-size: 20px;
            font-weight: 500;
            cursor: pointer;
        }
        .account-button:hover{
            background-color: white;
            color: #42b72a;
        }
` 

export default Profile
