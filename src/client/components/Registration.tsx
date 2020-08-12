import React, { useRef } from 'react';

export const Registration = (props: any) => {

  const username = useRef(null);
  const password = useRef(null);
  
  return (
    <div>
        <form onSubmit={(e) => {
          e.preventDefault();
        }}>
          <label>Username</label>
          <input type="text" ref={username}></input>
          <label>Password</label>
          <input type="text" ref={password}></input>
          <button type='submit'>Submit</button>
        </form>
    </div>
  );
};

export default Registration;