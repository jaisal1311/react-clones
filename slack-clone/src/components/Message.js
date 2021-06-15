import React from "react";
import styled from "styled-components";

const Message = ({ user, message, userImage, timestamp }) => {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <MessageInfoHeader>
          <h4>{user} </h4>
          <span>
            <h6>{new Date(timestamp?.toDate()).toUTCString()}</h6>
          </span>
        </MessageInfoHeader>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
  display: flex;
  margin: 10px;
  border-radius: 5px;

  > img {
    object-fit: contain;
    height: 60px;
    margin: 5px;
    border-radius: 5px;
  }

  :hover {
    background-color: #eef1f8;
    opacity: 0.8;
  }
`;
const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const MessageInfoHeader = styled.div`
  margin-bottom: 4px;
  > span {
    color: gray;
    font-size: 14px;
  }
`;
