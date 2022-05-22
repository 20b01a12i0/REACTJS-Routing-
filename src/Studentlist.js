import React from 'react';
import {Link,Outlet} from 'react-router-dom';
import Studentdetails from './Studentdetails';
const Studentlist = () => {
   let  Student=[
        {id:"20b01a12i0",
        name:"Pranathi",
        college:"SVECW"},

        {id:"20b01a12f8",
        name:"Taranya",
        college:"SVECW"},

        {id:"20b01a12h9",
        name:"Keerthana",
        college:"SVECW"},

        {id:"20b01a12g2",
        name:"Bhavana",
        college:"SVECW"},

        {id:"20b01a12g4",
        name:"Sahitya",
        college:"SVECW"},

        {id:"20b01a12e6",
        name:"Poojitha",
        college:"SVECW"},

        {id:"20b01a12b6",
        name:"Geetha",
        college:"SVECW"},
        {id:"20b01a12i2",
        name:"Asrithe",
        college:"SVECW"},
        {id:"20b01a12i4",
        name:"Kavya",
        college:"SVECW"},
    ];





    
    return (
        <div >
            {
                Student.map((s)=>
                <div ><h3><li><Link  to={`/Studentlist/${s.id}/${s.name}/${s.college}`}
                >{s.name}</Link></li></h3></div>)
            }
            <Outlet />
        </div>

    );

       
};

export default Studentlist;


