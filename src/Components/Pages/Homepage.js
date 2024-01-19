import React from 'react'

import './CSS/Homepage.css'
import { IoPersonAdd } from "react-icons/io5";
import { useState } from 'react'
// import { VscAccount } from "react-icons/vsc";
import { IoLocationSharp } from "react-icons/io5";
import { IoBagRemoveSharp } from "react-icons/io5";

import { useNavigate } from 'react-router-dom'
function Homepage() {
  let navigate=useNavigate();
const [data,setData]=useState('job')
// const [adult,setAdult]=useState(1)
// const [Room,setRoom]=useState(1)
// const [children,setChildren]=useState(0)
//    const [droptoggle,setDroptoggle]=useState(false)
//    const [roomtoggle,setRoomtoggle]=useState(false)
       return (<>
       <div className='backgrd-image'>
        <div className='find-main-container'>
        
        <div className='find-container'>
          <div onClick={()=>{ 
             document.getElementById('car-btn').style.borderTop="none"
            document.getElementById('hotel-btn').style.borderTop="2px solid orangered"
           setData('hotel')}} id='hotel-btn'>
         
           <IoBagRemoveSharp size={30}/>
          <p>Job</p>
          </div>
          <div onClick={()=>{
             document.getElementById('hotel-btn').style.borderTop="none"
            document.getElementById('car-btn').style.borderTop="2px solid orangered"
            setData('car')}} id='car-btn'>
         
          <IoPersonAdd size={30} />
          <p>locum</p>
          </div>
          
          </div>
          {
              data==="job"?
//               <div className='hotel'>  
//               <p style={{textAlign:"left"}}><b>Destination</b></p>
//               <div style={{position:"relative"}} >
//                <IoLocationSharp style={{position:"absolute",top:"5px",width:"30px", height:"30px", zIndex:222 }}/> <input type="text" placeholder="Where would you like to stay" style={{width:"300px",height:"40px",textIndent:"40px",fontSize:"17px"}}/>
                
//               </div>
//               <div style={{display:"inline-block", marginRight:"20px"}}>
//           <p><b>Check-In</b></p>
//           <input type="date" style={{width:"140px", height:"38px", fontSize: "17px"}}/>
//       </div>
//       <div style={{display:"inline-block"}}>
//           <p><b>Check-Out</b></p>
//           <input type="date" style={{width:"140px", height:"38px", fontSize: "17px"}}/>
//       </div>
//       <div>
//         <p style={{textAlign:"left"}}><b>Guests</b></p>
//       <div style={{border:"1px solid grey", textAlign:"left", padding:"5px"}}
//       onClick={()=>setRoomtoggle(!roomtoggle)}>
//         <VscAccount style={{width:"30px",height:"30px"}}/>
//       {`${Room}Room,${adult} Adults,${children} Childrens`} </div>
// {
//     roomtoggle? <div className='room-info-container'>
//     <p className='rooms-info'>{Room}Room <span >
//         <button onClick={()=>{
//             if(Room>1)
//             setRoom(Room-1)}}
//          style={{marginRight:"10px"}}>-</button > <button onClick={()=>setRoom(Room+1)}>+</button></span></p>
//     <p className='rooms-info'>{adult}Adult<span><button onClick={()=>{if(adult>1)setAdult(adult-1)}} style={{marginRight:"10px"}}>-</button> <button onClick={()=>setAdult(adult+1)}>+</button></span></p>
//     <p className='rooms-info'>{children}Children(2-11 years)<span><button onClick={()=>{if(children>=1)setChildren(children-1)}} style={{marginRight:"10px"}}>-</button> <button onClick={()=>setChildren(children+1)}>+</button></span></p>
//     <button style={{backgroundColor:"orangered",color:"white",border:"1px solid orangered",borderRadius:"40px", padding:"10px",marginLeft:"270px"}} onClick={()=>setRoomtoggle(!roomtoggle)}>Done</button>
    
//           </div> :""
// }
// <p> <button
// onClick={()=>navigate('/hotelsearch')}
//  style={{border:"1px solid orangered",marginTop:"10px",borderRadius:"10px",backgroundColor:'orangered',color:"whitesmoke",width:"300px",height:"50px"}}>
//   Find a hotel</button></p>
        
//       </div>
      
      
//             </div>
//               :<div className='car'>
//              <h3 style={{textAlign:"left"}}>Pick-up location</h3>
//              <p>
//            {/* <img src= {location} width="20px" height="20px" alt='not' style={{position:"absolute",left:"20px",top:"150px"}}/> */}
//            <IoLocationSharp style={{width:"30px", height:"30px",position:"absolute",left:"12px",marginTop:"4px", zIndex:222}}/>
//              <input type='text' style={{width:"300px",height:"40px",textIndent:"40px"}} id='location'  placeholder='Enter city,adress or airport' />
//              </p>
//              <h5 style={{color:"green",textAlign:"left"}} 
//              onClick={()=>setDroptoggle(!droptoggle)} >
//                 Drop off at a different Location?</h5>
//               {droptoggle ?<div className='drop-off-location' >
//              <h3 style={{textAlign:"left"}}>Drop-off location</h3>
//              <p>
//            {/* <img src= {location} width="20px" height="20px" alt='not' style={{position:"absolute",left:"20px",top:"300px"}}/>
//             */}
//             <IoLocationSharp style={{width:"30px", height:"30px",position:"absolute",left:"12px",marginTop:"4px", zIndex:222}}/>
//              <input type='text' style={{width:"300px",height:"40px",textIndent:"40px"}} id='location'  placeholder='Enter city,adress or airport' />
//              </p></div>:""}
//              <h3 style={{textAlign:"left"}}>Pick-up Date</h3>
//              <div>
//              <input type="date" style={{width:"140px", height:"38px", fontSize: "17px"}}/>
//              <input type='time'style={{width:"140px", height:"38px", fontSize: "17px"}} placeholder='pick-up time'/>
//              </div>
//              <h3 style={{textAlign:"left"}}>Drop-off Date</h3>
//              <div>
//              <input type="date" style={{width:"140px", height:"38px", fontSize: "17px"}}/>
//              <input type='time'style={{width:"140px", height:"38px", fontSize: "17px"}}  placeholder='pick-up time'/>
//              </div>
//              <button style={{border:"1px solid orangered",marginTop:"10px",borderRadius:"10px",backgroundColor:'orangered',color:"whitesmoke",width:"300px",height:"50px"}}>Find a Car</button>
//               </div>
                  <div className='hotel'>  
             
             
              

             <div>
               <p><b>Facility Type:</b></p>
               
            
             <select   style={{border:"1px solid grey", textAlign:"left", padding:"5px",width:"320px",height:"40px"}}>
               <option>Select a Facility Type</option>
               <option>Physicians</option>
               <option>Nurses</option>
               <option>Physician Assistants (PAs)</option>
               <option>Dentists</option>
               <option>Pharmacists</option>
               <option>Psychologists</option>
               <option>Occupational Therapists</option>
               <option>Physical Therapists</option>
               <option>Speech-Language Pathologists</option>
               <option>Optometrists</option>
               <option>Ophthalmologists</option>
               <option>Chiropractors</option>
               <option>Podiatrists</option>
             </select>
       
       <p><b>Speciality</b></p>
       
             <select    style={{border:"1px solid grey", textAlign:"left", padding:"5px",width:"320px",height:"40px"}} >
               <option>Select a Speciality</option>
               <option>Anesthesiology
       </option>
               <option>Cardiology
       </option>
               <option>Dermatology
       </option>
               <option>Emergency Medicine
       </option>
               <option>Endocrinology
       </option>
               <option>Gastroenterology
       </option>
               <option>General Surgery
       </option>
               <option>Hematology
       </option>
               <option>Infectious Disease
       </option>
               <option>Internal Medicine
       </option>
               <option>Nephrology
       </option>
               <option>Neurology
       </option>
               <option>Obstetrics and Gynecology
       </option>
       <option>
       Ophthalmology</option>
       <option>
       Orthopedic Surgery
       </option>
       <option>
       Otolaryngology (ENT)
       </option>
       <option>
       Pediatrics
       </option>
       <option>
       Plastic Surgery
       </option>
       <option>
       Psychiatry
       </option>
       <option>
       Pulmonology
       </option>
       <option>
       Radiology
       </option>
       <option>
       Rheumatology
       </option>
       <option>
       Urology
       </option>
       <option>
       Vascular Surgery
       </option>
       <option>Allergy and Immunology</option>
       <option>
       Physical Medicine and Rehabilitation
       </option>
       <option>
       Critical Care Medicine
       </option>
       <option>
       Pain Medicine
       </option>
       <option>
       Sports Medicine
       </option>
       <option>
       Nuclear Medicine
       </option>
       <option>
       Medical Genetics
       </option>
       <option>
       Pathology
       </option>
       <option>
       Forensic Medicine</option>
       <option>
       Neonatology</option>
       <option>
       Geriatrics
       </option>
       <option>
       Infectious Disease
       </option><option>
       Medical Oncology
       </option>
       <option>
       Pediatric Surgery
       </option><option>
       Sleep Medicine
       </option>
       <option>
       Transplant Surgery
       </option>
       <option>
       Nephrology
       </option>
       <option>
       Colorectal Surgery</option>
       <option>
       Gynecologic Oncology</option>
       <option>
       Interventional Radiology</option>
       <option>
       Reproductive Endocrinology and Infertility</option>
       <option>
       Palliative Medicine</option>
       <option>
       Clinical Neurophysiology</option>
       <option>
       Hospice and Palliative Medicine</option>
       <option>
       Pediatric Hematology-Oncology</option>
       <option>
       Addiction Medicine
       </option>
             </select>
       
       <div >
         <p><b>City:</b></p>
                       <input type="text" placeholder="enter your city" style={{width:"300px",height:"40px",textIndent:"40px",fontSize:"17px"}}/>
                      <IoLocationSharp style={{fontSize:"25px",position:"absolute",left:"10px",bottom:"140px"}}/>
                     </div> 
                     <div style={{display:"inline-block", marginRight:"20px"}}>
                 <p><b>From</b></p>
                 <input type="date" style={{width:"140px", height:"38px", fontSize: "17px"}}/>
             </div>
             <div style={{display:"inline-block"}}>
                 <p><b>To</b></p>
                 <input type="date" style={{width:"140px", height:"38px", fontSize: "17px"}}/> 
             </div>
                     
       <br/><br/>
       <div>
       <button style={{width:"300px",height:'35px',backgroundColor:"red",color:"white",borderRadius:"25px",border:"none",margin:"8px"}} onClick={()=>navigate('/jobsearch')}>Find a Job</button>
       </div>  
             </div>
                   </div>
                     :
                     <div className='car'>
                 
                    <div style={{display:"inline-block", marginRight:"20px"}}>
                 <p><b>From</b></p>
                 <input type="date" style={{width:"140px", height:"38px", fontSize: "17px"}}/>
             </div>
                   <div style={{display:"inline-block"}}>
                 <p><b>To</b></p>
                 <input type="date" style={{width:"140px", height:"38px", fontSize: "17px"}}/>
             </div>
             <p><b>Clinician Type:</b></p>
               
            
             <select   style={{border:"1px solid grey", textAlign:"left", padding:"5px",width:"320px",height:"40px"}}>
               <option>Select a Clinician Type</option>
               <option>Physicians</option>
               <option>Nurses</option>
               <option>Physician Assistants (PAs)</option>
               <option>Dentists</option>
               <option>Pharmacists</option>
               <option>Psychologists</option>
               <option>Occupational Therapists</option>
               <option>Physical Therapists</option>
               <option>Speech-Language Pathologists</option>
               <option>Optometrists</option>
               <option>Ophthalmologists</option>
               <option>Chiropractors</option>
               <option>Podiatrists</option>
             </select>
       
       <p><b>Speciality</b></p>
       
             <select    style={{border:"1px solid grey", textAlign:"left", padding:"5px",width:"320px",height:"40px"}} >
               <option>Select a Speciality</option>
               <option>Anesthesiology
       </option>
               <option>Cardiology
       </option>
               <option>Dermatology
       </option>
               <option>Emergency Medicine
       </option>
               <option>Endocrinology
       </option>
               <option>Gastroenterology
       </option>
               <option>General Surgery
       </option>
               <option>Hematology
       </option>
               <option>Infectious Disease
       </option>
               <option>Internal Medicine
       </option>
               <option>Nephrology
       </option>
               <option>Neurology
       </option>
               <option>Obstetrics and Gynecology
       </option>
       <option>
       Ophthalmology</option>
       <option>
       Orthopedic Surgery
       </option>
       <option>
       Otolaryngology (ENT)
       </option>
       <option>
       Pediatrics
       </option>
       <option>
       Plastic Surgery
       </option>
       <option>
       Psychiatry
       </option>
       <option>
       Pulmonology
       </option>
       <option>
       Radiology
       </option>
       <option>
       Rheumatology
       </option>
       <option>
       Urology
       </option>
       <option>
       Vascular Surgery
       </option>
       <option>Allergy and Immunology</option>
       <option>
       Physical Medicine and Rehabilitation
       </option>
       <option>
       Critical Care Medicine
       </option>
       <option>
       Pain Medicine
       </option>
       <option>
       Sports Medicine
       </option>
       <option>
       Nuclear Medicine
       </option>
       <option>
       Medical Genetics
       </option>
       <option>
       Pathology
       </option>
       <option>
       Forensic Medicine</option>
       <option>
       Neonatology</option>
       <option>
       Geriatrics
       </option>
       <option>
       Infectious Disease
       </option><option>
       Medical Oncology
       </option>
       <option>
       Pediatric Surgery
       </option><option>
       Sleep Medicine
       </option>
       <option>
       Transplant Surgery
       </option>
       <option>
       Nephrology
       </option>
       <option>
       Colorectal Surgery</option>
       <option>
       Gynecologic Oncology</option>
       <option>
       Interventional Radiology</option>
       <option>
       Reproductive Endocrinology and Infertility</option>
       <option>
       Palliative Medicine</option>
       <option>
       Clinical Neurophysiology</option>
       <option>
       Hospice and Palliative Medicine</option>
       <option>
       Pediatric Hematology-Oncology</option>
       <option>
       Addiction Medicine
       </option>
             </select>
       
       
                    
       
       <div >
         <p><b>Contact:</b></p>
                       <input type="number" placeholder="enter your number" style={{width:"300px",height:"40px",textIndent:"40px",fontSize:"17px"}}/>
                      
                     </div> 
                     <div >
         <p><b>Board Certification:</b></p>
                       <input type="text" placeholder="Board Certification" style={{width:"300px",height:"40px",textIndent:"40px",fontSize:"17px"}}/>
                      
                     </div> 
       
                    <div>
       <button style={{width:"300px",height:'35px',backgroundColor:"red",color:"white",borderRadius:"25px",border:"none",margin:"8px"}} onClick={()=>navigate('/locumsearch')}>Find availability</button>
       </div>
                     </div>
            }
      </div>
      </div>
      </> )
}

export default Homepage
