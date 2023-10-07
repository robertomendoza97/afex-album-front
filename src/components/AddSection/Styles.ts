import styled from "styled-components";
import Colors from "../../const/Colors";

export const AddSectionStyles = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 50px;

  & > input {
    outline: none;
    display: inline-block;
    height: 57px;
    flex-grow: 1;
    color: ${Colors.black.shade1};
    border: 1px solid ${Colors.gray.shade1};
    border-radius: 5px 0 0 5px;
    padding: 19.5px 22px;
    background-color: ${Colors.white};
    font-weight: 400;
    font-size: 16px;
    line-height: 21.28px;

    &::placeholder {
      opacity: 0.5;
    }
  }

  & > button {
    width: 253px;
    background-color: ${Colors.secondary};
    border: 1px solid ${Colors.secondary};
    box-shadow: 0px 1px 1px 0px #00000033, 0px 1px 4px 0px #0000001f,
      0px 2px 2px 0px #00000024;
    color: ${Colors.white};
    font-weight: 600;
    border-radius: 0 10px 10px 0;
    cursor: pointer;

    &:active {
      opacity: 0.9;
    }
  }
`;
