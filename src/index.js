import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

const initialState = {
    counter: 5
}

const reducer = (state, action) => {
    console.log(state, action)
    switch (action.type) {
        case 'ADD':
            return {counter: state.counter + action.payload}
        default:
            return state
    }
}

const store = createStore(reducer, initialState)

const add = (int =1)=>{
    return {type:'ADD',payload:int}
}

const render = () => {
    const state = store.getState()
    const counter = state.counter
    ReactDOM.render(<div>
        {counter}
        <button onClick={
            () => {
                store.dispatch(add())
            }}>+
        </button>
        <button onClick={() => {
            store.dispatch(add(-1))
        }}>-
        </button>
        <button onClick={() => {
            store.dispatch(add(5))
        }}>+5
        </button>
    </div>, document.getElementById('root'));
}

store.subscribe(render)
render()