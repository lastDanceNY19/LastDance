import React from 'react';
import Pipeline from './components/Pipeline'
import Groups from './components/Groups'

export const Container = () => {
  return(
    <div>
      <div>
        <h1>Number of Jobs Applied: </h1>
        <h1>Job Offers: </h1>
      </div>

      <div>Hi Brian testing</div>

      <div className = 'main-container-2'>
        <Pipeline />
        <Groups />
      </div>
    </div>
  );
};

export default Container;