import React, { useRef } from 'react';
import { Link, useHistory } from "react-router-dom";
import '../styles/login.scss';
const axios = require('axios');

export const Login = (props: any) => {
  const history = useHistory();
  const username = useRef(null);
  const password = useRef(null);
  let errorMessage = '';

  async function handleSubmitButton(e: any) {
    e.preventDefault();

    await axios.post('/create_user', {
      username: username.current.value,
      password: password.current.value,
    }).then(() => history.push('/pipeline'))
      .catch((error: any) => { 
        console.log('error ', error)
      })
  };

  return (
    <div className='Login'>
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