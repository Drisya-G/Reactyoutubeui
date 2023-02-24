import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text}
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;


 const Comments = () => {
  return (
    <Container>
      <Avatar src="data:image/jpeg;base64,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 "/>
      <Details>
        <Name>
          sidharth <Date>2 days ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, ex
          laboriosam ipsam aliquam voluptatem perferendis provident modi, sequi
          tempore reiciendis quod, optio ullam cumque? Quidem numquam sint
          mollitia totam reiciendis?
        </Text>
      </Details>
    </Container>
  )
}

export default Comments