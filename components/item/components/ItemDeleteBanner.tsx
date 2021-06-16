import { useEffect, useState } from "react";
import styled from "styled-components";
import { useItem } from "./ItemContext";

export const ItemDeleteBanner = () => {
  const [countDown, setCountDown] = useState(5);
  const { setIsDeleting, handleDelete } = useItem();

  useEffect(() => {
    const timer = setTimeout(() => {
      handleDelete();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCountDown(countDown - 1);
    }, 1000);
  }, [countDown]);

  const handelCancel = () => {
    setIsDeleting(false);
  };

  return (
    <Button type="button" onClick={handelCancel}>
      {countDown} Löschen rückgängig machen
    </Button>
  );
};

const Button = styled.button`
  background-color: var(--interaction);
  padding-block: 1rem;
  padding-inline: 1rem;
  color: var(--textLight);
  width: 100%;
  display: inline-flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
