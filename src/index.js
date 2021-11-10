import React from 'react';
import './index.css';
import store from "./redux/state";
// import state, {addPost, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

let rerenderReactDom = (appStore) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={appStore}
            />
        </React.StrictMode>,
        document.getElementById('root')
    )
}
rerenderReactDom(store);
store.subscribe(rerenderReactDom);

// subscribe(rerenderReactDom)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


