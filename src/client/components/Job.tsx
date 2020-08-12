import React from 'react';
import { connect} from 'react-redux'
import * as actions from '../actions/actions';

export const Job = (props: any) => {
  return(
    <div>
        <div>
          <h1>{props.company} </h1>
          <h1>Events {props.events }</h1>
        </div>

        <button> Add Event </button>
        <button> Accepted </button>
        <button> Rejected </button>
    </div>
  );
};



const mapDispatchToProps = (dispatch: any) => {
  return {
    addJob: (e: any, company: any) => {
      dispatch(actions.addJob(e, company))
    }
  }
}


export default connect(mapDispatchToProps)(Job);

