import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import AddIcon from "@material-ui/icons/Add";
import { ExpandMore } from "@material-ui/icons";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

const Sidebar = () => {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  const sidebarOptions = [
    {
      icon: InsertCommentIcon,
      title: "Threads",
    },
    {
      icon: InboxIcon,
      title: "Mentions & Reactions",
    },
    {
      icon: DraftsIcon,
      title: "Saved items",
    },
    {
      icon: BookmarkBorderIcon,
      title: "Channel Browser",
    },
    {
      icon: PeopleAltIcon,
      title: "People & user groups",
    },
    {
      icon: AppsIcon,
      title: "Apps",
    },
    {
      icon: FileCopyIcon,
      title: "File Browser",
    },
    {
      icon: ExpandLessIcon,
      title: "Show less",
    },
  ];

  return (
    <SidebarContainer>
      {/* SidebarHeader */}
      <SidebarHeader>
        <SidebarInfo>
          <h2>Demo Title</h2>
          <h3>
            <FiberManualRecordIcon />
            Jaisal Shah
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      {sidebarOptions.map((option, index) => {
        return (
          <SidebarOption key={index} Icon={option.icon} title={option.title} />
        );
      })}

      <hr />
      <SidebarOption Icon={ExpandMore} title={"Channels"} />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title={"Add Channel"} />
      <hr />
      {channels?.docs.map((doc) => {
        return (
          <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
        );
      })}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  font-weight: 200;

  > hr {
    border: 1px solid #49274b;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px;
  border-bottom: 1px solid #49274b;

  > .MuiSvgIcon-root {
    color: #49274b;
    background-color: white;
    border-radius: 50%;
    padding: 8px;
    font-size: 18px;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 16px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    font-size: 13px;
    font-weight: 400;

    > .MuiSvgIcon-root {
      font-size: 14px;
      margin: 1px;
      color: green;
    }
  }
`;
