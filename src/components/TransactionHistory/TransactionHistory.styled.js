import styled from 'styled-components';

export const Wrapper = styled.table`
  table-layout: fixed;
  width: 100%;

  border-collapse: collapse;
  width: 900px;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 18px;
  color: rgb(179, 180, 181);
  overflow: hidden;
`;

export const Title = styled.tr`
  background-color: rgb(88, 129, 224);
  text-transform: uppercase;
`;
export const TitleElement = styled.th`
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Line = styled.tr`
  :nth-child(even) {
    background-color: rgb(235, 241, 245);
  }

  td:nth-child(1) {
    text-transform: capitalize;
    text-align: start;
    padding-left: 130px;
  }
  > td {
    padding-top: 10px;
    padding-bottom: 10px;
    border-left: solid 1px rgb(230, 232, 232);
    border-right: solid 1px rgb(230, 232, 232);
  }
`;
