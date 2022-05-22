import React from 'react';
import { Navigate } from 'react-router-dom';
import Login from './Login';
const Protectedrouter = ({children}) => {
   const isLoggedin=localStorage.getItem("form");
   isLoggedin=JSON.parse(isLoggedin)
   console.log(isLoggedin.agree);
//    const isLoggedIn=false;
     if(!(isLoggedin.agree==="")){
         return <Navigate to='login' />
      //   console.log("not")
     }
     return children;
   
};

export default Protectedrouter;