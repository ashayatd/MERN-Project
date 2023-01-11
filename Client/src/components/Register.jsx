import { useState } from "react";
import React from "react";


export default function Regs() {


  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

 const registerChanges = async (e)=>{
  e.preventDefault();
  if(cpassword===password){
    console.log(email, password, username);
    const res = await fetch('/user/register', {
    method: 'POST',
    body: JSON.stringify({
      data: {email:email, password:password, username:username}
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
    if(res.status === 200){
      window.alert("All Input required! ")
    }
    else if(res.status === 409 ){
      
        window.alert("Already Register username please login");
    }
    else{
      window.alert("Registration Done! Go To login");
      
    }
  }
  else {
    alert("Password Not matched!")
    return
  }
}

function chaeckSet(e){
  setcpassword(e.target.value);
}
  return (
    <div>
      <form method="POST">
        <h2>Welcome !</h2>
        <h2>Sign in to </h2>
        <p>Lorem Ipsum is simply </p>
        <h2>Email</h2>
          <input name="email"
            onChange={(e)=>{setemail(e.target.value)}}
            value={email}
            type={"email"}
          />
        <h2>Username</h2>

          <input name="Username"
            onChange={(e)=>{setusername(e.target.value)}}
            value={username}
            type={"name"}/>

        <h2>Password</h2>

          <input name="Password"
          onChange={(e)=>{setpassword(e.target.value)}}
          value={password}
          type={"password"} />

        <h2>Confirm Password</h2>

          <input name="cpassword"
          onChange={chaeckSet}
          value={cpassword}
          type={"password"}/><br/>

        <button onClick={(registerChanges)}>Register</button>
        <p>
          Have an Account? <span>Login</span>
        </p>
      </form>
      <div>
        <img src="https://i.ibb.co/5YCbHPH/small-team-discussing-ideas-2194220-0-1.png" alt="" />
      </div>
    </div>
  );
}
