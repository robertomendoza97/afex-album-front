import styled from "styled-components";
import Colors from "../../const/Colors";

export const SiteWrapperStyle = styled.div`
  background-color: ${Colors.gray.shade2};
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 120px 200px 0;

  & > main {
    flex-basis: 100%;
  }
`;
