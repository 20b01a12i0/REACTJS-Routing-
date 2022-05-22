import React from 'react';
import {useParams} from 'react-router-dom';
import Studentlist from './Studentlist';
import "./styles.css";
const Studentdetails = () => {
    const param=useParams();
    const id=param.id;
    const name=param.name;
    const college=param.college;
    return (
       <div className="table1">
          <table className="ui very basic collapsing celled table">
  <thead>
    <tr><th>Student</th>
    <th>Details</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>
        <h4 className="ui image header">
          
          <div className="content">
            Registration Number
            
        </div>
      </h4></td>
      <td>
        {id}
      </td>
    </tr>
    <tr>
      <td>
        <h4 className="ui image header">

          <div className="content">
            Name

        </div>
      </h4></td>
      <td>
        {name}
      </td>
    </tr>
    <tr>
      <td>
        <h4 className="ui image header">

          <div className="content">
            College

        </div>
      </h4></td>
      <td>
        {college}
      </td>
    </tr>
    {/* <tr>
      <td>
        <h4 className="ui image header">

          <div className="content">
            Mark
            <div className="sub header">Executive
          </div>
        </div>
      </h4></td>
      <td>
        11
      </td>
    </tr> */}
  </tbody>
</table>
       </div>
    );
};

export default Studentdetails;