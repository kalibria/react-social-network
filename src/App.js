import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Dialogs, {DialogsContainer} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderComponent from "./components/Header/HeaderComponent";
import LoginPage from "./components/login";




const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderComponent/>
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/messages' render={() =>
                        <DialogsContainer />
                    }/>
                    <Route path='/profile' render={() =>
                        <ProfileContainer />}
                    />
                    <Route path='/profile/:userId' render={() =>
                        <ProfileContainer />}
                    />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/login' render={() => <LoginPage />} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;




