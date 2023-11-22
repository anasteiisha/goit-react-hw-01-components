import styled from '@emotion/styled';

export const ListItems = styled.li`
  padding: 5px 10px;
  margin-bottom: 10px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border-radius: 100%;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
`;
