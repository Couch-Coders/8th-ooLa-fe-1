import styled from 'styled-components';

const StudyItemContainer = styled.div`
  width: 270px;
  height: 200px;
  background-color: #eee;
  padding: 20px 30px;
  margin: 0 32px 32px 0;
  border-radius: 20px;
`;

const InfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const InfoBottom = styled.div``;

export const style = { StudyItemContainer, InfoTop, InfoBottom };