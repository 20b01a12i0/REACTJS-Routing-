import React from 'react';
import {NavLink} from 'react-router-dom';
import Logout from './Logout';
const Navbar = () => {
    const changeStyle=({isActive})=>{
        return{
            color:isActive?"violet":"white"
        }
    }
    return (
        
        <div className="navbar">
           

          <div className="NavLinks">
          <NavLink  className="NavLink" to='/' style={changeStyle}>Home</NavLink> <br />
          <NavLink className="NavLink" to='department'style={changeStyle}>Department</NavLink>
           <NavLink className="NavLink" to='studentlist'style={changeStyle}>Studentlist</NavLink> <br />
           <NavLink className="NavLink" to='signup'style={changeStyle}>Signup</NavLink>
           <NavLink className="NavLink" to='login' style={changeStyle}>Login</NavLink>
          <Logout/>
           </div>
       </div>
    );
};

export default Navbar;