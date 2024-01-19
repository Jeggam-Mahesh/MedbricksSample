import React from 'react'
import '../Pages/CSS/jobsearch.css'
import { useEffect } from 'react';
import axios from 'axios'
function Jobsearch2() {
  // const [jobdata, setJobdata] = React.useState([
   const jobdata=[ {
        "id": 1,
        "slcp_ClinicianType": "Nurses",
        "slcp_Speciality": "Cardiology",
        "slcp_PatientLoad": "15",
        "slcp_FacilityType": null,
        "slcp_Remote": null,
        "slcp_AgreementTerms": null,
        "slcp_Address": {
            "id": 1,
            "slcp_Street": "AN nagar",
            "slcp_City": "Hyderabad",
            "slcp_Zip": "500003",
            "slcp_State": "TS",
            "slcp_LandMark": null
        },
        "slcp_Duration": null,
        "slcp_Shifts": {
            "id": 1,
            "slcp_Shift": "9-5",
            "slcp_Hours": "8",
            "slcp_DaysofWeek": "Monday"
        },
        "slcp_ScopeofPractice": [],
        "slcp_Qualification": [],
        "slcp_Experience": [
            {
                "id": 1,
                "slcp_Years": "5",
                "slcp_Months": "2"
            }
        ],
        "slcp_SupportStaff": [],
        "slcp_Compensation": null,
        "slcp_Credentialing": [],
        "slcp_AdditionalRequirement": []
    }
]
  useEffect(() => {
    axios.get('http://74.235.105.192:35601/api/slcp_Jobs/GetByQuery?Id=0&includeProperties=slcp_Address,slcp_Shifts,slcp_Experience')
      .then((res) => console.log("##############################3",res))
      .catch((error) => console.error('Axios request failed:', error));
  }, []);
    const Hotelsdata = [
        {
          id: 1,
          name: "Hot-Rate 5-Star Hotel",
          location: "Hyderbad south area",
          img:"https://images.trvl-media.com/lodging/3000000/2050000/2046400/2046352/b9a1e5c7_b.jpg",
          distance:"0.8km miles from  search",
          price: "$204",
          total: "$264",
          review:"Good",
          rating: 4.5,
        },
        {
          id: 2,
          name: "Novotel Hyderbad Airport Hotel",
          img:"https://media.expedia.com/lodging/3000000/2050000/2046400/2046352/57eff9c7_b.jpg",
          location: "Hyderbad ",
          distance:"0.8km miles from  search",
          price: "$264",
          total: "$304",
          review:"Good",
          rating: 4.6,
        },
        {
            id: 3,
            name: "Taj Faluknama Palce",
            img:"https://media.expedia.com/lodging/4000000/3150000/3141200/3141149/99813012_b.jpg",
            location: "Hyderbad ",
            distance:"0.8km miles from  search",
            price: "$722",
            total: "$833",
            review:"Exceptional",
            rating: 4.8,
          },
          {
            id: 4,
            name: "Ramana Shree California Resort",
            img:"https://media.expedia.com/lodging/2000000/1640000/1635600/1635531/914ee45a_b.jpg", 
            location: "Bangolore",
            distance:"8km miles from  search",
            price: "$36",
            total: "$40",
            review:"Good",
            rating: 3.8,
          },
          {
            id: 5,
            name: "Alive Hotel",
            img:"https://media.expedia.com/lodging/5000000/4330000/4326100/4326018/cda9abb8_b.jpg", 
            location: "Bangolore",
            distance:"8km miles from  search",
            price: "$38",
            total: "$48",
            review:"Good",
            rating: 3.9,
          },
        
      ];
    return (
        <>
        <div>
        <div style={{margin:"10px"}} >
              
                
        
     
              <select   style={{border:"1px solid grey", textAlign:"left", padding:"5px",width:"220px",height:"40px"}}>
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
        
                     
        
        <select    style={{border:"1px solid grey", textAlign:"left", padding:"5px",width:"220px",height:"40px",margin:"10px"}} >
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
        <input type="text" placeholder="enter your city" style={{width:"220px",height:"33px",textIndent:"40px",fontSize:"17px"}}/>
                       {/* <FaMapMarkerAlt style={{fontSize:"25px",position:"absolute",right:"750px",bottom:"445px"}}/> */}
                     
                       
        
                        <input type="date" style={{width:"140px", height:"35px", fontSize: "17px",margin:"10px"}}/>
                        <input type="date" style={{width:"140px", height:"35px", fontSize: "17px",margin:"10px"}}/>
         
        <button style={{width:"150px",height:"41px",backgroundColor:"red",color:"white",margin:"10px",border:"none",borderRadius:"25px"}}>Search</button> 
        
                      </div>
        </div>
        <div>

        <div className='hotels-display-container'>
        <div className='hotels-container'>
        <div>
          {
            jobdata.map((item,index)=>(
              <div key={index} className='jobdata'>
                <div>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgP3tE356e3vqLq-YRAouToJJUrGxp7i2gA&usqp=CAU" alt='not'width='200px' height="200px"/>
                </div>
                <div>
                <p><b>ClinicianType</b>:{item.slcp_ClinicianType}</p>
                <p><b>Speciality:</b>{item.slcp_Speciality}</p>
                <p><b>PatientLoad</b>:{item.slcp_PatientLoad}</p>
                <b>Address</b>
                <p>
                  <li>{item.slcp_Address.slcp_Street},
                  {item.slcp_Address.slcp_City},
                  {item.slcp_Address.slcp_Zip},
                  {item.slcp_Address.slcp_State}</li>
                  </p>
                  <b>Shifts </b>
                  <p style={{display:"flex",gap:"20px"}}>
                    <span>Timings:{item.slcp_Shifts.slcp_Shift}</span><span> Hours:{item.slcp_Shifts.slcp_Hours}</span><span>{item.slcp_Shifts.slcp_DaysofWeek}-friday</span>
                    </p>
                    <b>Experience:</b>
                    <p style={{display:"flex",gap:"20px"}}><span>{item.slcp_Experience[0].slcp_Years}Year</span>
                    <span>{item.slcp_Experience[0].slcp_Months}months</span>
                     
                    </p>
                    </div>
              </div>)
            )
          }
        </div>
     {
       Hotelsdata.map((item)=>{
        return  <div className='hotels-info'>
        <div >
       <img className='image' src={item.img} alt='nt'/>
        </div>
        <div className='discription'>
            <div className='discription-info'>
                <b style={{color:"yellow",fontSize:"x-large"}}>*****</b>
                <b>{item.name}</b>
                <i>{item.location}</i>
                <p>{item.distance}</p>
                <p style={{color:"green"}}>
                    <button style={{border:"1px solid green",backgroundColor:"green",color:"white"}}>
                        {item.rating}</button >{item.review}!</p>
            </div>
            <div style={{lineHeight:"10px"}} className='price-container'><h5 style={{color:"red"}}>{item.price}</h5>
            <p>per night</p>
            <p>{item.total}total</p>
            </div>
        </div>
    </div>
    }) 
}
      
        </div>
        <div className='map'>
            <img src="https://www.wired.com/wp-content/uploads/2016/11/GoogleMapTA.jpg" alt='not' height="600px" />
        </div>
      </div>
        </div>
       
        </>
    )
}

export default Jobsearch2
