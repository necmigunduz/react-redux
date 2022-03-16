import { createStore } from "redux";

const reducer = (state={counter: 100}, action) => {
    if(action.type === 'INC'){
        return {counter: state.counter + 1}
    } else if(action.type === 'DEC') {
        return {counter: state.counter - 1}
    }
    return state
};

const store = createStore(reducer);

export default store;