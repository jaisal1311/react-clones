import React, { useRef } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { db } from "../firebase";
import firebase from "firebase";

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const inputRef = useRef("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: inputRef.current.value,
      user: "Jaisal",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      userImage:
        "https://avatars.githubusercontent.com/u/57360897?s=400&u=c4d364de98850d27df8391dee85ad8161686a3b4&v=4",
    });

    inputRef.current.value = "";
    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          type="text"
          placeholder={`${
            channelName
              ? "Message #" + channelName
              : "Select a channel to start chat"
          }`}
          ref={inputRef}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    display: flex;
    justify-content: center;

    > input {
      position: absolute;
      bottom: 20px;
      width: 60%;
      padding: 20px;
      outline: none;
    }

    > button {
      display: none !important;
    }
  }
`;
