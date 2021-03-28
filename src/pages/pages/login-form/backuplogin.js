import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './login.css'
import pic1 from './pic1.svg';
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
            // implement go to dashboard here
            goToPage('/dashboard')
        } else {
            // stay on login page
            setMessage("wrong username or password")
        }

    }

    return (

        <div className="maindiv">

            <div className="topdiv">
                <p className="topdiv-text"> WELCOME TO ETERNAL GEMS 4LESS ONLINE SHOP (NatioWide Delivery On Fees)</p>
            </div>

            <div className="bottomdiv">

                <div className="leftbottomdiv">
                    <img src={pic1} className="pic1" alt="pic1img" />
                </div>

                <div className="rightbottomdiv">

                    <div className="formdiv">
                    
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