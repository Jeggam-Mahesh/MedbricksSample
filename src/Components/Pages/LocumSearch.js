import React from 'react'
import '../Pages/CSS/jobsearch.css'
import { FaUserNurse } from "react-icons/fa";
function LocumSearch() {
  const locumdata=[
    {
        "id": 1,
        "slcp_ClinicianType": "Physicians",
        "slcp_Speciality": "Anesthesiology",
        "slcp_Photo": null,
        "slcp_Name": {
            "id": 1,
            "slcp_FirstName": "Farhana",
            "slcp_LastName": null,
            "slcp_MiddleName": null,
            "slcp_Title": "Physican"
        },
        "slcp_DoB": {
            "id": 1,
            "slcp_MonthofBirth": "Aug",
            "slcp_DayofBirth": null,
            "slcp_YearofBirth": "2024-01-19T11:46:58"
        },
        "slcp_LocumContact": {
            "id": 1,
            "slcp_MobileNumber": "988776655",
            "slcp_HomeNumber": null,
            "slcp_Email": "fara@gmail.com"
        },
        "slcp_CAQHCredentialing": [],
        "slcp_OtherCredentialing": [],
        "slcp_BoardCertification": [],
        "slcp_Insurance": [],
        "slcp_ProfileDocs": []
    },
    {
        "id": 2,
        "slcp_ClinicianType": "Nurses",
        "slcp_Speciality": "Cardiology",
        "slcp_Photo": "{\"org_file_name\":\"jpeg-home.jpg\",\"ref_file_name\":\"182eb1f1-d850-48b7-a978-9d97e8003448.jpg\"}",
        "slcp_Name": {
            "id": 2,
            "slcp_FirstName": "James",
            "slcp_LastName": "Smith",
            "slcp_MiddleName": null,
            "slcp_Title": "Ortho"
        },
        "slcp_DoB": {
            "id": 2,
            "slcp_MonthofBirth": "January",
            "slcp_DayofBirth": null,
            "slcp_YearofBirth": "2024-01-04T12:58:56"
        },
        "slcp_LocumContact": {
            "id": 2,
            "slcp_MobileNumber": "987654321",
            "slcp_HomeNumber": null,
            "slcp_Email": "james.smith@gmail.com"
        },
        "slcp_CAQHCredentialing": [],
        "slcp_OtherCredentialing": [],
        "slcp_BoardCertification": [],
        "slcp_Insurance": [],
        "slcp_ProfileDocs": []
    }
]
    return (<>
       <div>
        <div>
        <input type="date" style={{width:"145px", height:"37px", fontSize: "17px",margin:"10px"}}/>
                <input type="date" style={{width:"145px", height:"37px", fontSize: "17px",margin:"10px"}}/>
                <select   style={{border:"1px solid grey", textAlign:"left",width:"150px",height:"39px",margin:"10px"}}>
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
             

<select    style={{border:"1px solid grey", textAlign:"left",width:"150px",height:"39px",margin:"10px"}} >
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
<input type="number" placeholder="enter number" style={{width:"155px",height:"34px",textIndent:"30px",margin:"10px"}}/>
               {/* <FaPhoneAlt style={{position:"absolute",left:"695px",bottom:"485px"}}/> */}
               <input type="text" placeholder="Board Certification" style={{width:"150px",height:"33px",margin:"10px"}}/>
               <button style={{width:"170px",height:"33px",border:"none",backgroundColor:"red",color:"white",borderRadius:"25px",margin:"10px"}}>Search</button>
        </div>
       </div>
       <div>
       <div className='hotels-display-container'>
        <div className='hotels-container'>
        {
  locumdata.map((item) => (
    <div className="hotels-info" key={item.id} style={{minHeight:""}}>
      <div>
        {/* <img src={item.slcp_Photo} className="image" alt='not' /> */}
        <FaUserNurse size={100}/>
      </div>
      <div style={{ marginLeft: "8px" }}>
        <p>ClinicianType: <b>{item.slcp_ClinicianType}</b></p>
        <p>Speciality: <b>{item.slcp_Speciality}</b></p>
        <p>
          Name: {item.slcp_Name && (
            <>
              {item.slcp_Name.slcp_FirstName} <span style={{ marginLeft: "8px" }}>{item.slcp_Name.slcp_Title}</span>
            </>
          )}
        </p>
        <p>
          Contact: {item.slcp_LocumContact && (
            <span style={{ margin: "5px", color: "green" }}>{item.slcp_LocumContact.slcp_MobileNumber}</span>
          )}
          <p >Gmail:: {item.slcp_LocumContact && item.slcp_LocumContact.slcp_Email}</p>
        </p>
        <p>
          DOB: {item.slcp_DoB && (
            <>
              {item.slcp_DoB.slcp_MonthofBirth}  {item.slcp_DoB.slcp_YearofBirth} 
            </>
          )}
        </p>
      </div>
    
    </div>
  ))
}        </div>
        <div className='map'>
            <img src="https://www.wired.com/wp-content/uploads/2016/11/GoogleMapTA.jpg" alt='not' height="600px" />
        </div>
      </div>
       </div>
       </>
    )
}

export default LocumSearch


