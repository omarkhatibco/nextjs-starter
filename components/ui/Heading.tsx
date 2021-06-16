import { breakpoints } from "components/theme";
import styled from "styled-components";

export const Heading = styled.h1`
  line-height: 1;
  color: var(--color-black);
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  margin-block-end: 2rem;

  @media ${breakpoints.md} {
    font-size: 2.5rem;
  }
`;
