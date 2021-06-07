import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
const Sidebar = () => {
  return (
    <SidebarContainer>
      {/* SidebarHeader */}
      <SidebarHeader>
        <SidebarInfo>
          <h2>Demo Title</h2>
          <FiberManualRecordIcon />
        </SidebarInfo>
      </SidebarHeader>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
`;
const SidebarHeader = styled.div``;
const SidebarInfo = styled.div``;
