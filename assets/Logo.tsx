import styled from "styled-components";

export const Logo: React.FC = () => {
  return (
    <AspectRatio>
      <Svg
        width="349"
        height="86"
        viewBox="0 0 349 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 12.8c0-4.6-1.3-7.1-7.2-7.1H.1V3.9H22L45.7 64 69 4h20.4v1.8h-2.8c-4.8 0-6 3.4-6 7v61.6c0 5.3.3 7.4 5.4 7.4h3.4v1.8H60.2v-1.8h2.4c4.6 0 6.4-1.7 6.4-6.6V10h-.2L41.2 81.7h-1l-28-70.4h-.3v61c0 6.4 1 9.4 7 9.4h3.4v1.8H.1v-1.8h3c6 0 7-2.7 7-9.4V12.8H10zM136.6 2c19 0 35.7 18.5 35.7 41.7 0 23.1-16.6 41.6-35.7 41.6-19.2 0-35.8-18.5-35.8-41.6 0-23.2 16.6-41.6 35.8-41.6V2zm0 81.5c20 0 22.8-25 22.8-39.8 0-14.8-2.7-39.8-22.8-39.8-20.2 0-22.9 25-22.9 39.8 0 14.8 2.7 39.8 22.9 39.8zm56.9-70.6c0-5-1.4-7-7.6-7h-2.5v-2h10C201 4 202.7 2.3 205 0v21.4c4.9-9 13.8-19.2 28.4-19.2 20.2 0 21.8 10.1 21.8 21.3V70c0 10.2 1.6 11.6 6.6 11.6h3.2v1.9h-31.7v-2h2.6c6.3 0 7.5-2 7.5-11.5V18.8c0-10.3-6.2-13.7-12.2-13.7-15.9 0-22.9 15.8-26.2 22.2V75c0 4.6 1 6.7 6.8 6.7h3.1v1.9h-31.4v-2h2.8c6.6 0 7.3-2 7.3-7.2V12.9h-.1zM317 57.7h-25.2l-4.9 14.2c-.8 2.3-1.7 5-1.7 7 0 1.5 1.4 2.8 5.2 2.8h6.1v1.8h-24.3v-1.8h3.8c3.6 0 5.2-.4 7.4-6.7l25-71.6 1-.4c.7-.4.7-1 .7-1s26 72.8 27.4 76c1 2.5 2.2 3.7 8 3.7h3v1.8h-32.2v-1.8h3c6 0 5.4-2.5 4.6-4.7L317 57.7zm-12.7-36h-.2l-11.6 34.2h24l-12.2-34.3v.1z"
          fill="#AA9688"
        />
      </Svg>
    </AspectRatio>
  );
};

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const AspectRatio = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-width: 0;
  max-width: 100%;

  &::before {
    height: 0px;
    content: "";
    display: block;
    padding-bottom: calc(86 / 349 * 100%);
  }
`;
