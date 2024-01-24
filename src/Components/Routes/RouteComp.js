import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Facility from '../Pages/Facility'
import Locum from '../Pages/Locum'
import { Jobpost } from '../Pages/JobPost'
import Homepage from '../Pages/Homepage'
import Jobsearch2 from '../Pages/Jobsearch2'
import LocumSearch from '../Pages/LocumSearch'
import AvailabilityPost from '../Pages/AvailabilityPost'
function RouteComp() {
    return (
       <>
       <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/facility" element={<Facility/>} />
        <Route path="/locum" element={<Locum/>} />
        <Route path="/jobpost" element={<Jobpost/>} />
        <Route path="/availabilitypost" element={<AvailabilityPost/>} />
        <Route path="/jobsearch" element={<Jobsearch2/>}/>
        <Route path="/locumsearch" element={<LocumSearch/>}/>
       </Routes>
       </> 
    )
}

export default RouteComp
