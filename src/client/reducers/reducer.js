
import * as actions from '../actions/actions';


const defaultState = {
  jobs: [{company: 'Amazon', events: ['phone screen 7/3'], status: true}],
  groups: [{name: 'cohort 19', users: 10},{name: 'App Academy', users: 15}],
  title: 'Test App'
}


function reducer(state = defaultState, action){
  let jobList;
  let groupList;

  switch(action.type){
    
    case "ADD_JOB":
      
      const newJob = {
        company: action.company,
        events: [],
        status: true
      }

      jobList = state.jobs.slice()
      jobList.push(newJob)

      return {
        ...state,
        jobs: jobList
      }
      case"ADD_EVENT":
        console.log('Adding Event!')
      case "SET_PIPELINE": {
        return {...state, jobs: action.payload}
      }

      default: return state
  }
}

export const addApplication = () => (dispatch, getState) => {
  const jobs = getState().jobs;
  fetch('/add_application', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(jobs)
  })

  alert("success")
}  

export const getPipeline = () => async (dispatch, getState) => {
  const pipeline = await fetch('/get_pipeline').then(res => res.json())
  dispatch(actions.setPipeline(pipeline))
}

export default reducer