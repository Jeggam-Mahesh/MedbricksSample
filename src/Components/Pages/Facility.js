// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import './CSS/facility.css'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {toast} from 'react-toastify'
// function Facility() {
//     const navigate=useNavigate()
//     const handleRegistration = async () => {
//       try {
//         // Your registration logic here
  
//         // Assuming registration is successful
//         toast.success('Registration successful!');
//       } catch (error) {
//         // Handle registration error
//         toast.error('Registration failed. Please try again.');
//       }
//     };
//     return (
//         <>
//       <div className='facility-reg'>
//         <h1>Facility Registration</h1>
//         <p>
//           Name*:
//         </p>
//         <input type="text" placeholder="name" required />

//         <p>Description*:</p>
//         <textarea placeholder="Type Description..." cols={39} rows={4} required></textarea>

        
//           <p>General Agreements Terms:</p>
//           <input type="text" placeholder="General Agreements Terms" width={350}/>
        

//        <p><b>Location:</b></p> 

//         <p>Door No:</p>
//         <input type="number" placeholder="Enter Door Number.." required />

//         <p>Street:</p>
//         <input type="text" placeholder=" Enter Street Name.." required />

//         <p>City:</p>
//         <input type="text" placeholder="Enter City Name.." required />

//         <p>State:</p>
//         <input type="text" placeholder="Enter State.." required />

//         <p><b>Contact:</b></p>
//         <p>Name *:</p>
//         <input type="text" placeholder="enter name.." required />

//         <p>Select title:</p>
//         <select style={{width:"300px",height:"35px"}}>
//           <option>Select title</option>
//           <option>mr</option>
//           <option>ms</option>
//           <option>mrs</option>
//         </select>

//         <p>Phone*:</p>
//         <input type="tel" placeholder="phone.." required />

//         <p>Email*:</p>
//         <input type="email" placeholder="Enter your mail id" required />

//         <p><b>Speciality:</b></p>
//         <p>Name*:</p>
//         <input type="text" placeholder="name" required />

//         <p><b>Staffing Needs</b></p>
//         <p>Locum Type*:</p>
//         <input type="text" placeholder="enter locum type" required />

//         <p>Mobile*:</p>
//         <input type="tel" placeholder="enter mobile number" required />
//         <p><button style={{color:"white",backgroundColor:"orangered",border:"1px solid orangered",width:"100px",padding:"5px"}}
//         onClick={handleRegistration}>Submit</button></p>
//       </div>
//       <ToastContainer/>
//         </>
//     )
// }

// export default Facility



import React, { useState } from 'react';
import './CSS/facility.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 function Facility() {
 // const [isFormSubmitted, setIsFormSubmitted]=useState(false);
  const [formData, setFormData]=useState({
    name: '',
    description: '',
    generalTerms: '',
    doorNumber: '',
    street: '',
    city: '',
    state: '',
    contactName: '',
    selectedTitle: '',
    phone: '',
    email: '',
    specialityName: '',
    locumType: '',
    mobile: '',
  });

  const handleChange=(e)=>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit=()=>{
    const areAllFieldsFilled=validateForm();

    if(areAllFieldsFilled){
     
       toast.success('Registration successful!');
       setFormData({
        name: '',
        description: '',
        generalTerms: '',
        doorNumber: '',
        street: '',
        city: '',
        state: '',
        contactName: '',
        selectedTitle: '',
        phone: '',
        email: '',
        specialityName: '',
        locumType: '',
        mobile: '',
      });
    } else{
      toast.error('Registration failed. Please try again.');
     
    }
  };
  const validateForm=()=>{
    for(const field in formData){
      if(!formData[field]){
        return false;

      }
    }
    return true;
  };
  

  return (
    <>
      <div className='facility-reg'>
        <h1>Facility Registration</h1>
       <>
            <p>  Name*:</p>
            <input  type="text" placeholder="name" value={formData.name} onChange={handleChange} name="name" required/>

            <p>Description*:</p>
            <textarea  placeholder="Type Description..." cols={39} rows={4} value={formData.description} onChange={handleChange} name="description"   required></textarea>

            <p>General Agreements Terms:</p>
            <input  type='text' placeholder='enter general agreement terms...'  value={formData.generalTerms} onChange={handleChange} name="generalTerms" />

            <p><b>Location:</b></p>
            <p>Street:</p>
            <input type="text" placeholder=" Enter Street Name.."   value={formData.street}onChange={handleChange}name="street"required/>
            <p>City:</p>
            <input type="text"  placeholder="Enter City Name.."value={formData.city} onChange={handleChange}name="city"required />
            <p>Zip code:</p>
            <input type="number" placeholder="Enter Door Number.." value={formData.doorNumber} onChange={handleChange} name="doorNumber" required/>
            <p>State:</p>
            <input type="text"  placeholder="Enter State.." value={formData.state} onChange={handleChange} name="state" required />

            <p><b>Contact:</b></p>
            <p>Name *:</p>
            <input  type="text"  placeholder="enter name.."  value={formData.contactName}  onChange={handleChange}  name="contactName"  required/>

            <p>Select title:</p>
            <select style={{ width: "300px", height: "35px" }} value={formData.selectedTitle} onChange={handleChange} name="selectedTitle"  required >
              <option>Select title</option>
              <option>mr</option>
              <option>ms</option>
              <option>mrs</option>
            </select>

            <p>Phone*:</p>
            <input type="tel" placeholder="phone.." value={formData.phone} onChange={handleChange} name="phone" require />

            <p>Email*:</p>
            <input type="email" placeholder="Enter your mail id"  value={formData.email} onChange={handleChange} name="email" required />

            <p><b>Speciality:</b></p>
            <p>Name*:</p>
            <input type="text" placeholder="name"  value={formData.specialityName} onChange={handleChange} name="specialityName" required />

            <p><b>Staffing Needs</b></p>
            <p>Locum Type*:</p>
            <input  type="text" placeholder="enter locum type" value={formData.locumType} onChange={handleChange}name="locumType"   required />

            <p>Mobile*:</p>
            <input type="tel"  placeholder="enter mobile number" value={formData.mobile}  onChange={handleChange}   name="mobile" required/>

            <p>
              <button
                style={{
                  color: 'white',
                  backgroundColor: 'orangered',
                  border: '1px solid orangered',
                  width: '100px',
                  padding: '5px',
                }}
                onClick={handleSubmit}
              >
                Submit
              </button>
              <ToastContainer/>
            </p>
          </>

      </div>



















    </>
  );
}
export default Facility