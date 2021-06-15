import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "./ChatInput";
import Message from "./Message";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

const Chat = () => {
  const state = useSelector((state) => state.app);
  const chatRef = useRef(null);
  const [roomDetails] = useDocument(
    state.roomId && db.collection("rooms").doc(state.roomId)
  );

  const [roomMessages, loading] = useCollection(
    state.roomId &&
      db
        .collection("rooms")
        .doc(state.roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [state.roomId, loading]);

  return (
    <ChatContainer>
      {state.roomId && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
              </h4>
              <StarBorderOutlinedIcon />
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlinedIcon /> Details
              </p>
            </HeaderRight>
          </Header>

          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              return (
                <Message
                  user={doc.data().user}
                  message={doc.data().message}
                  userImage={doc.data().userImage}
                  timestamp={doc.data().timestamp}
                />
              );
            })}
          </ChatMessages>
          <ChatBottom ref={chatRef} />
          <ChatInput
            chatRef={chatRef}
            channelId={state.roomId}
            channelName={roomDetails?.data().name}
          />
        </>
      )}
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  background-color: white;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  h4 > {
    text-transform: lowercase;
  }
  > .MuiSvgIcon-root {
    font-size: 18px;
    margin-left: 10px;
  }
`;
const HeaderRight = styled.div`
  > p {
    color: gray;
    display: flex;

    align-items: center;
    font-size: 14px;
    > .MuiSvgIcon-root {
      margin-right: 5px;
      font-size: 18px;
    }
  }
`;

const ChatMessages = styled.div``;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
