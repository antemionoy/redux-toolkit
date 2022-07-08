import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './slices/index';

const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);

console.log(store.getState())

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);