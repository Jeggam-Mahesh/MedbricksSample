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
           setData('job')}} id='hotel-btn'>
         
           <IoBagRemoveSharp size={30}/>
          <p>Job</p>
          </div>
          <div onClick={()=>{
             document.getElementById('hotel-btn').style.borderTop="none"
            document.getElementById('car-btn').style.borderTop="2px solid orangered"
            setData('locum')}} id='car-btn'>
         
          <IoPersonAdd size={30} />
          <p>Locum Availability </p>
          </div>
          
          </div>
          {
              data==="job"?
                  <div className='hotel'>  
             <div>
               <p><b>Facility Type:</b></p>
             <select   style={{border:"1px solid grey", textAlign:"left", padding:"5px",width:"320px",height:"40px"}}>
               <option>Select a Facility Type</option>
               <option>Hospitals</option>
        <option>Clinics</option>
        <option>Nursing Homes</option>
        <option>Ambulatory Surgery Centers</option>
        <option>Mental Health Facilities</option>
        <option>Home Health Care Agencies</option>
        <option>Diagnostic Imaging Centers</option>
        <option>Dental Practices</option>
        <option>Optometry Clinics</option>
        <option>Pharmacies</option>
        <option>Hospices</option>
        <option>Blood Banks</option>
        <option>Outpatient Rehabilitation Centers</option>
        <option>Community Health Centers</option>
        <option>Maternity Hospitals</option>
        <option>Cancer Treatment Centers</option>
        <option>Pediatric Clinics</option>
        <option>Long-term Care Facilities</option>
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
