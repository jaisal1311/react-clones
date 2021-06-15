import React from "react";
import styled from "styled-components";

const GovtNav = () => {
  const buttonTypes = [
    {
      title: "A +",
      onClicked: () => {},
    },
    {
      title: "A",
      onClicked: () => {},
    },
    {
      title: "A -",
      onClicked: () => {},
    },
  ];
  return (
    <Nav>
      <NavBody>
        <NavLeft>
          <NationalEmblem
            alt=""
            src="https://www.cowin.gov.in/assets/images/emblem_white.png"
          />
          <a href="https://www.mohfw.gov.in/">
            Ministry of Home Affairs And Family Welfare
          </a>
        </NavLeft>
        <NavRight>
          <p>Skip to main content</p>
          <ButtonGroup>
            {buttonTypes.map((btn) => {
              return <SizeButton>{btn.title}</SizeButton>;
            })}
          </ButtonGroup>
        </NavRight>
      </NavBody>
    </Nav>
  );
};

export default GovtNav;

const Nav = styled.div`
  background-color: #1e3770;
  color: white !important;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const NavBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 150px;
  padding-right: 150px;
  flex: 1;
`;

const NavLeft = styled.div`
  display: flex;
  flex: 0.5;

  & > a {
    color: white !important;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const NationalEmblem = styled.img`
  object-fit: contained;
  height: 20px;
  margin-right: 5px;
`;

const NavRight = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 300px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const SizeButton = styled.button`
  border: 1px solid white;
  background: transparent;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`;
