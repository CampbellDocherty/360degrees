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

export const PortraitContainer = styled.div`
  padding-top: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const PortraitImages = styled.div`
  width: 250px;
  height: 175px;
  display: flex;
  overflow-y: hidden;
`;

export const PortraitImageContainer = styled.div<{ $delay: string }>`
  width: calc(250px / 6);
  height: 100%;
  transform: translateY(20px);
  animation: ${fadeIn} 0.6s ease forwards;
  animation-delay: ${({ $delay }) => $delay};
`;

export const PortraitImage = styled.img`
  object-fit: cover;

  width: calc(250px / 6);
  height: 100%;
  background-size: 1800px 100%;
  background-repeat: no-repeat;
  background-position: left;

  &:nth-child(2) {
    background-position: -200px;
  }

  &:nth-child(3) {
    background-position: -400px;
  }

  &:nth-child(4) {
    background-position: -600px;
  }

  &:nth-child(5) {
    background-position: -800px;
  }

  &:nth-child(6) {
    background-position: -1000px;
  }
`;
