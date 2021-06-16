import styled from "styled-components";

export const ArrowLeft: React.FC = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        d="M16.2 21l-8.4-9 8.4-9"
        vectorEffect="non-scaling-stroke"
      ></path>
    </Svg>
  );
};

const Svg = styled.svg``;
