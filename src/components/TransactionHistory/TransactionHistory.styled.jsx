import styled from '@emotion/styled';

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
  background-color: rgb(58 190 233);
  th {
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid rgb(219, 216, 216);
  }
`;

export const Tbody = styled.tbody`
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  tr:nth-child(even) {
    background-color: rgb(228 239 244);
  }
  td {
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
    color: gray;
    border: 1px solid rgb(219, 216, 216);
  }
`;

export const Type = styled.td`
  text-transform: capitalize;
`;
