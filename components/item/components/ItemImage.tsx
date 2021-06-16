import styled from "styled-components";
import { useItem } from "./ItemContext";

export const ItemImage: React.FC = () => {
  const {
    image: { src, alt },
  } = useItem();

  return (
    <AspectRatio>
      <Img src={src} alt={alt} loading="lazy" />
    </AspectRatio>
  );
};

const Img = styled.img`
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
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
    padding-bottom: calc(665 / 555 * 100%);
  }
`;
