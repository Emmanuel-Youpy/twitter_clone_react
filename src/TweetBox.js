import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Emmanuel Youpil",
      username: "youpilz",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://images-na.ssl-images-amazon.com/images/I/61RM2-y6iCL._AC_UX569_.jpg",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src=" https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening"
          />
        </div>
        <input
          className="tweetBox_imageInput"
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          placeholder="Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
