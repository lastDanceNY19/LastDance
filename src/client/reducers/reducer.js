
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
      console.log('Adding Job!')
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
      default: return state
  }
}

export default reducer