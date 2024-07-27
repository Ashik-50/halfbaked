import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/Homepage1'
import Patients from '../Pages/Patients'
import Appointments from '../Pages/Appointments'
import ConHis from '../Pages/ConHis'
import DoctorLogin from '../Pages/DoctorLogin'
import Login from '../../User/components/Loginandsignup/Login'
const DoctorRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<DoctorLogin />} />
            <Route path="/dochome" element={<HomePage />} />
            <Route path="/docpat" element={<Patients />} />
            <Route path="/docapp" element={<Appointments />} />
            <Route path="/dochis" element={<ConHis />} />
            <Route path="/doclogout" element={<DoctorLogin />} />
            <Route path="/userlogin" element={<Login />} />
        </Routes>
    )
}
export default DoctorRouter