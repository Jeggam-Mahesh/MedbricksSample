import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../Logo.png";
import './temp.css'

export function Routing() {
 
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
 
  
  return (
    <div className="div1">
      <div className="div2">
        <button
        className="button1"
          onClick={toggleSignIn}>
          Signin
        </button>
      </div>
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
</div>

<div>
  <button className="button4"onClick={Togglesignup}> Signup</button>
</div>

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
       <i className="fa fa-google" aria-hidden="true" id="id3"></i> 
        <input type="text" placeholder="Google" style={{ textAlign: "center", width: "400px", height: "30px" }} />
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
    
  );
}
export default Routing