export const addJob = (companyName) => ({
  type: 'ADD_JOB',
  payload: companyName,
});

export const addEvent = (jobId, event, status) => ({
  type: 'ADD_EVENT',
  payload: jobId,
  event: event,
  status: status,
});

export const setPipeline = (pipeline) => ({
  type: 'SET_PIPELINE',
  payload: pipeline,
});

export const setGroups = (pipeline) => ({
  type: 'SET_GROUPS',
  payload: pipeline,
});
