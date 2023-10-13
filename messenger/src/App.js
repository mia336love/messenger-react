import React from 'react';
import TopMenu from './Components/TopMenu/TopMenu';

import Home from './Components/Home/Home';
import Chat from './Components/Chat/Chat';
import Contact from './Components/Contact/Contact';
import Notifications from './Components/Notifications/Notifications';
import Calendar from './Components/Calendar/Calendar';
import Settings from './Components/Settings/Settings';



import styles from './App.module.css';

import { Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className={styles.App}>
      <TopMenu />
      <div>
        <Routes>
          <Route path='/home' Component={Home}/>
          <Route path='/chat' Component={Chat}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/notifications' Component={Notifications}/>
          <Route path='/calendar' Component={Calendar}/>
          <Route path='/settings' Component={Settings}/>
          
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;

