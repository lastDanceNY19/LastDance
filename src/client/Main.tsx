import React from 'react';
import { Link, useHistory } from "react-router-dom";

export const Main = (props: any) => {
  const history = useHistory();

  function sendToSignup (){
    history.push('/signup')
  }

  function sendToLogin (){
    history.push('/login')
  }

  return(
    <div>
        <button onClick={sendToSignup}>Signup</button>
        <button onClick={sendToLogin}> Login</button>
    </div>
  );
};

export default Main;