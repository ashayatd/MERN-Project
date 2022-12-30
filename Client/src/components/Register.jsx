import { useState } from "react";
import React from "react";

export default function Regs() {

  const [State] = useState([{
    Email: 'abc', 
    Username: 'abc', 
    Password: 'abc', 
    Cpassword: 'abc'
  }]);

  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

 const registerChanges = async (e)=>{
  e.preventDefault();
  State[0].Email = email;
  State[0].Cpassword = cpassword;
  State[0].Password = password;
  State[0].Username = username;
  const {Email, Password, Username} = State;
  const res = await fetch("/register", {
    method: "POST",
    body:JSON.stringify({
    Email, Password, Username
    })
  })
  const data = await res.json();
  if(data.status===200 || data.status===409){
    alert("Server Error");
  }
  else{
    alert("Sent Successfully");
  }
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
          onChange={(e)=>{setcpassword(e.target.value)}}
          value={cpassword}
          type={"password"}/>

        <button onClick={(registerChanges)}>Register</button>
        <p>
          Have an Account? <span></span>
        </p>
      </form>
      <div>
        <img src="https://i.ibb.co/5YCbHPH/small-team-discussing-ideas-2194220-0-1.png" />
      </div>
    </div>
  );
}
