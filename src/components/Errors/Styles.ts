import styled from "styled-components";
import Colors from "../../const/Colors";

export const ErrorsStyles = styled.div`
  border-radius: 8px;
  background-color: ${Colors.white};
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  align-items: center;
  gap: 30px;
  font-size: 30px;

  img {
    width: 150px;
  }
`;
