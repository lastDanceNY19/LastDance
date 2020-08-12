import React from 'react';


export const Group = (props: any) => {

  


  return(
    <div>
        <h1>{props.group}</h1>
        <h1>Number of Users {props.users.length}</h1>
        <button>Join</button> 
    </div>
  );
};

export default Group;