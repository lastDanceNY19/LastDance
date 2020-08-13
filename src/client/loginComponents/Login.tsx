import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export const Login = (props: any) => {
  const history = useHistory();

  function handleLogin() {
    history.push('/pipeline');
  }

  return (
    <div>
      <button onClick={handleLogin}>Login!</button>
    </div>
  );
};

export default Login;
