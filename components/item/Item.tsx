import { useState } from "react";
import styled from "styled-components";
import { Product } from "types";
import {
  ItemActions,
  ItemContext,
  ItemDeleteBanner,
  ItemImage,
} from "./components";

export interface ExtraProps {
  isLiked?: () => boolean;
  toggleLike: () => void;
  handleDelete: () => void;
  isDeleting: boolean;
  setIsDeleting: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Item: React.FC<Product & ExtraProps> = (props) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  return (
    <Wrapper>
      <ItemContext.Provider value={{ ...props, isDeleting, setIsDeleting }}>
        <Figure>
          {isDeleting && <ItemDeleteBanner />}
          <ItemImage />
          <ItemActions />
        </Figure>
      </ItemContext.Provider>
    </Wrapper>
  );
};

const Wrapper = styled.li``;

const Figure = styled.figure`
  & > *:not(:last-child) {
    margin-block-end: 1rem;
  }
`;
