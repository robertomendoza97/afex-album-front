import styled from "styled-components";
import Colors from "../../const/Colors";

export const NoVideosStyles = styled.div`
  display: flex;
  justify-content: center;

  color: ${Colors.gray.shade3};
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & > :first-child {
    font-size: 30px;
  }

  & > :nth-child(2) {
    font-size: 25px;
  }

  li {
    font-size: 20px;
    margin-bottom: 5px;
  }

  a {
    color: ${Colors.secondary};
  }
`;
