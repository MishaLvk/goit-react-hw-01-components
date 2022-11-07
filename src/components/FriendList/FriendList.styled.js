import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: block;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 20px 10px 20px;
  margin-top: 20px;
  border: solid 1px grey;
  border-radius: 5px;
`;

export const Status = styled.span`
  display: block;
  background-color: ${props => {
    return props.active ? 'green' : 'red';
  }};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  background-color: rgb(235, 241, 245);
  border-radius: 5px;
  margin-left: 20px;
  width: 100px;
`;

export const Name = styled.p`
  margin: 0;
  margin-left: 20px;
`;
