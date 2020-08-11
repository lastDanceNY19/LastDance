import React , { useEffect, useState, useRef } from 'react';
import Job from './Job';
import { connect} from 'react-redux'


import * as actions from '../actions/actions';

export const Pipeline: React.FC = (props: any) => {
  const nameEl = useRef(null)

  return(
    <div>
        <button>Pipeline</button> 
        <button>History</button> 

        <form onSubmit={(e) => {
          e.preventDefault()
          let company = nameEl.current.value
          let userId = 1
          props.addJob(userId, company)
        }}>
          <label>Company Name: </label>
          <input type="text" ref={nameEl}></input>
          <button type='submit'>Add Application</button>
        </form>

        {props.jobs.map((el:any) => (
          <Job company={el.company}/>
        ))}
       
     
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state, 'state')
  return {
    jobs: state.jobs
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addJob: (e: any, company: any) => {
      dispatch(actions.addJob(e, company))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pipeline);



