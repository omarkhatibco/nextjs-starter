import styled from "styled-components";

export const Close: React.FC = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M21.707 3.707l-1.414-1.414L12 10.586 3.707 2.293 2.293 3.707 10.586 12l-8.293 8.293 1.414 1.414L12 13.414l8.293 8.293 1.414-1.414L13.414 12z" />
    </Svg>
  );
};

const Svg = styled.svg``;
