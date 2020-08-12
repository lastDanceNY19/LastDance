import React from 'react';


export const Group = (props: any) => {
  return(
    <div>
        <h1>{props.group}</h1>
        <h1>{props.users}</h1>
        <button>Join</button> 
    </div>
  );
};

export default Group;