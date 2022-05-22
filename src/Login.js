import React, { useState } from 'react';
import './styles.css';
const Login = () => {
  let data={
    name:"username",
    password:"Password",
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
  localStorage.setItem('form',JSON.stringify(input));
  };
  return (
    <div>
      <div className="form" >
        <div  className='ui cards'>
          <form className="ui form" onSubmit={submit}>
            <div className='wide field'>
              <input type="text" name="name" placeholder='Username' value={input.name} onChange={change}/>
            </div>
            <div className='wide field'>
              <input type="password" name="password" placeholder='password' value={input.password} onChange={change}/>
            </div>
           
              <div className='field'>
                <div className='ui checkbox'>
                  <input type="checkbox" tabIndex= '0' name= 'agree' value= 'True' onChange={change}/>
                  <label htmlFor="">Remember Me</label>
                </div>
              </div>
              <button className='ui yellow button'>Login</button>
          </form>
        </div>
      </div>
    </div>
     
  );
};

export default Login;