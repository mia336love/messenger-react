import "../Style/HomeMain.css";
import { useState } from "react";
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import AddComment from "./AddComment";

const HomeMain = ({ state, setPosts, posts }) => {
  let helpPosts = [...posts];
  const [likeHelp, setLike] = useState(new Array(posts.length));
  let helpLike = [...likeHelp];
  const [comHelp, setHelpCom] = useState(null);

  function likeBtn(flag, index) {
    if (flag) {
      helpPosts[index].likes += 1;
      setPosts(helpPosts);
      helpLike[index] = true;
      setLike(helpLike);

      console.log(posts[index].likes);
    } else if (!flag) {
      helpPosts[index].likes -= 1;
      setPosts(helpPosts);
      helpLike[index] = false;
      setLike(helpLike);
      console.log(posts[index].likes);
    }
  }

  return (
    <div className="main-home">
      {posts.map((el, index) => (
        <div key={index} className="post-home">
          <div className="post-head">
            <span className="img-post-user">
              <img className="post-img-user" src={el.userImg} alt="" />
            </span>
            <p className="user-post-name">{el.user}</p>
          </div>

          <hr className="hr-post" />

          <div className="post-content">
            <p className="post-text">{el.text}</p>
            <div className="images-post">
              {el.postImg.map((e, i) => (
                <img className="img-in-post" key={i} src={e} alt="" />
              ))}
            </div>
          </div>

          <div className="footer-post">
              <div className="likes-post">
                <button
                  onClick={likeHelp[index] === true ? () => likeBtn(false, index) : () => likeBtn(true, index)}
                >
                  <span style={likeHelp[index] === true ? { display: "none" } : { display: "block" }}>
                    <FavoriteBorder />
                  </span>

                  <span style={likeHelp[index] === true ? { display: "block" } : { display: "none" }}>
                    <Favorite />
                  </span>
                </button>

                <p>{el.likes}</p>
              </div>
          </div>

          <hr className="hr-post" />

          <div className="comments-post">
            <div className="comments-head-news">
              <h2>Comments:</h2>
              <button
                onClick={comHelp === true ? () => setHelpCom(false) : () => setHelpCom(true)}
                className="add-com-btn-prof"
              >
                <label htmlFor="">Post</label>
              </button>
            </div>

            <div style={comHelp === true ? { display: "block" } : { display: "none" }}> 
              <AddComment index={index} posts={posts} setPosts={setPosts} state={state} />
            </div>

            {el.comments.map((com, ind) => (
              <div key={ind} className="user-comment-post">
                <div className="comment-head">
                  <span className="comment-user-img">
                    <img src={com.userImg} alt="no img" />
                  </span>
                  <p className="user-comment-name">{com.user}</p>
                </div>

                <p className="comment-content">{com.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeMain;
