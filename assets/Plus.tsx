import styled from "styled-components";

export const Plus: React.FC = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g shapeRendering="crispEdges" fill="none" stroke="currentColor">
        <path d="M4 12.5h17M12.5 21V4" />
      </g>
    </Svg>
  );
};

const Svg = styled.svg``;
