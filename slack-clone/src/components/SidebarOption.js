import React from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { enterRoom } from "../features/app/appSlice";
import { useDispatch } from "react-redux";

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
  const dispatch = useDispatch();
  const onAddChannel = () => {
    const channelName = prompt("Please enter channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName.toString(),
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      console.log(id);
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? onAddChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: "10px" }} />}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <SidebarOptionChannel>
          <span>#</span>
          <h4>{title}</h4>
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    font-weight: 500;
  }

  &:hover {
    opacity: 0.8;
    background-color: #340e36;
  }
`;

const SidebarOptionChannel = styled.div`
  display: flex;
  align-items: center;

  > span {
    padding: 10px;
    font-weight: 400;
    font-size: 18px;
  }
`;
