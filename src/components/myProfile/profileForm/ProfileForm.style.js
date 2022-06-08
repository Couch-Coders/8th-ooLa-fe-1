import styled from 'styled-components';
import Button from '../../common/ui/button/Button.component';

export const StyledForm = styled.form`
  text-align: left;
  padding: 0 10rem 6rem;
`;

export const StyledButton = styled(Button)`
  text-align: center;
  width: 130px;
  display: block;
  margin: 0 auto;
`;
export const ProfileImgContainer = styled.div`
  text-align: center;
  margin-bottom: 8rem;
`;

export const UrlInputFieldContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    margin-right: 2rem;
    flex: 1;
    width: calc(50% - 2rem);
    &:last-child {
      margin-right: 0;
    }
  }
`;
