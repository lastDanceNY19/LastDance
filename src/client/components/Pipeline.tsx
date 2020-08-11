import React , { useEffect, useState } from 'react';
import Job from './Job';

export const Pipeline = () => {
  return(
    <div>
        <button  >Pipeline</button> 
        <button  >History</button> 

        <Job/>
    </div>
  );
};

export default Pipeline;