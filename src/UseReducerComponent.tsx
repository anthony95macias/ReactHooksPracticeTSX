import React, { useReducer } from 'react';

const initialState = {
    counter: 100,
};

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

type ACTIONTYPES =
    | { type: typeof INCREMENT; payload: number }
    | { type: typeof DECREMENT; payload: number };

function counterReducer(state: typeof initialState, action: ACTIONTYPES) {
switch (action.type) {
        case INCREMENT:
    return { ...state, counter: state.counter + action.payload };
        case DECREMENT:
    return { ...state, counter: state.counter - action.payload };
        default:
    return state;
    }
}

function UseReducerComponent() {
    const [state, dispatch] = useReducer(counterReducer, initialState);

return (
    <div>
        <div>Count: {state.counter}</div>
            <button onClick={() => dispatch({ type: INCREMENT, payload: 10 })}>
        Increment
    </button>
        <button onClick={() => dispatch({ type: DECREMENT, payload: 10 })}>
        Decrement
        </button>
        </div>
    );
}

export default UseReducerComponent;
