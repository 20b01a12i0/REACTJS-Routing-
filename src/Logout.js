import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./App.css"
const Logout = () => {
    // const Navigate=useNavigate()
    const lout=()=>{
        // Navigate("/");
        localStorage.removeItem("form");
    }
    
    return (
        <div>
            <button onClick={lout}>Logout</button>
            {/* <button>logout</button> */}
        </div>
    );
};

export default Logout;