import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Job from '../Pages/Job'
import Locum from '../Pages/Locum'

import Homepage from '../Pages/Homepage'
import Jobsearch2 from '../Pages/Jobsearch2'
import LocumSearch from '../Pages/LocumSearch'
function RouteComp() {
    return (
       <>
       <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/job" element={<Job/>} />
        <Route path="/locum" element={<Locum/>} />
       
        <Route path="/jobsearch" element={<Jobsearch2/>}/>
        <Route path="/locumsearch" element={<LocumSearch/>}/>
       </Routes>
       </> 
    )
}

export default RouteComp
