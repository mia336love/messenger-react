import styles from '../Chat/Chat.module.css';
import React from 'react';

const chatData = [
  {
    id: 1,
    name: 'Luy Robin',
    status: '...writes',
    image: 'https://i.pinimg.com/564x/24/4a/17/244a17c4d414764b4b59d4f923a7805e.jpg',
    messageTime: '1 minute ago',
    voiceMessage: {
        duration: null,
        // icon: 'https://img.icons8.com/?size=256&id=jkqQE2I90I8R&format=png',
      },
    filesType: {
      files: null,
      photo: null,
      video: null,
    },
    message: "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).",
    indication: 2,
    type: 'text',
  },
  {
    id: 2,
    name: 'Jared Sunn',
    status: 'records voice message',
    image: 'https://i.pinimg.com/564x/3d/28/ca/3d28ca1c4d55b52a1eb9a2435eb6d211.jpg',
    messageTime: '1 minute ago',
    voiceMessage: {
      duration: '01:15',
      // icon: 'https://img.icons8.com/?size=256&id=jkqQE2I90I8R&format=png',
    },
    filesType: {
      files: 'Files (x2)',
      photo: 'Photo',
      video: null,
    },
    indication: 1,
    type: 'voice',
  },
  {
    id: 3,
    name: 'aaaaa',
    status: '...writes',
    image: 'https://i.pinimg.com/564x/24/4a/17/244a17c4d414764b4b59d4f923a7805e.jpg',
    messageTime: '1 minute ago',
    voiceMessage: {
        duration: null,
        // icon: 'https://img.icons8.com/?size=256&id=jkqQE2I90I8R&format=png',
      },
    message: "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).",
    indication: 2,
    type: 'text',
  },
];

// при создании чата нужно только название в promt
// название -- имя, запись в массив (имя из promt, остальное null)

// useState для добавления в массив
const Chat = () => { 
  return (
    <>
    <div className={styles.chat}>
      <div className={styles.chatList}>
        <div className={styles.top}>
          <h1>Chat</h1>
          <button id={styles.createChatBtn}  onClick={addChat}>+ Create New Chat</button>
        </div>
        {/* <input className={styles.search} type="text" placeholder='Search' /> */}
        <div className={styles.searchInput}>
            <img src='https://img.icons8.com/?size=256&id=59878&format=png' alt='search' className={styles.inputIcon}/>
            <input className={styles.search} type="text" placeholder='    Search' />
        </div>

        {chatData.map(chat => ( 
          <div  key={chat.id} className={styles.fullMessage}>
          <div className={styles.person}>
            <img src={chat.image} alt={chat.name} />
            <div className={styles.userInfo}>
              <div className={styles.messageHeader}>
                <div>
                  <p className={styles.name}>{chat.name}</p>
                  <p className={styles.status}>{chat.status}</p>
                </div>
                <p className={styles.messageTime}>{chat.messageTime}</p>
              </div>
              
              <div className={styles.messageContainer}>
                {chat.type === 'text' && <p className={styles.message}>{chat.message}</p>}
                {chat.type === 'voice' && (
                  <div className={styles.voiceMessage}>
                    {/* <img src={chat.voiceMessage.icon} /> */}

                    {/* <img src='https://img.icons8.com/?size=256&id=jkqQE2I90I8R&format=png' alt='search' className={styles.voiceMessageIcon}/> */}
                    <p className={styles.message}>Voice message ({chat.voiceMessage.duration}) </p>
                  </div>
                )}
                {chat.filesType && (
                  <div className={styles.files}>
                    {chat.filesType.files && <p className={styles.file}>{chat.filesType.files}</p>}
                    {chat.filesType.photo && <p className={styles.photo}>{chat.filesType.photo}</p>}
                    {chat.filesType.video && <p className={styles.video}>{chat.filesType.video}</p>}
                  </div>
                )}
                <span className={styles.indication}>{chat.indication}</span>               
              </div>
            </div>
          </div>
          </div>
        ))}
        
        

        {/* <div className={styles.activeChat}></div> */}


      </div>
    </div>
    </>
  );
  
}

const addChat = () => {
  console.log('aaaadd');
}

export default Chat;
