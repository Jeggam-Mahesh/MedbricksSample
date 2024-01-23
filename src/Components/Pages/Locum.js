import React from 'react'
import './CSS/locum.css'
// import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'
function Locum() {
    // const navigate=useNavigate()
    const handleRegistration = async () => {
        try {
          // Your registration logic here
    
          // Assuming registration is successful
          toast.success('Registration successful!');
        } catch (error) {
          // Handle registration error
          toast.error('Registration failed. Please try again.');
        }
      };
    return (
        <>
        
       <div className='locum-reg'>
       <h1>Locum Registration</h1>
        <form>
<p className='para'><label for="clinician">Clinician Type</label>

<select  name='clinician_type'    style={{border:"1px solid grey", textAlign:"left",height:"39px"}}>
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
</p>
<p className='para'><label for="clinician">Speciality</label>
{/* <input type='text' id="Speciality" placeholder='Speciality' required/> */}
<select id="speciality"   style={{border:"1px solid grey", textAlign:"left", padding:"5px",height:"40px"}} name='speciality' autoComplete='off' >
          <option>Select a Speciality</option>
          <option>Anesthesiology</option>
          <option>Cardiology</option>
          <option>Dermatology</option>
          <option>Emergency Medicine</option>
          <option>Endocrinology</option>
          <option>Gastroenterology</option>
          <option>General Surgery</option>
          <option>Hematology</option>
          <option>Infectious Disease</option>
          <option>Internal Medicine</option>
          <option>Nephrology</option>
          <option>Neurology</option>
          <option>Obstetrics and Gynecology</option>
        <option>Ophthalmology</option>
        <option>Orthopedic Surgery</option>
        <option>Otolaryngology (ENT)</option>
        <option>Pediatrics</option>
        <option>Plastic Surgery</option>
        <option>Psychiatry</option>
        <option>Pulmonology</option>
        <option>Radiology</option>
        <option>Rheumatology</option>
        <option>Urology</option>
        <option>Vascular Surgery</option>
        <option>Allergy and Immunology</option>
        <option>Physical Medicine and Rehabilitation</option>
        <option>Critical Care Medicine</option>
        <option>Pain Medicine</option>
        <option>Sports Medicine</option>
        <option>Nuclear Medicine</option>
        <option>Medical Genetics</option>
        <option>Pathology</option>
        <option>Forensic Medicine</option>
        <option>Neonatology</option>
        <option>Geriatrics</option>
        <option>Infectious Disease</option>
        <option>Medical Oncology</option>
        <option>Pediatric Surgery</option>
        <option>Sleep Medicine</option>
        <option>Transplant Surgery</option>
        <option>Nephrology</option>
        <option>Colorectal Surgery</option>
        <option>Gynecologic Oncology</option>
        <option>Interventional Radiology</option>
        <option>Reproductive Endocrinology and Infertility</option>
        <option>Palliative Medicine</option>
        <option>Clinical Neurophysiology</option>
        <option>Hospice and Palliative Medicine</option>
        <option>Pediatric Hematology-Oncology</option>
        <option>Addiction Medicine</option>
        </select>
</p>
<p className='para'><label>Photo</label><input type='file'placeholder='upload image'required/></p>
<div>
<label ><b>Name</b></label>
<p className='para'>

<label for="fname">First Name</label>
<input type='text' id='fname' placeholder='First name' required/></p>
<p className='para'><label for="mname">middle Name</label>
<input type='text' id='mname' placeholder='Middle name'/></p>
<p className='para'><label for="lname">Last Name</label>
<input type='text' id='lname' placeholder='Last name' required/></p>

<p className='para'><label for="tittle">Tittle</label>
{/* <input type='text' id='tittle' placeholder='Mr/Ms/Mrs' required/> */}
<select style={{width:"300px",height:"35px"}}>
          <option>Select title</option>
          <option>mr</option>
          <option>ms</option>
          <option>mrs</option>
        </select>
</p>

</div>
<p className='para'><label for="dob"><b>DOB</b></label>
<input type='date' id='dob' placeholder='date of birth' required/></p>

<div>
<label ><b>Locum Contact</b></label><br></br>
<p className='para'><label for="mobilenumber">Mobile</label>
<input type='tel' id='mobilenumber' placeholder='mobile number ' required/></p>
<p className='para'><label for="homenumber">Home </label>
<input type='tel' id='homenumber' placeholder='Home number' required/></p>
<p className='para'><label for="mail">Email</label>
<input type='email' id='mail' placeholder='email' required/></p>
</div>

<label ><b>CAQHCredentialing</b></label><br></br>

<p className='para'><label for="ref">Reference Number</label>
<input type='number' id='ref' placeholder='Reference Number' required/></p>

<div>
<label ><b>Other Credentialing</b></label><br></br>
<p className='para'><label for="agency">Name of Agency</label>
<input type='text' id='agency' placeholder="Name of Agency" required/></p>
<p className='para'><label for="other_ref">Reference Number</label>
<input type='number' id='other_ref' placeholder='Reference Number' required/></p>
<p className='para'><label>Contact for Other Credentialing Service</label>
<input type='tel' placeholder='contact number' required/></p>
</div>
<label ><b>BoardCertification</b></label><br></br>
<p className='para'><label >Reference Number</label>
<input type='number' placeholder='Reference Number' required /></p>
<label ><b>Insurance</b></label>
<br></br>
<p className='para'>
<label >Notice</label>
<input type='number' placeholder='notice' required/></p>

<div>
<label><b>Profile Docs</b></label><br>
</br>
<p className='para'><label for='doctype'>Doc Type</label><input type='text' id='doctype' placeholder='Doc Type' required /></p>
<p className='para'><label for='docnum'>Doc Number</label><input type='text' id='doctnum' placeholder='Doc Number' required /></p>
<p className='para'><label for='doctittle'>Tittle</label><input type='text' id='doctittle' placeholder='Doc Tittle' required/></p>
<p className='para'><label for='doc'>Document:</label><input type='file' id='doc' placeholder='Doc' required /></p>
</div>
<input style={{color:"white",backgroundColor:"orangered", border:"1px solid orangered", width:"120px"}}
onClick={handleRegistration} type='submit' value="submit"/>
</form>
       </div>
        {/* <CubePresentation/> */}
        <ToastContainer/>
        </>
    )
}

export default Locum
