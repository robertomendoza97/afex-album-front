import styled from "styled-components";

interface ModalwrapperStylesProps {
  $show: string;
}
export const ModalWrapperStyles = styled.div<ModalwrapperStylesProps>`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
  display: grid;
  place-items: center;
  border-radius: ${({ $show }) => ($show ? 0 : "50%")};
  transform: scale(${({ $show }) => ($show ? 1 : 0)});
  transform-origin: center;
  transition: transform 0.2s ease, border-radius 0.4s ease-out;
`;
