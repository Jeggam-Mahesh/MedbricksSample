// import React from 'react'
// import './CSS/locum.css'
// // import { useNavigate } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {toast} from 'react-toastify'
// import axios from 'axios';
// function Locum() {
//   const [formData, setFormData] =React.useState({
//            clinicianType: '',
//             speciality: '',
//             firstName: '',
//             middleName: '',
//             lastName: '',
//             title: '',
//             dob:'',
//             mobileNumber: '',
//             homeNumber: '',
//             email: '',
//             caqhReferenceNumber: '',
//             agencyName: '',
//             otherCredentialingRef: '',
//             otherCredentialingContact: '',
//             boardCertificationRef: '',
//             insuranceNotice: '',
//             profileDocType: '',
//             profileDocNumber: '',
//             profileDocTitle: '',
//             profileDocFile:'',
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleRegistration = async () => {
//     try {
//       // Validate the form data here if needed
//       const areAllFieldsFilled = validateForm();
//       if(areAllFieldsFilled){

//         const [year, month, day] = formData.dob.split('-');
//         console.log(year, month, day);
//       const locumreg_data={

//         slcp_ClinicianType:formData.clinicianType,
//         slcp_Speciality: formData.speciality,
//         slcp_Photo: "photo",
//         slcp_Name: {
//           slcp_FirstName:formData.firstName,
//           slcp_LastName: formData.lastName,
//           slcp_MiddleName: formData.middleName,
//           slcp_Title: formData.title,
//         },
//         slcp_DoB: {
//           slcp_MonthofBirth: month,
//           slcp_DayofBirth: day,
//           slcp_YearofBirth: year,
//         },
//         slcp_LocumContact: {
//           slcp_MobileNumber: formData.mobileNumber,
//           slcp_HomeNumber: formData.homeNumber,
//           slcp_Email: formData.email,
//         },
//         slcp_CAQHCredentialing: [
//           {
//             slcp_ReferenceNumber: formData.caqhReferenceNumber,
//           },
//         ],
//         slcp_OtherCredentialing: [
//           {
//             slcp_NameofAgency: formData.agencyName,
//             slcp_ReferenceNumber: formData.otherCredentialingRef,
//             slcp_ContactforOtherCredentialingService: formData.otherCredentialingContact,
//           },
//         ],
//         slcp_BoardCertification: [
//           {
//             slcp_ReferenceNumber: formData.boardCertificationRef,
//           },
//         ],
//         slcp_Insurance: [
//           {
//             slcp_Notice: formData.insuranceNotice,
//           },
//         ],
//         slcp_ProfileDocs: [
//           {
//             slcp_DocType: formData.profileDocType,
//             slcp_DocNumber: formData.profileDocNumber,
//             slcp_Title: formData.profileDocTitle,
//             slcp_Doc: "hello",
//           },
//         ],
//       }
//       console.log("locum reg data===",locumreg_data);
//       // Assuming form data is valid, send a POST request to the API
// //       const response = await axios.post('http://74.235.105.192:35601/api/slcp_Locums', locumreg_data);
// // console.log("locum registration response=",response.data);
//       // Assuming the API returns a success message
//       // response.data.message
//       setFormData({
//         clinicianType: '',
//             speciality: '',
//             firstName: '',
//             middleName: '',
//             lastName: '',
//             title: '',
//             dob:'',
           
//             mobileNumber: '',
//             homeNumber: '',
//             email: '',
//             caqhReferenceNumber: '',
//             agencyName: '',
//             otherCredentialingRef: '',
//             otherCredentialingContact: '',
//             boardCertificationRef: '',
//             insuranceNotice: '',
//             profileDocType: '',
//             profileDocNumber: '',
//             profileDocTitle: '',
//             profileDocFile:'',
//       })
//       toast.success("Registration successful");
//       console.log(formData);
//     }
//     else{
//       toast("Please check your inputs")
//     }
//     } catch (error) {
//       // Handle registration error
//       toast.error('Error during registration. Please try again.');
//     }
//   };
//   const validateForm=()=>{
//     for(const field in formData){
//       if(!formData[field]){
//         return false;
//       }
//     }
//     return true;
//   };
//     return (
//         <>
        
//        <div className='locum-reg'>
//        <h1>Locum Registration</h1>
//         <form>
// <p className='para'><label htmlFor="clinician">Clinician Type</label>

// <select  value={formData.clinicianType}
//               onChange={handleInputChange}  name='clinicianType'    style={{border:"1px solid grey", textAlign:"left",height:"39px"}}>
//         <option>Select a Clinician Type</option>
//         <option>Physicians</option>
//         <option>Nurses</option>
//         <option>Physician Assistants (PAs)</option>
//         <option>Dentists</option>
//         <option>Pharmacists</option>
//         <option>Psychologists</option>
//         <option>Occupational Therapists</option>
//         <option>Physical Therapists</option>
//         <option>Speech-Language Pathologists</option>
//         <option>Optometrists</option>
//         <option>Ophthalmologists</option>
//         <option>Chiropractors</option>
//         <option>Podiatrists</option>
//       </select>
// </p>
// <p className='para'><label htmlFor="clinician">Speciality</label>
// {/* <input type='text' id="Speciality" placeholder='Speciality' required/> */}
// <select value={formData.speciality} name="speciality" onChange={handleInputChange} id="speciality"   style={{border:"1px solid grey", textAlign:"left", padding:"5px",height:"40px"}}  autoComplete='off' >
//           <option>Select a Speciality</option>
//           <option>Anesthesiology</option>
//           <option>Cardiology</option>
//           <option>Dermatology</option>
//           <option>Emergency Medicine</option>
//           <option>Endocrinology</option>
//           <option>Gastroenterology</option>
//           <option>General Surgery</option>
//           <option>Hematology</option>
//           <option>Infectious Disease</option>
//           <option>Internal Medicine</option>
//           <option>Nephrology</option>
//           <option>Neurology</option>
//           <option>Obstetrics and Gynecology</option>
//         <option>Ophthalmology</option>
//         <option>Orthopedic Surgery</option>
//         <option>Otolaryngology (ENT)</option>
//         <option>Pediatrics</option>
//         <option>Plastic Surgery</option>
//         <option>Psychiatry</option>
//         <option>Pulmonology</option>
//         <option>Radiology</option>
//         <option>Rheumatology</option>
//         <option>Urology</option>
//         <option>Vascular Surgery</option>
//         <option>Allergy and Immunology</option>
//         <option>Physical Medicine and Rehabilitation</option>
//         <option>Critical Care Medicine</option>
//         <option>Pain Medicine</option>
//         <option>Sports Medicine</option>
//         <option>Nuclear Medicine</option>
//         <option>Medical Genetics</option>
//         <option>Pathology</option>
//         <option>Forensic Medicine</option>
//         <option>Neonatology</option>
//         <option>Geriatrics</option>
//         <option>Infectious Disease</option>
//         <option>Medical Oncology</option>
//         <option>Pediatric Surgery</option>
//         <option>Sleep Medicine</option>
//         <option>Transplant Surgery</option>
//         <option>Nephrology</option>
//         <option>Colorectal Surgery</option>
//         <option>Gynecologic Oncology</option>
//         <option>Interventional Radiology</option>
//         <option>Reproductive Endocrinology and Infertility</option>
//         <option>Palliative Medicine</option>
//         <option>Clinical Neurophysiology</option>
//         <option>Hospice and Palliative Medicine</option>
//         <option>Pediatric Hematology-Oncology</option>
//         <option>Addiction Medicine</option>
//         </select>
// </p>
// <p className='para'><label>Photo</label><input value={FormData.photo} name='photo' onChange={handleInputChange} type='file'placeholder='upload image'required/></p>
// <div>
// <label ><b>Name</b></label>
// <p className='para'>

// <label for="fname">First Name</label>
// <input value={FormData.firstName} name='firstName' onChange={handleInputChange} type='text' id='fname' placeholder='First name' required/></p>
// <p className='para'><label htmlFor="mname">middle Name</label>
// <input value={FormData.middleName} name='middleName' onChange={handleInputChange}  type='text' id='mname' placeholder='Middle name'/></p>
// <p className='para'><label htmlFor="lname">Last Name</label>
// <input value={FormData.lastName} name='lastName' onChange={handleInputChange} type='text' id='lname' placeholder='Last name' required/></p>

// <p className='para'><label htmlFor="tittle">Tittle</label>
// {/* <input type='text' id='tittle' placeholder='Mr/Ms/Mrs' required/> */}
// <select value={FormData.title} name='tittle'  onChange={handleInputChange} style={{width:"300px",height:"35px"}}>
//           <option>Select title</option>
//           <option>mr</option>
//           <option>ms</option>
//           <option>mrs</option>
//         </select>
// </p>
// </div>
// <p className='para'><label htmlFor="dob"><b>DOB</b></label>
// <input value={FormData.dob} name='dob' onChange={handleInputChange} type='date' id='dob' placeholder='date of birth' required/></p>

// <div>
// <label ><b>Locum Contact</b></label><br></br>
// <p className='para'><label htmlFor="mobilenumber">Mobile</label>
// <input value={FormData.mobileNumber} name='mobileNumber'type='tel' id='mobilenumber' placeholder='mobile number ' required/></p>
// <p className='para'><label htmlFor="homenumber">Home </label>
// <input  value={FormData.homeNumber} name='homeNumber' type='tel' id='homenumber' placeholder='Home number' required/></p>
// <p className='para'><label htmlFor="mail">Email</label>
// <input  value={FormData.email} name='email' type='email' id='mail' placeholder='email' required/></p>
// </div>
// <label ><b>CAQHCredentialing</b></label><br></br>
// <p className='para'><label htmlFor="ref">Reference Number</label>
// <input  value={FormData.caqhReferenceNumber} name='caqhReferenceNumber' onChange={handleInputChange} type='number' id='ref' placeholder='Reference Number' required/></p>
// <div>
// <label ><b>Other Credentialing</b></label><br></br>
// <p className='para'><label htmlFor="agency">Name of Agency</label>
// <input  value={FormData.agencyName} name='agencyName' onChange={handleInputChange} type='text' id='agency' placeholder="Name of Agency" required/></p>
// <p className='para'><label htmlFor="other_ref">Reference Number</label>
// <input  value={FormData.otherCredentialingRef} name='otherCredentialingRef' onChange={handleInputChange} type='number' id='other_ref' placeholder='Reference Number' required/></p>
// <p className='para'><label>Contact for Other Credentialing Service</label>
// <input  value={FormData.otherCredentialingContact} name='otherCredentialingContact' onChange={handleInputChange} type='tel' placeholder='contact number' required/></p>
// </div>
// <label ><b>BoardCertification</b></label><br></br>
// <p className='para'><label >Reference Number</label>
// <input  value={FormData.boardCertificationRef} name='boardCertificationRef' onChange={handleInputChange} type='number' placeholder='Reference Number' required /></p>
// <label ><b>Insurance</b></label>
// <br></br>
// <p className='para'>
// <label >Notice</label>
// <input  value={FormData.insuranceNotice} name='insuranceNotice' onChange={handleInputChange} type='number' placeholder='notice' required/></p>

// <div>
// <label><b>Profile Docs</b></label><br>
// </br>
// <p className='para'><label htmlFor='doctype'>Doc Type</label><input  value={FormData.profileDocType} name='profileDocType ' onChange={handleInputChange}  type='text' id='doctype' placeholder='Doc Type' required /></p>
// <p className='para'><label htmlFor='docnum'>Doc Number</label><input  value={FormData.profileDocNumber} name='profileDocNumber' onChange={handleInputChange} type='text' id='doctnum' placeholder='Doc Number' required /></p>
// <p className='para'><label htmlFor='doctittle'>Tittle</label><input  value={FormData.profileDocTitle} name='profileDocTitle' onChange={handleInputChange} type='text' id='doctittle' placeholder='Doc Tittle' required/></p>
// <p className='para'><label htmlFor='doc'>Document:</label><input  value={FormData.profileDocFile} name='profileDocFile' onChange={handleInputChange} type='file' id='doc' placeholder='Doc' required /></p>
// </div>
// <input style={{color:"white",backgroundColor:"orangered", border:"1px solid orangered", width:"120px"}}
// onClick={handleRegistration} type='submit' value="submit"/>
// </form>
//        </div>
//         {/* <CubePresentation/> */}
//         <ToastContainer/>
//         </>
//     )
// }

// export default Locum


import  { useState } from 'react';
import "./CSS/locum.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

 function Locum() {
  //const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    clinicianType: '',
    speciality: '',
    firstName: '',
    middleName: '',
    lastName: '',
    title: '',
   month:"",
   day:"",
   year:"",
    mobileNumber: '',
    homeNumber: '',
    email: '',
    caqhReferenceNumber: '',
    agencyName: '',
    otherCredentialingRef: '',
    otherCredentialingContact: '',
    boardCertificationRef: '',
    insuranceNotice: '',
    profileDocType: '',
    profileDocNumber: '',
    profileDocTitle: '',
    profileDocFile: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    const areAllFieldsFilled = validateForm();
  
    if (areAllFieldsFilled) {
      const locumData = {
        slcp_ClinicianType: formData.clinicianType,
        slcp_Speciality: formData.speciality,
        slcp_Photo: "", // Add the appropriate data for the Photo field
        slcp_Name: {
          slcp_FirstName: formData.firstName,
          slcp_MiddleName: formData.middleName,
          slcp_LastName: formData.lastName,
          slcp_Title: formData.title,
        },
        slcp_DoB: {
          slcp_MonthofBirth: formData.month,
          slcp_DayofBirth: formData.day,
          slcp_YearofBirth: formData.year,
        },
        slcp_LocumContact: {
          slcp_MobileNumber: formData.mobileNumber,
          slcp_HomeNumber: formData.homeNumber,
          slcp_Email: formData.email,
        },
        slcp_CAQHCredentialing: [
          {
            slcp_ReferenceNumber: formData.caqhReferenceNumber,
          },
        ],
        slcp_OtherCredentialing: [
          {
            slcp_NameofAgency: formData.agencyName,
            slcp_ReferenceNumber: formData.otherCredentialingRef,
            slcp_ContactforOtherCredentialingService: formData.otherCredentialingContact,
          },
        ],
        slcp_BoardCertification: [
          {
            slcp_ReferenceNumber: formData.boardCertificationRef,
          },
        ],
        slcp_Insurance: [
          {
            slcp_Notice: formData.insuranceNotice,
          },
        ],
        slcp_ProfileDocs: [
          {
            slcp_DocType: formData.profileDocType,
            slcp_DocNumber: formData.profileDocNumber,
            slcp_Title: formData.profileDocTitle,
            slcp_Doc: "", // Add the appropriate data for the Document field
          },
        ],
      };
  
      // You can now use locumData as needed, for example, send it to a server
      console.log('Locum Data:', locumData);
  
      try {
        const response = await axios.post('http://74.235.105.192:35601/api/slcp_Facilitys', locumData);
        console.log('Response:', response.data);
        toast.success('Registration successful!');
      } catch (error) {
        console.error('Error submitting availability:', error);
        toast.error('Registration failed. Please try again.');
        // Log the error response for further inspection
        console.log('Error Response:', error.response?.data);
      }

      setFormData({
        clinicianType: '',
        speciality: '',
        firstName: '',
        middleName: '',
        lastName: '',
        title: '',
        month: "",
        day: "",
        year: "",
        mobileNumber: '',
        homeNumber: '',
        email: '',
        caqhReferenceNumber: '',
        agencyName: '',
        otherCredentialingRef: '',
        otherCredentialingContact: '',
        boardCertificationRef: '',
        insuranceNotice: '',
        profileDocType: '',
        profileDocNumber: '',
        profileDocTitle: '',
        profileDocFile: '',
      });
    } else {
      toast.error('Registration failed. Please fill in all fields.');
    }
  };
  const validateForm = () => {
    for (const field in formData) {
      if (!formData[field]) {
        return false;
      }
    }
    return true;
  };

  return (
    <>
      <hr/>
      <div className='locum-reg'>
        <h1>Locum Registration</h1>
       
        <div className="form">
          <p>
            <label htmlFor="clinician">Clinician Type:</label>

            <select type='text' id="clinician" placeholder='ClinicianType' value={formData.clinicianType} onChange={handleChange} name="clinicianType" required  style={{width:"320px",height:'40px'}}>
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
          <p>
            <label htmlFor="speciality">Speciality:</label>
            <select type='text' id="speciality" placeholder='Speciality' value={formData.speciality} onChange={handleChange} name="speciality" style={{width:"320px",height:'40px'}} required>

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

          <div>
            <p>
                <label htmlFor="Photo">Photo:</label>
                <input type="file" style={{width:"300px",height:"30px"}}/>
            </p>
            <label ><b>Name</b></label>
            <p>
              <label htmlFor="firstName">First Name:</label>
              <input type='text' id='firstName' placeholder='First name' value={formData.firstName} onChange={handleChange} name="firstName"  required/>
            </p>
            <p>
              <label htmlFor="middleName">Middle Name:</label>
              <input type='text' id='middleName' placeholder='Middle name' value={formData.middleName} onChange={handleChange} name="middleName" required/>
            </p>
            <p>
              <label htmlFor="lastName">Last Name:</label>
              <input type='text' id='lastName' placeholder='Last name' value={formData.lastName} onChange={handleChange} name="lastName" required/>
            </p>

            <p>
              <label htmlFor="title">Title:</label>
              <select type='text' id='title' placeholder='Mr/Ms/Mrs' value={formData.title} onChange={handleChange} name="title" style={{width:"320px",height:"40px"}} required>
                <option>select an option</option>
                <option>mr</option>
                <option>ms</option>
                <option>mrs</option>
                </select>
            </p>
          </div>
         <b>Date of birth:</b>
          <p>
            <label htmlFor="month">Month of birth:</label>
            <input type="text" id="month" value={formData.month} onChange={handleChange} name="month" placeholder="month"/>
          </p>
          <p>
            <label htmlFor="day">Day of birth:</label>
            <input type="text" id="day" value={formData.day} onChange={handleChange} name="day" placeholder="day"/>
          </p>
          <p>
            <label htmlFor="year">Year of birth:</label>
            <input type="text" id="year" value={formData.year} onChange={handleChange} name="year" placeholder="year"/>
          </p>

          <div>
            <label ><b>Locum Contact:</b></label><br></br>
            <p>
              <label htmlFor="mobileNumber">Mobile:</label>
              <input type='tel' id='mobileNumber' placeholder='mobile number' value={formData.mobileNumber} onChange={handleChange} name="mobileNumber" required/>
            </p>
            <p>
              <label htmlFor="homeNumber">Home </label>
              <input type='tel' id='homeNumber' placeholder='Home number' value={formData.homeNumber} onChange={handleChange} name="homeNumber" required />
            </p>
            <p>
              <label htmlFor="email">Email:</label>
              <input type='email' id='email' placeholder='email' value={formData.email} onChange={handleChange} name="email" required/>
            </p>
          </div>

          <label ><b>CAQH Credentialing:</b></label><br></br>

          <p>
            <label htmlFor="caqhReferenceNumber">Reference Number:</label>
            <input type='tel' id='caqhReferenceNumber' placeholder='Reference Number' value={formData.caqhReferenceNumber} onChange={handleChange} name="caqhReferenceNumber" required/>
          </p>

          <div>
            <label ><b>Other Credentialing:</b></label><br></br>
            <p>
              <label htmlFor="agencyName">Name of Agency:</label>
              <input type='text' id='agencyName' placeholder="Name of Agency" value={formData.agencyName} onChange={handleChange} name="agencyName" required />
            </p>
            <p>
              <label htmlFor="otherCredentialingRef">Reference Number:</label>
              <input type='number' id='otherCredentialingRef' placeholder='Reference Number' value={formData.otherCredentialingRef} onChange={handleChange} name="otherCredentialingRef" required/>
            </p>
            <p>
              <label htmlFor="otherCredentialingContact">Contact for Other Credentialing Service:</label>
              <input type='tel' placeholder='contact number' value={formData.otherCredentialingContact} onChange={handleChange} name="otherCredentialingContact" required />
            </p>
          </div>

          <label ><b>Board Certification:</b></label><br></br>
          <p>
            <label >Reference Number:</label>
            <input type='tel' placeholder='Reference Number' value={formData.boardCertificationRef} onChange={handleChange} name="boardCertificationRef" required/>
          </p>

          <label ><b>Insurance</b></label><br></br>
          <p>
            <label >Notice:</label>
            <input type='tel' placeholder='notice' value={formData.insuranceNotice} onChange={handleChange} name="insuranceNotice" required/>
          </p>

          <div>
            <label><b>Profile Docs</b></label><br></br>
            <p>
              <label htmlFor='profileDocType'>Doc Type:</label>
              <input type='text' id='profileDocType' placeholder='Doc Type' value={formData.profileDocType} onChange={handleChange} name="profileDocType" required/>
            </p>
            <p>
              <label htmlFor='profileDocNumber'>Doc Number:</label>
              <input type='text' id='profileDocNumber' placeholder='Doc Number' value={formData.profileDocNumber} onChange={handleChange} name="profileDocNumber" required/>
            </p>
            <p>
              <label htmlFor='profileDocTitle'>Title:</label>
              <input type='text' id='profileDocTitle' placeholder='Doc Tittle' value={formData.profileDocTitle} onChange={handleChange} name="profileDocTitle" required/>
            </p>
            <p>
              <label htmlFor='profileDocFile'>Document:</label>
              <input type='file' id='profileDocFile' placeholder='Doc' value={formData.profileDocFile} onChange={handleChange} name="profileDocFile" required/>
            </p>
          </div>
          <button  onClick={handleSubmit} style={{
                  color: 'white',
                  backgroundColor: 'orangered',
                  border: '1px solid orangered',
                  width: '100px',
                  padding: '5px',
                }}>
           submit
        </button>
        <ToastContainer/>
          


        </div>
        
       
      </div>
        
    </>
  );
}

export default Locum