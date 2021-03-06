// import actions
import {TOGGLE_TIMER, NEW_TIMER, UPDATE} from '../actions'
import Timer from '../Timer'

const timerReducer = (state = [], action) => {
    switch(action.type) {
        case NEW_TIMER:
            // Add a new timer, return a copy of state (new array with new timer)

            // if action had a name use that, else make a new name 
            const name = action.payload.name ? action.payload.name : `Timer: ${state.length}`
            //return copy of state with added new timer
            return [...state, new Timer(name) ]

        case TOGGLE_TIMER:
            // Invert the isRunning property of timer at index,
            // return a copy of state
            const newState = state.map((timer, index) => {
                if(action.payload.index === index) {
                    // make a copy (spread operator)
                    // Invert the isRunning property 
                    //of timer at index, return a copy of state
                    return {...timer, isRunning: !timer.isRunning}
                }
            //if index doesn't match
            return timer
            })
            return newState

        //for all timers where isRunning is True, make a new object where Time is 
        //old time + deltatime
        case UPDATE:
            return state.map((timer) => {
                if (timer.isRunning) {
                    timer = {...timer, time: timer.time += action.payload.deltaTime}
                }
                return timer
            })

        default:
            return state
    }   
}   

export default timerReducer; 