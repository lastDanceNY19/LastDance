import * as actions from '../actions/actions';

const defaultState = {
  jobs: [],
  groups: [],
  idJob: 10000,
  title: 'Test App',
};

function reducer(state = defaultState, action) {
  // let jobList;
  let groupList;

  // ADDS JOB APPLICATION
  switch (action.type) {
    case 'ADD_JOB':
      const newJob = {
        company: action.payload,
        events: [],
        status: 'pending',
        id: state.idJob,
      };

      let jobList = state.jobs.slice();
      jobList.push(newJob);

      return {
        ...state,
        jobs: jobList,
        idJob: state.idJob + 1,
      };

    // ADD EVENT/UPDATE STATUS
    case 'ADD_EVENT':
      let newJobList = JSON.parse(JSON.stringify(state.jobs));

      newJobList.forEach((el) => {
        if (el.id === action.payload) {
          if (action.event.length > 0) {
            el.events.push(action.event);
          }

          if (action.status) {
            el.status = action.status;
          }
        }
      });

      return {
        ...state,
        jobs: newJobList,
      };

    case 'SET_PIPELINE': {
      return {
        ...state,
        jobs: action.payload,
      };
    }

    case 'SET_GROUPS': {
      return {
        ...state,
        groups: action.payload,
      };
    }

    default:
      return state;
  }
}

// ignore bottom two functions, was trying to implement redux thunk but it is not needed
export const addApplication = () => (dispatch, getState) => {
  const jobs = getState().jobs;
  fetch('/add_application', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(jobs),
  });

  alert('success');
};

export const getPipeline = () => async (dispatch, getState) => {
  console.log('getting pipeline');
  const pipeline = await fetch('/get_pipeline').then((res) => res.json());
  dispatch(actions.setPipeline(pipeline));
};

export default reducer;
