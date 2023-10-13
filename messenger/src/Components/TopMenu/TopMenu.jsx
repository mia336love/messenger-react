import { NavLink } from 'react-router-dom';
import styles from '../TopMenu/TopMenu.module.css';
// через map
// массив объектов 

const TopMenu = function() {
    return (
      <div className="top-menu">
        <div className={styles.avatar}>
        <img src="https://i.pinimg.com/564x/9f/f1/04/9ff104c0e0d7017dbd296e358756999b.jpg" alt='avatar'></img>
        
        <p className={styles.userName}>lovely lovely</p>

        </div>
      
        <ul className={styles.menu}>
          <li>
            <img src='https://img.icons8.com/?size=256&id=73&format=png' alt='home'/>
            <NavLink to='/home'>HOME</NavLink>
          </li>
          <li>
            <img src='https://img.icons8.com/?size=256&id=3726&format=png' alt='chat'/>
            <NavLink to='/chat'>CHAT</NavLink>
          </li>
          <li>
            <img src='https://img.icons8.com/?size=256&id=23264&format=png' alt='contact'/>
            <NavLink to='/contact'>CONTACT</NavLink>
          </li>
          <li>
            <img src='https://img.icons8.com/?size=256&id=54481&format=png' alt='notifications'/>
            <NavLink to='/notifications'>NOTIFICATIONS</NavLink>
          </li>
          <li>
            <img src='https://img.icons8.com/?size=256&id=23&format=png' alt='calendar'/>
            <NavLink to='/calendar'>CALENDAR</NavLink>
          </li>
          <li>
            <img src='https://img.icons8.com/?size=256&id=364&format=png' alt='settings'/>
            <NavLink to='/settings'>SETTINGS</NavLink>
          </li>
        </ul>

        <ul className={styles.logout}>
          <li>
              <img src='https://img.icons8.com/?size=256&id=2445&format=png' alt='contact'/>
              <span>LOG OUT</span>
          </li> 
        </ul>
          
        
      </div>
    )
  }

export default TopMenu;
