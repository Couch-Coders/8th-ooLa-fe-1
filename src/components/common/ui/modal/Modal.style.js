import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 20vh;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  min-height: 65vh;
`;

export const Content = styled.div`
  padding: 3rem;
`;
