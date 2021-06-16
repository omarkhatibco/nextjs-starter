import { useEffect, useState } from "react";
import { Product } from "types";
import { fetcher } from "utls";

export const useProducts = () => {
  const [likedItems, setLikedItems] = useState<string[]>([]);
  const [deleteditems, setDeletedItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    ...new Set(items.map(({ category }) => category.toLowerCase())),
  ];

  const fetchData = async () => {
    setIsLoading(true);
    const items = await fetcher();

    setItems(items);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredItems = items
    ?.filter(({ category }) => {
      if (selectedCategory !== "") {
        return category?.toLowerCase() === selectedCategory?.toLowerCase();
      }
      return true;
    })
    .filter(({ sku }) => !deleteditems.includes(sku));

  const getIsLiked = (id: string) => {
    return likedItems.includes(id);
  };

  const toggleLike = (id: string) => {
    const isLiked = getIsLiked(id);

    const newLikedItems = isLiked
      ? likedItems.filter((item) => item !== id)
      : [...likedItems, id];

    setLikedItems(newLikedItems);
  };
  console.log(deleteditems);

  const handleDelete = (id: string) => {
    const newDeletedItems = [...new Set([...deleteditems, id])];
    console.log(id);
    setDeletedItems(newDeletedItems);
  };

  return {
    items: filteredItems,
    isLoading,
    categories,
    selectedCategory,
    setSelectedCategory,
    getIsLiked,
    toggleLike,
    handleDelete,
  };
};
