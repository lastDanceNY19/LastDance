import React from 'react';
import Pipeline from './components/Pipeline'
import Groups from './components/Groups'
import { connect} from 'react-redux'

export const Container = (props: any) => {

  return(
    <div>
      <div>
      <h1>{props.title}</h1>
        <h1>Number of Jobs Applied: 'insert num off of redux store' </h1>
        <h1>Job Offers: 'insert num off of redux store' </h1>
      </div>

      <div>Hi 'insert user' testing</div>

      <div className='main-container-2'>
        <Pipeline />
        <Groups />
      </div>
    </div>
  );
};

const mapStateToProps  = (state: any) => {
  return {
    title : state.title 
  }
}

export default connect(mapStateToProps)(Container);