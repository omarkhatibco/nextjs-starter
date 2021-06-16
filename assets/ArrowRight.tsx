import styled from "styled-components";

export const ArrowRight: React.FC = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        vectorEffect="non-scaling-stroke"
        d="M7.75 3l8.5 9-8.5 9"
      />
    </Svg>
  );
};

const Svg = styled.svg``;
