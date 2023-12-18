import "../Style/Home.css"
import HomeHeader from "./HomeHeader"
import HomeMain from "./HomeMain"
import { useState } from "react"

const Home = (props) => {

    const [posts, setPosts] = useState([
        {
            user: 'Liniina',
            userImg: 'https://storage.spincoaster.com/media/2023/07/19234340/Lilniina_A_sq.jpeg',
            text: 'new song by ME !',
            postImg: [],
            likes: 1103,
            comments: []
        },
        {
            user: 'Jessy',
            userImg: 'https://i.pinimg.com/236x/0e/15/aa/0e15aac34f591df39d9c8aa4e97748b9.jpg',
            text: 'my art of perfume!',
            postImg: ['https://i.pinimg.com/564x/d7/05/f0/d705f0520d55155f57550985bf957092.jpg'],
            likes: 102,
            comments: [
                {
                    user: 'luii ',
                    userImg: 'https://i.pinimg.com/236x/90/33/b8/9033b8282caad8648bc9d07d41a26feb.jpg',
                    text: 'so beautiful ^.^!!!'
                }
            ]
        }
    ])

    return (
        <main className="homePage">
            <HomeHeader state={props.state} posts={posts} setPosts={setPosts} />
            <HomeMain posts={posts} setPosts={setPosts} state={props.state} />
        </main>
    )
}

export default Home