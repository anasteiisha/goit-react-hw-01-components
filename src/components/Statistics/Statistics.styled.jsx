import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  h2 {
    padding-top: 25px;
    padding-bottom: 25px;
    font-size: 22px;
    font-weight: bold;
    color: gray;
    background-color: #ffffff;
    text-transform: uppercase;
    text-align: center;
  }
`;

export const List = styled.ul`
  display: flex;
  padding-left: 0px;
  justify-content: space-around;
  border: 1px solid rgb(219, 216, 216);
`;

export const ListItems = styled.li`
  width: 100px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    border-right: 1px solid rgb(219, 216, 216);
  }
`;

export const Label = styled.span`
  color: #000000;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  font-size: 22px;
  color: #000000;
`;
