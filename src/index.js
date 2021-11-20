import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";

let rerenderReactDom = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                store={store}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    )
}
rerenderReactDom(store.getState());
store.subscribe(() => {rerenderReactDom(store.getState())});

// subscribe(rerenderReactDom)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


