import styles from '../TopMenu/TopMenu.module.css';
// через map
// массив объектов 

const TopMenu = function() {
    return (
      <div className="top-menu">
        <div className={styles.avatar}>
        <img src="https://i.pinimg.com/564x/9f/f1/04/9ff104c0e0d7017dbd296e358756999b.jpg" alt='avatar'></img>
        
        <p id='userName'>mia love</p>

        </div>
      
        {/* <ul className={styles.menu}>
          <li>HOME</li>
          <img src='https://cdn.icon-icons.com/icons2/2716/PNG/512/chat_circle_dots_icon_173273.png' alt='chat'></img><li>CHAT</li>
          <img src='https://cdn1.iconfinder.com/data/icons/essential-21/128/User-512.png' alt='contact'></img><li>CONTACT</li>
          <li>NOTIFICATIONS</li>
          <li>CALENDAR</li>
          <li>SETTINGS</li>
        </ul> */}

      
        <ul className={styles.menu}>
          <li>
            <img src='https://img.icons8.com/?size=256&id=73&format=png' alt='home'/>
            <span>HOME</span>
          </li>
          <li>
            <img src='https://img.icons8.com/?size=256&id=3726&format=png' alt='chat'/>
            <span>CHAT</span>
          </li>
          <li>
            <img src='https://img.icons8.com/?size=256&id=23264&format=png' alt='contact'/>
            <span>CONTACT</span>
          </li>
          <li>
            <img src='https://img.icons8.com/?size=256&id=54481&format=png' alt='notifications'/>
            <span>NOTIFICATIONS</span>
          </li>
          <li>
            <img src='https://img.icons8.com/?size=256&id=23&format=png' alt='calendar'/>
            <span>CALENDAR</span>
          </li>
          <li>
            <img src='https://img.icons8.com/?size=256&id=364&format=png' alt='settings'/>
            <span>SETTINGS </span>
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
