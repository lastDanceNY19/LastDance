import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/signup.scss';
const axios = require('axios');

export const signUp = (props: any) => {
  const history = useHistory();
  const username = useRef(null);
  const password = useRef(null);

  async function handleSubmitButton(e: any) {
    e.preventDefault();

    await axios
      .post('/create_user', {
        username: username.current.value,
        password: password.current.value,
      })
      .then((response: any) => {
        if (response.status === 200) {
          history.push('/login');
        } else alert('there was an error creating your account');
      })
      .catch((error: any) => {
        console.log('error ', error);
      });
  }

  return (
    <div className='Signup'>
      <form>
        <h2>Signup</h2>
        <input type='text' ref={username} placeholder='username'></input>
        <input type='text' ref={password} placeholder='password'></input>
        <button onClick={handleSubmitButton}>Submit</button>
      </form>
    </div>
  );
};

export default signUp;
