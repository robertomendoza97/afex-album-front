import styled from "styled-components";
import Colors from "../../const/Colors";

export const VideoDetailsStyles = styled.div`
  box-shadow: 0px 20px 20px 0px hsla(0, 0%, 0%, 0.07);
  border-radius: 15px;
  background-color: ${Colors.gray.shade4};
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  width: clamp(1096px, 80%, 700px);
  overflow: hidden;
  height: 330px;
  padding: 0 30px;
  position: relative;

  .description {
    height: 270px;
    flex: 1 1 400px;
    overflow: hidden;

    h2 {
      margin-bottom: 20px;
    }
    pre {
      height: 240px;
      overflow-y: scroll;
    }
  }

  .close {
    width: 24px;
    height: 24px;
    border-radius: 2px;
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
    transition: transform 100ms ease;

    &::before,
    &::after {
      content: "";
      position: absolute;
      z-index: 3;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 25px;
      height: 2px;
      background-color: ${Colors.black.shade1};
    }

    &::after {
      transform: rotate(45deg);
    }
    &::before {
      transform: rotate(-45deg);
    }
  }
`;
