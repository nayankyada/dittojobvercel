import React from "react";
import styled from "styled-components";
import logo from "../Icon/logo.png";
import oval from "../Icon/oval.png";
import crossicon from "../Icon/cross.svg";
import searchicon from "../Icon/searchicon.svg";
import { Img } from "./UI";
const HeaderContainer = styled.div`
  background-color: #373b53;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
`;
const InputContainer = styled.div`
  position: relative;
`;
const ProfileImg = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
`;

const Input = styled.input`
  padding: 15px;
  margin: 10px;
  border-radius: 16px;
  border: none;
`;
function Header(props) {
  return (
    <HeaderContainer>
      <Logo>
        <Img height="100%" src={logo}></Img>
        <InputContainer>
          <Input
            value={props.searchText}
            onChange={(e) => {
              props.setSearchText(e.target.value);
            }}
            type="text"
            placeholder="search"
          ></Input>
          {!props.searchText ? (
            <Img
              position="absolute"
              bottom="20px"
              right="17px"
              width="24px"
              height="24px"
              src={searchicon}
            ></Img>
          ) : (
            <Img
              position="absolute"
              bottom="20px"
              right="17px"
              width="24px"
              height="24px"
              src={crossicon}
              color="gray"
              onClick={(e) => {
                props.setSearchText("");
              }}
            ></Img>
          )}
        </InputContainer>
      </Logo>
      <ProfileImg>
        <Img src={oval}></Img>
      </ProfileImg>
    </HeaderContainer>
  );
}

export default Header;
