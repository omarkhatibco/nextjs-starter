import { Close, Heart } from "assets";
import { breakpoints } from "components/theme";
import styled from "styled-components";
import { useItem } from "./ItemContext";

export const ItemActions: React.FC = () => {
  const { isLiked, toggleLike, setIsDeleting, isDeleting } = useItem();

  const isActive = isLiked();

  const handleDelete = () => {
    setIsDeleting(true);
  };

  return (
    <Wrapper>
      <Button type="button" isActive={isActive} onClick={toggleLike}>
        <Heart />
      </Button>
      <Button type="button" onClick={handleDelete} disabled={isDeleting}>
        <Close />
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  @media ${breakpoints.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Button = styled.button<{ isActive?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  appearance: none;
  background: transparent;
  color: ${({ isActive }) =>
    isActive ? "var(--background-medium)" : "black"};;

  border: 2px solid;

  border-color: var(--background-medium);
  padding-block: 0.5rem;
  padding-inline: 1rem;
  font-size: 1.5rem;
  cursor: pointer;

  & > svg {
    width: 1em;
    height: 1em;
  }

  &:hover {
    border-color: var(--interaction);
  }}
`;
