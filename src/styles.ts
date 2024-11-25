import { keyframes, styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  position: relative;
`;

export const StreamContainer = styled.div`
  padding-top: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
`;

export const StreamTitle = styled.p`
  font-family: 'Inconsolata';
  color: white;
  padding: 0;
  font-size: 16px;
  margin: 16px;

  & > span {
    vertical-align: middle;
    font-size: 12px;
  }
`;

export const Text = styled.p`
  font-family: 'Inconsolata';
  color: white;
  padding: 0;
  font-size: 20px;
  margin: 24px 16px;
`;

const fadeIn = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StreamImages = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
`;

export const StreamImage = styled.img<{ $delay: string }>`
  width: 200px;
  height: 140px;

  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeIn} 0.6s ease forwards;
  animation-delay: ${({ $delay }) => $delay};
`;
