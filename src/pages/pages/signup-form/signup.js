import { Link } from 'react-router-dom';
import './signup.css'
import pic2 from './pic2.svg';
import pic from'./avarta2.png';

function Signup() {
    

    return (

        <div className="maindiv">

        <div className="topdiv">

        </div>

        <div className="bottomdiv">

        <div className="leftbottomdiv">
        
        <img src={pic2} className="pic2" alt="pic2img"/>
     </div>

        <div className="rightbottomdiv">


        <div className="formdiv">
         
        {<div class="pic">
                    <img src={pic} className="avatar1" alt="avatarimg" />
         </div> }


          </div>

            

          <form>
            <div>
                <label className="form-group1">Username</label>
                <input type="text" className="form-control1"/>
            </div>

            <div>
                <label  className="form-group2">Email</label>
                <input type="email" className="form-control2"/>
            </div>

            <div>
                <label  className="form-group3">Password</label>
                <input type="password" className="form-control3"/>
        
            </div>

            <div>
                <label  className="form-group4">Confirm Password</label>
                <input type="password" className="form-control4"/>
            </div>

            <button className="ss">Signup</button>        
            <Link to="/" className="a">Already have an account?  </Link> 
        </form>
          </div>
              
        </div>
       
       </div>
    )
}


export default Signup;