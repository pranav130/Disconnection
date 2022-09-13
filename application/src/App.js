import logo from "./logo.svg";
import "./App.css";
import bijli from "./bijli.png";
import img2 from "./img2.png";
import React, { Component }  from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login";
import LoginLineman from "./components/LoginLineman";
import Prelogin from "./components/Prelogin";
import Dashboard from "./components/Dashboard";
import Navbar1 from './components/Navebar1';
import Footer from './components/Footer';
import Home from "./components/home";
import AllUsers from "./components/AllUsers";
import LinemanCompleted from "./components/LinemanCompleted";
import LinemanPending from "./components/linemanPending";
import LinemanReports from "./components/LinemanReports";
import SignupJE from "./components/SignupJE";
import SignupLineman from "./components/SignupLineman";
import HomeLineman from "./components/homeLineman";
import Employee from "./components/Employee.js";
import DeactivateLineman from "./components/DeactivateLineman";
import ActivateLineman from "./components/ActivateLineman";
import Assignwork from "./components/Assignwork";
import login_component from "./components/login_component";


import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";


function App() {
  return (
	
    <BrowserRouter>
	<Navbar1 />
  <Routes>
        <Route path="/" element={<Prelogin />}></Route>

        <Route path="/login" element={<Login />}></Route>
      
        <Route path="/LoginLineman" element={<LoginLineman/>}></Route>
   
        <Route path="/homeLineman" element={<HomeLineman/>}></Route>
   
        <Route path="/signupje" element={<SignupJE/>}></Route>
   
        <Route path="/signuplineman" element={<SignupLineman/>}></Route>
    
        <Route path="/activatelineman" element={<ActivateLineman/>}></Route>
    
        <Route path="/employee" element={<Employee/>}></Route>
   
        <Route path="/lineman_completed" element={<LinemanCompleted/>}></Route>
     
        <Route path="/lineman_pending" element={<LinemanPending/>}></Route>
     
        <Route path="/Lineman_reports" element={<LinemanReports/>}></Route>
     
        <Route path="/deactivatelineman" element={<DeactivateLineman/>}></Route>
    
        <Route path="/reports" element={<AllUsers/>}></Route>
     
        <Route path="/assignwork" element={<Assignwork />}></Route>

     
        <Route path="/dashboard" element={<Dashboard />}></Route>

 
        <Route path="/home" element={<Home />}></Route>


     
        <Route path="/logincom" element={<login_component />}></Route>
		

      </Routes>
     
      <Footer />
    </BrowserRouter>
  );
}

export default App;
