import * as actions from '../actions/actions';

const defaultState = {
  // jobs: [{company: 'Amazon', events: ['phone screen 7/3'], status: true}],
  jobs: [],
  groups: [],
  idJob: 10000,
  title: 'Test App',
};


function reducer(state = defaultState, action) {
  // let jobList;
  let groupList;

  switch (action.type) {
    case 'ADD_JOB':
      // console.log(action.company)

      const newJob = {
        company: action.payload,
        events: [],
        status: 'pending',
        id: state.idJob
      };

      let jobList = state.jobs.slice();
      jobList.push(newJob);

      return {
        ...state,
        jobs: jobList,
          idJob: state.idJob + 1
      };

    case 'ADD_EVENT':


      let newJobList = JSON.parse(JSON.stringify(state.jobs))

      newJobList.forEach((el) => {
        if (el.id === action.payload) {
          el.events.push(action.event)
        }
      })





      // const mapped = newJobList.map((el) => {
      //   if (el.id === action.payload) {
      //     // return el.events.push(action.event)
      //     return [...el.events, action.event]
      //   } else {
      //     return el;
      //   }
      // })

      console.log(state, 'state', newJobList, 'job list')

      return {
        ...state,
        jobs: newJobList
      };


    case 'SET_PIPELINE': {
      return {
        ...state,
        jobs: action.payload
      };
    }

    case 'SET_GROUPS': {
      return {
        ...state,
        groups: action.payload
      };
    }

    default:
      return state;
  }
}

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