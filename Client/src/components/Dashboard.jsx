import { React, useState } from "react";

function Dash() {

const [data, setdata] = useState([]);
const [Input, setInput] = useState("");
let [count, setcount] = useState(0);

  function addList() {
    if (data === "") {
      alert("Please Enter Some Data");
    } else {
        if(count>5){
            alert("Not more than 6 Tasks 😫")
        }
        else{
            setcount(count+1);
            setInput("");
            setdata([...data, Input ]);
        }
    }
  }

  return (
    <div>
      <>
        <h2>Hello</h2>
        <h2>John Doe </h2>
        <p>Good to see you here!</p>
        <p>{Date()}</p>

        {data.map((elem, key)=>{
            return(<ul key={key}>
              <li> {elem} </li>
            </ul>)
        })}

        <input
          value={Input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <button onClick={addList}>Add New Task</button>

        <button onClick={() => {setdata([])}}>Delete List</button>
        <p>Logout</p>
      </>
      <div>
        <img src="https://i.ibb.co/5YCbHPH/small-team-discussing-ideas-2194220-0-1.png" />
      </div>
    </div>
  );
}

export default Dash;
