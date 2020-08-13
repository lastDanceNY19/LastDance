import React from 'react';
import { Link, useHistory } from "react-router-dom";
import './styles/main.scss'
export const Main = (props: any) => {
  const history = useHistory();

  function sendToSignup (){
    history.push('/signup')
  }

  function sendToLogin (){
    history.push('/login')
  }

  return(
    <div className='Main'>
      <h1>Pipeline</h1>
      <button onClick={sendToSignup}>Signup</button>
      <button onClick={sendToLogin}> Login</button>
    </div>
  );
};

export default Main;