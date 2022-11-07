import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  border: solid 1px rgb(215, 221, 224);
  padding-top: 40px;
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DescriptionInfo = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  margin-top: 10px;
  color: rgb(179, 180, 181);
`;

export const Avatar = styled.img`
  height: 100px;
  display: block;
  border-radius: 50%;
  background-color: green;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;

  margin-bottom: 0;
`;

export const Stats = styled.ul`
  display: flex;
  padding: 0px;
  margin: 0px;
  margin-top: 30px;
  background-color: rgb(235, 241, 245);
`;

export const StatsList = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  width: calc(100% / 3);
  padding: 10px;
  font-weight: 700;
  border: solid 1px rgb(215, 221, 224);
`;

export const StatsLabel = styled.span`
  color: rgb(179, 180, 181);
  font-weight: 400;
`;
