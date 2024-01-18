import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Jobsearch from '../Pages/Jobsearch'
import Locum from '../Pages/Locum'

import Homepage from '../Pages/Homepage'
import HotelSearch from '../Pages/HotelSearch'
import CarSearch from '../Pages/CarSearch'
function RouteComp() {
    return (
       <>
       <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/jobsearch" element={<Jobsearch/>} />
        <Route path="/locum" element={<Locum/>} />
       
        <Route path="/hotelsearch" element={<HotelSearch/>}/>
        <Route path="/carsearch" element={<CarSearch/>}/>
       </Routes>
       </> 
    )
}

export default RouteComp
