import React, { useState } from 'react';
import './styles.css';
const Signup = () => {
  let data={
    regno:"registrationno",
    fname:"Firstname",
    lname:"Lastname",
    radio:"Gender",
    list:"Country",


  };
  const [input,setInput]=useState("");
  const change=(e)=>{
    const Name=e.target.name;
    const Value=e.target.value;
    setInput({ ...input,[Name]:Value});
  };
  const submit=(e)=>{
   e.preventDefault();
  //  console.log(input);
  localStorage.setItem(input);
  };
  return (
    <div>
      <div className="form" >
        <div  className='ui cards'>
          <form className="ui form" onSubmit={submit}>
            <div className=' wide field'>
              <input type="text" name="regno" placeholder='Registrationno' value={input.regno} onChange={change}/>
            </div>
           
            <div className="fields">
              <div className="field">
                <input type="text" placeholder='First Name' name="First Name" value={input.fname} onChange={change} />
              </div>
              <div className="field">
                <input type="text" placeholder="Last Name" name="Last Name" value={input.lname} onChange={change} />
              </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox">
                 <input type="radio" name={data.radio} tabIndex="0" value="Male" onChange={change} />
                 <label >Male</label>
                </div>
                <div className="ui radio checkbox">
                 <input type="radio" name={data.radio} tabIndex="0" value="Female" onChange={change} />
                 <label >Female</label>
                </div>
              </div>
              <select className="ui dropdown">
                <option value="">Select Branch</option>
                <option value="India" name="country" onChange={change}>CSE</option>
                <option value="China" name="country" onChange={change}>IT</option>
                <option value="Brazil" name="country" onChange={change}>ECE</option>
                <option value="US" name="country" onChange={change}>AI&DS</option>
              </select>
              <div className='field'>
                <div className='ui checkbox'>
                  <input type="checkbox" tabIndex= '0' name= 'terms' value= 'True' onChange={change}/>
                  <label htmlFor="">I agree with terms and conditions</label>
                </div>
              </div>

              <button className='ui orange button'>REGISTER</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;