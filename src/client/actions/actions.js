

export const addJob = (userId, companyName) => ({
  type: 'ADD_JOB',
  payload: userId,
  company: companyName
})