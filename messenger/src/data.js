import Ava from "./Components/Menu/Js/ava.jpg"
import User1 from "./user1.jpg"
import User2 from "./user2.jpg"
import User3 from "./user3.jpg"
import render from "./render"

export let state = {
    user: "mia love",

    userImg: Ava,

    userImages: [Ava],

    dialogs: [
        {
            id: 0,
            img: User1,
            unread: 1,
            name: "jj102",
            lastMesAgo: "1 hour ago",
            action: "writes...",
            lastMessage: "I'm not in love"
        },
        {
            id: 1,
            img: User2,
            unread: 3,
            name: "a-chan",
            lastMesAgo: "1 minute ago",
            action: "online now",
            lastMessage: "世界でいちばんおひめさま　そういう扱い　心得てよね"
        },
        {
            id: 2,
            img: User3,
            unread: 0,
            name: "h3killuah",
            lastMesAgo: "24 minutes ago",
            action: "last online 15 minutes ago",
            lastMessage: "calm down"
        }
    ],

    users: [],

    searchInput: "",

    selectedChat: '0',

    chatMeaages: [],

    flagMes: 0
}

state.chatMeaages = Array.from({ length: state.dialogs.length }, () => Array(0))

export function addMesChat(message, id) {
    if (message !== '') {
        state.chatMeaages[id].push(message)

        state.urMessage = ''

        console.log(state.chatMeaages);

        render(state)
    }
}

export function selectChat(id) {
    state.selectedChat = id
    state.flagMes = 1;

    console.log(id);

    render(state)
}

export let users = []

export const addUser = () => {
    const defAvatar = "https://i.pinimg.com/564x/d9/10/7b/d9107bfce4cfec6a8ca03894ebdf4793.jpg"

    const unr = prompt("Непрочитанные")
    const nme = prompt("Имя")
    const lMesA = prompt("Когда последнее сообщение")
    const act = prompt("Действие")
    const lMes = prompt("Последнее сообщение")

    state.dialogs.push({
        id: state.dialogs.length,
        img: defAvatar,
        unread: unr,
        name: nme,
        lastMesAgo: lMesA,
        action: act,
        lastMessage: lMes
    })

    render(state)
}

export function changeDialogs() {
    const search = document.querySelector('.searchChat').value

    if (search === "") {
        state.users = []
    } else {
        for (let i = 0; i < state.dialogs.length; i++) {
            if (state.dialogs[i].name.toLowerCase().includes(search.toLowerCase())) {
                for (let j = 0; j < state.users.length; j++) {
                    if (state.dialogs[i].name === state.users[j].name) {
                        state.users.splice(0)
                    }
                }
                state.users.push(state.dialogs[i])
            }
        }
    }

    state.searchInput = search
    render(state)
}