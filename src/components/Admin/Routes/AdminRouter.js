import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import DoctorsPage from '../Pages/DoctorsPage'
import Users from '../Pages/Users'
import AddDoctor from '../Pages/AddDoctor'
import AdminLogin from '../Pages/AdminLogin'

const AdminRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/adminhome" element={<HomePage />} />
        <Route path="/admindoc" element={<DoctorsPage />} />
        <Route path="/adminadd" element={<AddDoctor />} />
        <Route path="/adminuser" element={<Users />} />
        <Route path="/adminlogout" element={<AdminLogin />} />
    </Routes>
  )
}

export default AdminRouter