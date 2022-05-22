import React from 'react';
import {Routes,Route} from 'react-router-dom';
// import Page1 from './Page1.js';
// import Page2 from './Page2.js';
// import PageNotFound from './PageNotFound.js';
import Navbar from './Navbar.js';
import Home from './Home';
import Studentlist from './Studentlist';
import Signup from './Signup';
import Department from './Department';
import Login from './Login';
import Logout from './Logout';
import './App.css';
import Studentdetails from './Studentdetails';
//import Details from './Details.js';
import Protectedrouter from './Protectedrouter';
const App = () => {
    return (
        <div>
           <Navbar />
         <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path="department" element={<Department />}></Route>
                <Route path="studentlist" element={<Studentlist />}>
                    <Route path=":id/:name/:college" element={<Studentdetails />} />
                </Route>
                <Route path="signup" element={<Signup />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="logout" element={
                <Protectedrouter> <Logout /></Protectedrouter>
               }></Route>  

         </Routes>
        </div>
    );
};

export default App;