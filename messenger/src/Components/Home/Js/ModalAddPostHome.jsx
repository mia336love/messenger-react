import "../Style/ModalAddPostHome.css"
import { useState } from "react"

const ModalAddPostHome = ({ setPosts, state }) => {

    const [post, setPost] = useState('')

    return (
        <div className="modal-add-post-home">
            <h1>Adding new post:</h1>

            <div className="new-post-main-home">
                <textarea onChange={e => setPost(e.target.value)} value={post} cols="200" rows="5" className="text-new-post-home" placeholder="Say hi to the world..."></textarea>
                <button onClick={() => {

                    setPosts(prevArray => [
                        {
                            user: state.user,
                            userImg: state.userImg,
                            text: post,
                            postImg: [],
                            likes: 0,
                            comments: []
                        },
                        ...prevArray
                    ]
                    )

                    setPost('')
                }
                } className="add-post-home-btn"><label htmlFor="">Create post</label></button>
            </div>
        </div>
    )
}

export default ModalAddPostHome