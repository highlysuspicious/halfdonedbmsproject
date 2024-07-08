import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './firstpage.css'
import Loginstudent from './loginstudent.jsx';
import Loginteacher from './loginteacher.jsx';
import Signupteacher from './signupteacher.jsx';
import Loginstaff from './loginstaff.jsx';
import Logindriver from './logindriver.jsx';
import Loginadmin from './loginadmin.jsx';
import Loginsupervisor from './loginsupervisor.jsx';
import Signupstudent from './signupstudent.jsx';
import Signupstaff from './signupstaff.jsx';
import Signupdriver from './signupdriver.jsx';
import Signupsupervisor from './signupsupervisor.jsx';
import Passengerlist from './passengerlist.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>

        <Routes>
            <Route path="/" element={<App />} />
            <Route path ='/loginstudent' element={<Loginstudent/>}/>
            <Route path ='/loginteacher' element={<Loginteacher/>}/>   
            <Route path ='/loginstaff' element={<Loginstaff/>}/>
            <Route path ='/logindriver' element={<Logindriver/>}/>
            <Route path ='/loginsupervisor' element={<Loginsupervisor/>}/>
            <Route path ='/loginadmin' element={<Loginadmin/>}/>
            <Route path ='/signupteacher' element={<Signupteacher/>}/>   
            <Route path ='/signupstudent' element={<Signupstudent/>}/>       
            <Route path ='/signupstaff' element={<Signupstaff/>}/> 
            <Route path ='/signupsupervisor' element={<Signupsupervisor/>}/>     
            <Route path ='/signupdriver' element={<Signupdriver/>}/>    
            <Route path ='/passengerlist' element={<Passengerlist/>}/>  
        </Routes>     
    
    </BrowserRouter>,
    
);
