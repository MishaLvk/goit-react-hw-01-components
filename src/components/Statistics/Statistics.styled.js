import styled from 'styled-components';

export const Wrapper = styled.section`
  display: block;
  width: 400px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 5px;
  border: solid 1px rgb(215, 221, 224);
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
  color: rgb(179, 180, 181);
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  font-size: 18px;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 5);
  background-color: ${() => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
  border: solid 1px black;
  padding: 15px;
`;

export const ItemLabel = styled.span`
  display: flex;
  font-size: 16px;
`;

export const ItemPercentage = styled.span`
  margin-top: 5px;
  display: flex;
  font-size: 26px;
`;
