export const NEW_TIMER = 'NEW_TIMER'
export const TOGGLE_TIMER = 'TOGGLE_TIMER'
export const SELECT_TIMER = 'SELECT_TIMER'
export const UPDATE = 'UPDATE'

// ADD_TIMER - Creating a timer will add a new
// timer object to an array of timer objects held 
// by the store.
export const addTimer = (name) => {
  return {
    type: NEW_TIMER, //type of action
    payload: {name}
  }
}

// TOGGLE_TIMER - Starts or stops a timer. 
// This requires the index of the timer.
export const toggleTimer = (index) => {
  return {
    type: TOGGLE_TIMER,
    payload: {index}
  }
}

// SELECT_TIMER - Selects a timer. Selecting a timer 
// will display details about that timer. This 
// requires the index of the timer.
export const selectTimer = (index) => {
  return {
    type: SELECT_TIMER,
    payload: {index}
  }
}

export const update = (deltaTime) => {
  return {
    type: UPDATE,
    payload: {deltaTime}
  }
}