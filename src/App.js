import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import {Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NewsContainer from './components/News/NewsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      
      <HeaderContainer />

      <Navbar />
      <div className='app-wraper-content'>
        <Route path='/dialogs'
          render={() => <DialogsContainer />} />
        <Route path='/profile/:userId?'
          render={() => <ProfileContainer />} />
        <Route path='/news'
          render={() => <NewsContainer />} />
        <Route path='/music'
          render={() => <Music />} />
        <Route path='/settings'
          render={() => <Settings />} />
        <Route path='/friends'
          render={() => <Friends />} />
        <Route path='/users'
          render={() => <UsersContainer />} />

        <Route path='/login'
          render={() => <Login />} />
      </div>
    </div>
  )
}

export default App;
