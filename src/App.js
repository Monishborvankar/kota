import React from 'react';
import './App.css';
import Navbar from './Components/JS/Navbar.js'
import Home from './Components/JS/Home.js'
import Admin from './Components/JS/Admin.js'
import SimpleUser from './Components/JS/SimpleUser'
import CommanLogin from './Components/JS/CommanLogin'
import View from './RealtimeData/View'
import Notification from './Components/JS/Notification'
import ProfileService from './Components/JS/ProfileService'
import ProfileUser from './Components/JS/ProfileUser'
import Addroom from './Components/JS/Addroom'
import Allroom from './Components/JS/Allroom'
import Addpg from './Components/JS/Addpg'
import Addhr from './Components/JS/Addhr'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import axios from 'axios'
import  Homi  from './RealtimeData/View';
import  Pgdata  from './RealtimeData/Pgdata';
import  Hrdata  from './RealtimeData/Hrdata';
import  Pay from './Payg/Payg';
import  Search  from './RealtimeData/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rebu from './Components/Rentbuy/Rebu'
axios.defaults.withCredentials = true;

function App() {
  
  return (
    
    <div>
      
      <Navbar />
      <ToastContainer position="top-center"/>
      <Routes>
      
     <Route exact path="/" element={<Home />} />
     <Route path="/SimpleUser" element={<SimpleUser />} />
     <Route path="/Admin" element={<Admin />} />
     
     <Route path="/Addroom" Component={Addroom} />
     <Route path="/Allroom" Component={Allroom} />
     <Route path="/Addpg" Component={Addpg} />
     <Route path="/Addhr" Component={Addhr} />
     <Route path="/Pgdata" Component={Pgdata} />
     <Route path="/Homi" Component={Homi} />
     <Route path="/Hrdata" Component={Hrdata} />
     <Route path="/search" Component={Search}/>
     <Route path="/Rebu" Component={Rebu}/>
     <Route path="/Pay" Component={Pay} />
    </Routes>
      
    </div>
   
    
  );
  
}

export default App;
