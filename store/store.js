import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

const initialState = {
    count:0
}

const userInitialState = {
    username: 'han'
}

const ADD = 'ADD'
// let count = 1 do not change state directly on reducer.
function counterReducer (state = initialState, action) {
    console.log(state, action)
    switch (action.type) {
        case ADD:
            return {count: state.count + (action.num || 1)} //change whole object instead of using state.count + 1, return state
        default:
            return state
    }
}

const UPDATE_USERNAME = 'UPDATE_USERNAME'
function userReducer(state = userInitialState, action){
    switch(action.type){
        case UPDATE_USERNAME:
            return {
                ...state,// keep other attribute same
                username: action.name
            }
        default:
            return state
    }
}

const allReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
})
const store = createStore(allReducer, {
    counter: initialState,
    user: userInitialState
},
    applyMiddleware(ReduxThunk),
)

//action creator
export function add (num) {
    return {
        type: ADD,
        num
    }
}

function addAsync(num){
    return (dispatch) => {
        setTimeout(() => {
            dispatch(add(num))
        }, 1000)
    }
}

// console.log(store.getState())
store.dispatch(addAsync(5))
// console.log(store.getState())

store.subscribe(() => {
    console.log('store changed ', store.getState())
})
store.dispatch({ type: ADD })
store.dispatch({ type: UPDATE_USERNAME, name:'DaShaBi'})

export default function initialzeStore(state) {
    const store = createStore(
        allReducer,
        Object.assign({},{
           counter: initialState,
           user: userInitialState,
          },state),
        applyMiddleware(ReduxThunk),
    )
    return store
}