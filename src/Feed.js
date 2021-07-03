import "./Feed.css";
import InputOption from "./InputOption";
import {
  CalendarViewDay,
  EventNote,
  Subscriptions,
  Image,
  Create,
} from "@material-ui/icons";
import Post from "./Post";
import { useState } from "react";

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70b5f9" />
          <InputOption Icon={Subscriptions} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNote} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>

      {posts.map((post) => (
        <Post />
      ))}
      <Post
        name="Fredrik Fordelsen"
        description="This is a test"
        message="wow this worked lmfao"
      />
    </div>
  );
}

export default Feed;
