import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {DialogsContainer} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderComponent from "./components/Header/HeaderComponent";
import Login from "./components/Login/login";
import {connect} from "react-redux";
import {getAuthMe, logout} from "./redux/authReducer";
import {compose} from "redux";
import Preloader from "./common/preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";




class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialized){
            return <Preloader />
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderComponent/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/messages' render={() =>
                            <DialogsContainer/>
                        }/>
                        <Route path='/profile' render={() =>
                            <ProfileContainer/>}
                        />
                        <Route path='/profile/:userId' render={() =>
                            <ProfileContainer/>}
                        />
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
};

const mapStatToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
    connect(mapStatToProps, {initializeApp, getAuthMe}))(App);

