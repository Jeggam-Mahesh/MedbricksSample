import React from 'react'
import  { useState } from 'react';
import './CSS/Avail_post.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
function AvailabilityPost() {
    const [availabilityData, setAvailabilityData] = useState({
        fromDate: '',
        toDate: '',
        fromTime: '',
        toTime: '',
      });
    
      const handleAvailabilityChange = ({ target: { name, value } }) => {
        setAvailabilityData({
          ...availabilityData,
          [name]: value,
        });
      };
    
      const handleSubmit = async () => {
        const areAllFieldsFilled = validateForm();
    
        if (areAllFieldsFilled) {
          const availabilityPostData = {
            slcp_FromDate: availabilityData.fromDate,
            slcp_ToDate: availabilityData.toDate,
            slcp_FromTime: availabilityData.fromTime,
            slcp_ToTime: availabilityData.toTime,
            slcp_LocumId: 0,
          };
    
          console.log('Availability Post Data:', availabilityPostData);
    
          await axios.post('http://74.235.105.192:35601/api/slcp_Availabilitys', availabilityPostData)
            .then((res) => {
              console.log("availability post  response=",res.data);
            })
            .catch((err) => {
              console.error('Error submitting availability:', err);
            });
    
          setAvailabilityData(initialAvailabilityData);
    
          toast.success('Registration successful!');
        } else {
          toast.error(' Please fill all the fields.');
        }
      };
    
    
      const validateForm = () => {
        for (const field in availabilityData) {
          if (!availabilityData[field]) {
            return false;
          }
        }
        return true;
      };
    
      const initialAvailabilityData = {
        fromDate: '',
        toDate: '',
        fromTime: '',
        toTime: '',
      };
    return (
        <>
        <div className='availability-reg'>
          <h1>Availability-Post Registration</h1>
         <div className='inner-cntr'>
          <div><p>From Date*:</p>
          <input  type="date"  value={availabilityData.fromDate}  onChange={handleAvailabilityChange} name="fromDate" required/>
          </div>
          <div>
          <p>To Date*:</p>
          <input  type="date"  value={availabilityData.toDate}  onChange={handleAvailabilityChange}  name="toDate"  required/>

          </div>
         </div>
         <div className='inner-cntr'>
            <div>
            <p>From Time*:</p>
          <input type="time" value={availabilityData.fromTime} onChange={handleAvailabilityChange} name="fromTime"required />
            </div>
            <div>
            <p>To Time*:</p>
          <input type="time" value={availabilityData.toTime}  onChange={handleAvailabilityChange} name="toTime" required  />
            </div>
         </div>
          
                   
          
          <p>
            <center>
            <button  style={{ color: 'white',    backgroundColor: 'orangered',    border: '1px solid orangered',   width: '100px',  padding: '5px',  }}   onClick={handleSubmit} > Submit  </button>
            </center>
            
            <ToastContainer />
          </p>
        </div>
      </>
    )
}

export default AvailabilityPost







          