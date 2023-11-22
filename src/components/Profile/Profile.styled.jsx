import styled from '@emotion/styled';

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
`;

export const Description = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #ffffff;
  align-items: center;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(219, 216, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Avatar = styled.img`
  width: 130px;
  margin-bottom: 20px;
  border-radius: 100%;
  background-color: rgb(227 244 244);
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  color: gray;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  color: gray;
`;

export const List = styled.ul`
  background-color: rgb(227 244 244);
  display: flex;
  justify-content: space-around;
  padding-left: 0px;
  border: 1px solid rgb(219, 216, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
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
  color: gray;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
