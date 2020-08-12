import React, { useRef } from 'react';
import { Link, useHistory } from "react-router-dom";
const axios = require('axios');

export const Login = (props: any) => {
  const history = useHistory();

  const username = useRef(null);
  const password = useRef(null);

  function handleSubmitButton(e: any) {
    console.log("call to submit button ")
    e.preventDefault();

    // let result = await fetch('/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ body: {username: username, password: password}}),
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // }).then((response) => response.json())
    //   .catch((error) => console.log("error verifying user ", error))
    
    let userNameOut: any = username.current.value;

    axios.post('/login', {
      Username: userNameOut,
    }).then((response: any) => console.log("response ", response))
      .catch((error: any) => console.log('error ', error))

  };


    // if (result) history.push('/pipeline');
    // else console.log('could not verify user ');


  return(
    <div>
        <form>
          <label>Username</label>
          <input type="text" ref={username}></input>
          <label>Password</label>
          <input type="text" ref={password}></input>
          <button onClick={handleSubmitButton}>Submit</button> 
        </form>
    </div>
  );
};

export default Login;