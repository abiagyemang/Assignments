import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './login.css'
import pic1 from './pic1.svg'
import pic from './avarta2.png';

function Login() {
    let history = useHistory()


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    function goToPage(path) {
        history.push(path)
    }
    function updateUsername(e) {
        setUsername(e.target.value)
    }
    function updatePassword(e) {
        setPassword(e.target.value)
    }

    function submit(e) {
        e.preventDefault();

        if (username == 'Nanabena' && password == 'Abena1234@') {
            
            goToPage('/dashboard')
        } else {
        
            setMessage("wrong username or password")
        }

    }

    return (
        <div className="maindiv">

            <div className="topdiv">
    
            </div>

            <div className="bottomdiv">

                <div className="leftbottomdiv">
                    <img src={pic1} className="pic1" alt="pic1img" />
                </div>

                <div className="rightbottomdiv1">

                    <div className="formdiv1">

                    {<div class="pic">
                    <img src={pic} className="avatar2" alt="avatarimg" />
                    </div> }


                  <form >
                    {message && <h1 style={{ color: "red" }}>{message}</h1>}
                    <div>
                        <label className="form-group6">Username</label>
                        <input type="text" onChange={updateUsername} className="form-control6" />
                    </div>

                        <label className="form-group7">Password</label>
                    <div>
                        <input type="password" onChange={updatePassword} className="form-control7" />
                    </div>

                    
                    <button className="login-btn" onClick={submit}>Login<br></br></button>
                    <button className="signup-btn" onClick={() => goToPage('/signup')}> Signup</button>

                    <div className="footer">
                        <a href="#">FORGOT PASSWORD</a>
                    </div>

                    </form>

                    </div>

                </div>

            </div>

            {/* <div class="login">
                    <img src={pic} className="avatar" alt="avatarimg" />
                    <h1>Login Here</h1>

                </div>

                <form>
                    {message && <h1 style={{ color: "red" }}>{message}</h1>}
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" onChange={updateUsername} className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={updatePassword} className="form-control" />
                    </div>
                    <button className="login-btn" onClick={submit}>Login<br></br></button>
                    <button className="signup-btn" onClick={() => goToPage('/signup')}> Signup</button>

                    <div className="footer">
                        <a href="#">FORGOT PASSWORD</a>
                    </div>
                </form> */}


        </div>

    )
}


export default Login;