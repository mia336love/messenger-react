import styles from '../Chat/Chat.module.css';


const Chat = () =>{ 
    return (
        <div className={styles.chat}>
            <div className={styles.chatList}>
                <div className={styles.top}>
                    <h1>Chat</h1>
                    <button>+ Create New Chat</button>
                </div>
                
                {/* <input className='searchInput'>Search</input> */}
                
                <div className={styles.messages}>
                    <div className={styles.person}>
                    <img src='https://i.pinimg.com/564x/24/4a/17/244a17c4d414764b4b59d4f923a7805e.jpg' alt='Luy Robin' />
                        <div className={styles.userInfo}>
                        <div className={styles.messageHeader}>
                            <div>
                                <p className={styles.name}>Luy Robin</p>
                                <p className={styles.status}>...writes</p>
                            </div>
                            <p className={styles.messageTime}>1 minute ago</p>
                        </div>

                            <div className={styles.messageContainer}>
                                <p className={styles.message}>Most of its text is made up from sections 1.10.32–3 of Cicero's <br />
                                De finibus bonorum et malorum (On the Boundaries of Goods <br />
                                and Evils; finibus may also be translated as purposes). </p>
                                <span className={styles.indication}>2</span>
                            </div>
                        </div>
                    </div>


                    <div className={styles.person}>
                    <img src='https://i.pinimg.com/564x/3d/28/ca/3d28ca1c4d55b52a1eb9a2435eb6d211.jpg' alt='Luy Robin' />
                        <div className={styles.userInfo}>
                        <div className={styles.messageHeader}>
                            <div>
                                <p className={styles.name}>Jared Sunn</p>
                                <p className={styles.status}>records voice message</p>
                            </div>
                            <p className={styles.messageTime}>1 minute ago</p>
                        </div>

                            <div className={styles.messageContainer}>
                                <div className={styles.voiceMessage}>
                                    <img src='https://img.icons8.com/?size=256&id=jkqQE2I90I8R&format=png' />
                                    <p className={styles.message}>Voice message (01:15) </p>
                                </div>
                                <div className={styles.files}>
                                    <p className={styles.file}>Files (x2)</p>
                                    <p className={styles.photo}>Photo</p>
                                </div>
                                <span className={styles.indication}>1</span>
                                
                            </div>
                        </div>
                    </div>

                    

                </div>
                

            </div>

        <div className={styles.activeChat}></div>

    </div>
    )

}

export default Chat;