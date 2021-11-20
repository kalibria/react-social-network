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
// import {addPostActionCreator, updateNewPostTextActionCreator} from "./redux/profileReducer";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friends={props.state.navbar.friends}/>
                <div className='app-wrapper-content'>
                    <Route path='/messages' render={() =>
                        <Dialogs
                            state={props.state.dialogsPage}
                            dispatch={props.dispatch}
                        />
                    }/>
                    <Route path='/profile' render={() =>
                        <Profile
                            posts={props.state.profilePage.posts}
                            newPostText={props.state.profilePage.newPostText}
                            dispatch={props.dispatch}
                        />}
                    />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;




