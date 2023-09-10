import React from 'react'
import { Route, Routes } from "react-router-dom";

import './App.css'
import './dist/output.css'
import Register from './components/register'
import Home from "./components/home"
import Login from "./components/login"
import UserLogin from './components/userLogin';
import Admin from './components/Admin';
import AdminLogin from './components/adminLogin';
import ClientDashboard from './components/clientDashboard';
import Nwrdv from './components/Nwrdv';
import Profile from './components/profile';
import DoctorDashboard from './components/DoctorDashboard';
import StockManager from './components/StockManager';
import AssisstantDasgboard from './components/AssisstantDasgboard';
import CurentSession from './components/doctorComp/CurentSession'
import PendingRes from './components/doctorComp/PendingRes';
import Stat from './components/Stat'
const App = () => {
    const isAdmin = localStorage.getItem('admin')
    const isClient = localStorage.getItem('Client')
    const token = localStorage.getItem('token')
    return (
        <>
    <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/admin" exact element={<AdminLogin/>} />
    <Route path="/date/new" exact element={<Nwrdv/>} />
    <Route path="/login" exact element={<Login />} />
    <Route path="/user/profile" exact element={<Profile />} />
    <Route path="/userarea/login" exact element={<UserLogin/>} />
    <Route path="/register" exact element={<Register />} />
    <Route path="/statistic" exact element={<Stat />} />
    {isAdmin && <Route path="/Admin/dashboard" exact element={<Admin />} />}
    {isClient && <Route path="/user/dashboard" exact element={<ClientDashboard />} />}
    {token && <Route path="/doctor/dashboard" exact element={<DoctorDashboard />} />}
    {token && <Route path="/assisstance/dashboard" exact element={<AssisstantDasgboard />} />}
    {token && <Route path="/Stock_management/dashboard" exact element={<StockManager />} />}
    <Route path="/session/:id" exact element={<CurentSession />} />
    <Route path="/doctor/pending" exact element={<PendingRes />} />
    </Routes>
        </>
        );
}

export default App