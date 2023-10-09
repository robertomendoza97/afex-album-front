import styled from "styled-components";
import Colors from "../../const/Colors";

interface VideoItemStylesProps {
  $img: string;
}
export const VideoItemStyles = styled.div<VideoItemStylesProps>`
  width: 263px;
  height: 150px;
  aspect-ratio: 16/9;
  background-image: url(${({ $img }) => $img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  .duration {
    position: absolute;
    bottom: 6px;
    right: 6px;
    background-color: ${Colors.black.shade1};
    height: 12px;
    color: ${Colors.white};
    font-size: 10px;
    border-radius: 4px;
    opacity: 0.8;
    padding: 3px 4px;
    display: flex;
    align-items: center;
    font-weight: 600;
    justify-content: center;
  }

  .close {
    background-color: ${Colors.black.shade1};
    width: 24px;
    height: 24px;
    border-radius: 2px;
    position: absolute;
    right: 6px;
    top: 6px;
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
      width: 15px;
      height: 2px;
      background-color: ${Colors.white};
    }

    &::after {
      transform: rotate(45deg);
    }
    &::before {
      transform: rotate(-45deg);
    }

    &:hover {
      transform: scale(0.9);
      transition: transform 100ms ease;
    }
  }
`;
