import { createStore } from 'redux';

//* Actions Generators 

const incrementCount= ( {incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});


//!------------------------------------------------------------------

//* Increment Count

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 10 }));


const store= createStore((state = { count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        default:
            return state  
    }
});

const unsubscribe= store.subscribe(() => {
    console.log(store.getState());
});




//* Increment Count

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 10 }));


//* Reset Count

store.dispatch(resetCount());


//* Decrement Count

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 20 }));

//* Set Count

store.dispatch(setCount({ count: 101 }));

store.dispatch(setCount());
