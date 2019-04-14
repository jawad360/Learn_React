import {createStore} from 'redux';

const reducer = (state = {number : 0, numberHistory}, action) => {
    switch (action.type){
        case "ADD":
            break;
        case "SUB":
            break;
    }
}

const store = createStore(reducer, {});

store.dispatch({
    number:10
})