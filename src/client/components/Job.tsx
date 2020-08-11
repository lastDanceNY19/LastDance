import React from 'react';


export const Job = (props: any) => {
  return(
    <div>
        <div>
          <h1>{props.company} </h1>
          <h1>Events</h1>
        </div>

        <button> Add Event </button>
        <button> Accepted </button>
        <button> Rejected </button>
    </div>
  );
};

export default Job;