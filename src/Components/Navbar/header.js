import './header.css'
import { Link } from 'react-router-dom'
import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../Pages/CSS/temp.css'
// import { SlArrowDown } from "react-icons/sl";
import { FaMobileScreen } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
// import { FaCircle } from "react-icons/fa";
import logo from '../Navbar/link.png'
function Header(){
    const navigate=useNavigate()
    const [supportDropdownVisible, setSupportDropdownVisible] = useState(false);
    const [usdDropdownVisible, setUsdDropdownVisible] = useState(false);
    const [supportArrowIcon, setSupportArrowIcon] = useState('▲'); // Up arrow
    const [usdArrowIcon, setUsdArrowIcon] = useState('▲');
function handlesupport(){
  setSupportDropdownVisible(!supportDropdownVisible);
setUsdDropdownVisible(false)
setSupportArrowIcon(supportDropdownVisible ? '▲' : '▼');
    setUsdArrowIcon('▲');
}
function handleUsd() {
    setUsdDropdownVisible(!usdDropdownVisible);
    // Close support dropdown when USD is opened
    setSupportDropdownVisible(false);
    setUsdArrowIcon(usdDropdownVisible ? '▲' : '▼');
    setSupportArrowIcon('▲');
  }

  const [isSignInVisible, setSignInVisible] = useState(false);

  const[signup,setsign]=useState(false)
  
  
    const toggleSignIn = () => {
      setSignInVisible(!isSignInVisible);
      setsign(false)
    };
   const Togglesignup=()=>{
    setsign(!signup);
    setSignInVisible(false)
  
   }

return(<>
    <div className='top-container'>
    <div className='left-header'>
        <img src={logo} alt="not" width="100px" height="30px" onClick={()=>navigate('/')}/>
        {/* <h1>h<FaCircle style={{width:"20px",height:"20px",color:"orangered"}}/>twire</h1> */}
        <div className='headerLink'>
            <Link className='Link' to='/jobsearch'>Job search</Link>
            <Link className='Link' to='/locum'> Locum Availability</Link>
            {/* <Link className='Link' to='/flights'>Flights</Link>
            <Link className='Link' to='/vacations'>Vacations</Link> */}
            
        </div>
    </div>
    <div className='right-header'>
        <div className='right-header-link'>
        <p>Get the app<FaMobileScreen/></p>
        <div className='dropdown'>
            <p onClick={handlesupport} className='dropdown-btn'>Support{supportArrowIcon}</p>
            
            {
              supportDropdownVisible? 
              <div className='dropdown-content'>
              <p><Link className="dropdwn-lnk" to='/mocktest'>Feedback</Link></p>
                      <p><Link className="dropdwn-lnk" to='/vediotutorial'>Help Center</Link></p>
                      <p><Link className="dropdwn-lnk" to='/vediotutorial'>Message us</Link></p>
              </div>:"" 
            }
       
        </div>
        <div className='dropdown'>
        <p className='dropdown-btn' onClick={handleUsd}>USD{usdArrowIcon}</p>
        {
            usdDropdownVisible? <div className='dropdown-content'>
            <p> <Link className="dropdwn-lnk" to='/mocktest'>USD- US Dollar</Link></p>
            </div>:""
        }
       
        </div>
      
       <div className='auth-btns'>
        <button id='login' 
        onClick={()=>{
            document.getElementById('login').style.backgroundColor="orangered"
        document.getElementById('signup').style.backgroundColor=""
        document.getElementById('login').style.color="white"
        document.getElementById('signup').style.color="orangered"
        setSignInVisible(!isSignInVisible);
        setsign(false)
        }}>sign in</button>
        <button id='signup'  onClick={()=>{
            document.getElementById('signup').style.backgroundColor="orangered"
        document.getElementById('login').style.backgroundColor=""
        document.getElementById('signup').style.color="white"
        document.getElementById('login').style.color="orangered"
        setsign(!signup);
        setSignInVisible(false)
        }} >
            Sign up</button>
            
       </div>
    </div>
    </div> 
    </div>
    <div>
    <div style={{textAlign:"center"}}>
      {isSignInVisible && (
  <div className="div3">
    <p className="p1">
      <b>Sign In</b>
    </p>
    <div style={{ width: "440px", marginTop: "-1px" }}>
      <div style={{ margin: "5px" }}>
       <i className="fa fa-google" aria-hidden="true" id="id2"></i> 
        <input type="text" placeholder="Google" className="input11"/>
      </div>
      <hr className="hr1" />
      <p style={{ textAlign: "center" }}>or</p>
      <hr className="hr1" />
      <input type="gmail" placeholder="email" className="input11"/>
      <br/><br/>
      <input type="password" placeholder="password" className="input11" />
      <br/>
      <br/>
      <div style={{ margin: "5px" }}>
        <input type="checkbox" style={{ width: "30px", height: "15px" }} />
        <span style={{ marginLeft: "10px" }}>Remember Me</span>
      </div>
      <br/>
      <div>
        <button className="button2">Signin</button>
      </div>
      <br/>
      <a href="#" className="anchor">Forget Password</a>
      <hr/>
      <span style={{ margin: "5px" }}>Don't Have an account <button className="button3"onClick={Togglesignup}>Create one</button></span>
    </div>
  </div>
  
)}
 {
        signup&&
        (
         
<div  className="div4">
    <p className="create">
      <b>Create an account</b>
    </p>
    <div >
    <p className="p2">&#x2713;<span style={{color:"black"}}>Get faster bookings</span></p>
    <p className="p2">&#x2713;<span style={{color:"black"}}>Add more nights or a room to your stay</span></p>
    <p className="p2">&#x2713;<span style={{color:"black"}}>Easy access to all your trip info</span></p>
      </div>
    <div style={{ width: "440px", marginTop: "-1px" }}>
      <div style={{ margin: "5px" }}>
      
        <input type="text" placeholder="Google" style={{ textAlign: "center", width: "400px", height: "30px", position:"relative"}} />
        <FcGoogle  style={{width:"30px",height:"30px",position:"absolute",right:"247px",top:"150px"}}/>
      </div>
      <hr style={{ width: "400px", margin: "5px" }} />
      <p style={{ textAlign: "center" }}>or</p>
      <hr style={{ width: "400px", margin: "5px" }} />
      <input type="text" placeholder="firstname" className="first" />

      <br/><br/>
      <input type="text" placeholder="Lastname" className="first" />
      <br/><br/>
      <input type="gmail" placeholder="email" className="first" />
      <br/><br/>
      <input type="password" placeholder="password" className="first" />
      <p style={{margin:"10px"}}>(6-30 characters, case-sensitive, no spaces)</p>
      <p style={{margin:"10px"}}>By creating a Hotwire account, I acknowledge that I have read and accept the Privacy policy</p>

     <hr/>

      
      <br/>
      <div>
        <button className="button5">Signup</button>
      </div>
      <br/>
     
      <hr/>
      <span style={{ margin: "5px" }}>Already Have an account <button className="button6" onClick={toggleSignIn}>Signin</button></span>
    </div>
  </div>

         
        )
      }
</div>
    </div>
    </>)
}
export default Header



