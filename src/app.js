import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import myStore from './store/myStore';
import AppRouter from './routers/AppRouter'
import './styles/main.scss';

const store = myStore();

store.subscribe(()=> {
    console.log(store.getState())
});

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'));
