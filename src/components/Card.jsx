import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "280px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 5px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "12px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 17px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 15px;
  color: ${({ theme }) => theme.textSoft};
  margin: 5px 0px;
`;

const Info = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.textSoft};
`;


const Card = (type) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
    <Container type={type}>
      <Image type={type}
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMN_53Uo8psedFKMB9zbejdIzAY8vTEv6XQ&usqp=CAU"
     />

      <Details type={type}>
        <ChannelImage type={type}
         src="data:image/jpeg;base64,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"
        />
        <Texts>
            <Title>Tutor Video</Title>
            <ChannelName>zata tutorial</ChannelName>
            <Info>780,993 views ??? 2 days ago</Info>
          </Texts>      
      </Details>
    </Container>
    </Link>
  )
}

export default Card