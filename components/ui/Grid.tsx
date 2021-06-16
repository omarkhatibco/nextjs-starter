import { breakpoints } from "components/theme";
import styled from "styled-components";

export const Grid = styled.ul`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  min-width: 0;

  @media ${breakpoints.md} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
