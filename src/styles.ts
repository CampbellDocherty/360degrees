import { keyframes, styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const RightSide = styled.div<{ $isMobile: boolean }>`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: absolute;
  right: 0px;
  top: 0px;

  ${({ $isMobile }) =>
    $isMobile &&
    `
    width: 60%;
  `}
`;

export const LeftSide = styled.div<{ $isMobile: boolean }>`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0px;
  left: 0px;

  ${({ $isMobile }) =>
    $isMobile &&
    `
    width: 40%;
    justify-content: flex-start;
  `}
`;

export const Text = styled.p<{ $isMobile: boolean }>`
  font-family: 'Inconsolata';
  color: white;
  padding: 0;
  font-size: 20px;
  margin-top: 16px;
  margin-right: 24px;

  ${({ $isMobile }) =>
    $isMobile &&
    `
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-size: 24px;
  `}
`;

const fadeIn = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StreamImage = styled.img<{ $isMobile: boolean; $delay: string }>`
  width: 200px;
  height: 140px;

  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeIn} 0.6s ease forwards;
  animation-delay: ${({ $delay }) => $delay};

  ${({ $isMobile }) =>
    $isMobile &&
    `
    width: 100%;
    height: auto;
  `}
`;
