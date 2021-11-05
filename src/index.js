 import React from 'react';
import './index.css';
 import state, {addPost, subscribe, updateNewPostText} from "./redux/state";
 import ReactDOM from "react-dom";
 import App from "./App";

 let rerenderReactDom = (state) => {
  ReactDOM.render(
      <React.StrictMode>
       <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
      </React.StrictMode>,
      document.getElementById('root')
  )
 }

subscribe(rerenderReactDom)

 rerenderReactDom(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


