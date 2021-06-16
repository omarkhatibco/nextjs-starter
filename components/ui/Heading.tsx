import { breakpoints } from "components/theme";
import styled from "styled-components";

export const Heading = styled.h1`
  font-weight: bold;
  text-align: center;
  line-height: 1;
  color: var(--color-black);
  font-size: 1.5rem;
  margin-block-end: 2rem;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: var(--color-link);
  }

  @media ${breakpoints.md} {
    font-size: 1.5rem;
  }
  @media ${breakpoints.lg} {
    font-size: 3rem;
    margin-block-end: 4rem;
  }
`;
