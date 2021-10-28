import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

let posts = [
    {id: "1", post:"It's my first post", likesCount: "15"},
    {id: "2", post:"Hello world!!!", likesCount: "25"},
]

let dialogs =[
    {id:"1", name: "Dima"},
    {id:"2", name: "Katy"},
    {id:"3", name: "Sasha"},
    {id:"4", name: "Vany"},
    {id:"5", name: "Tany"},
    {id:"6", name: "Sergei"}
]

let messages = [
    {id: "1", message: "Hello"},
    {id: "2", message: "How are you?"}
]

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/messages' render={() =><Dialogs dialogs={dialogs} messages={messages} /> }/>
                    <Route path='/profile' render={() => <Profile post = {posts} />}/>
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;




