import "../Style/AddComment.css";
import { useState } from "react";

const AddComment = ({ setPosts, posts, state, index }) => {
  const [com, setCom] = useState("");

  const addComment = () => {
    if (com !== "") {
      const comment = {
        user: state.user,
        userImg: state.userImg,
        text: com,
      };

      setPosts((prevPosts) => {
        const updatedPosts = [...prevPosts];
        updatedPosts[index].comments.push(comment);
        return updatedPosts;
      });

      setCom("");
    }
  };

  return (
    <div className="add-com-cont">
      <textarea
        className="add-com-news-inp"
        onChange={(e) => setCom(e.target.value)}
        value={com}
        cols="100"
        rows="5"
      ></textarea>

      <button onClick={addComment} className="add-com-btn">
        <label htmlFor="">Post</label>
      </button>
    </div>
  );
};

export default AddComment;
