import React from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <HeaderComponent>
      {/* HeaderLeft */}
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => {
            auth.signOut();
          }}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </HeaderLeft>
      {/* HeaderCenter */}
      <HeaderCenter>
        <SearchIcon />
        <input type="text" placeholder="Search users" name="" id="" />
      </HeaderCenter>
      {/* Headerright */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  padding: 10px 0;

  background-color: var(--slack-color);
  color: white;
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
  justify-content: space-between;
  margin-right: 30px;
`;
const HeaderCenter = styled.div`
  flex: 0.4;
  border: 1px solid gray;
  text-align: center;
  border-radius: 6px;
  background-color: #421f44;
  width: 100%;
  color: gray;

  display: flex;
  align-items: center;
  justify-content: center;

  > input {
    background-color: transparent;
    text-align: center;
    border: none;
    outline: 0;
    color: white;
  }
`;
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
