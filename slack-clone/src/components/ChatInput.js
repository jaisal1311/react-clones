import React, { useRef } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { db, auth } from "../firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const [user] = useAuthState(auth);

  const inputRef = useRef("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    if (inputRef.current.value === "") {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: inputRef.current.value,
      user: user?.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      userImage: user?.photoURL,
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
