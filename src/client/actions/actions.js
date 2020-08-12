

export const addJob = (userId, companyName) => ({
  type: 'ADD_JOB',
  payload: userId,
  company: companyName
})

export const addEvent = (userId, companyName, event) => ({
  type: 'ADD_EVENT',
  payload: userId,
  companyName: companyName,
  event: event
})

export const setPipeline = (pipeline) => ({
  type: 'SET_PIPELINE',
  payload: pipeline
})