import React, { useRef } from 'react';
import { Link, useHistory } from "react-router-dom";
const axios = require('axios');

export const Login = (props: any) => {
  const history = useHistory();
  const username = useRef(null);
  const password = useRef(null);
  let errorMessage = '';

  async function handleSubmitButton(e: any) {
    e.preventDefault();

    let result = await axios.post('/login', {
      username: username.current.value,
      password: password.current.value,
    }).catch((error: any) => console.log('error ', error))

    if (!result.data.auth) errorMessage = 'Sorry, invalid username or password';
    else history.push('/pipeline');
  };

  return (
    <div>
        <form>
          <label>Username</label>
          <input type="text" ref={username}></input>
          <label>Password</label>
          <input type="text" ref={password}></input>
          <button onClick={handleSubmitButton}>Submit</button> 
          <div>{errorMessage}</div>
        </form>
    </div>
  );
};

export default Login;