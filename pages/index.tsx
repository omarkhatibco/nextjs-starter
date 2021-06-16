import { Item, ItemFilter } from "components/item";
import { Grid, Layout } from "components/ui";
import { useProducts } from "hooks";
import { NextPage } from "next";

const Page: NextPage = () => {
  const {
    items,
    categories,
    selectedCategory,
    setSelectedCategory,
    getIsLiked,
    toggleLike,
    handleDelete,
  } = useProducts();
  return (
    <Layout>
      <ItemFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Grid>
        {Array.isArray(items)
          ? items.map((props) => (
              <Item
                key={props.sku}
                {...props}
                isLiked={() => getIsLiked(props.sku)}
                toggleLike={() => toggleLike(props.sku)}
                handleDelete={() => handleDelete(props.sku)}
              />
            ))
          : null}
      </Grid>
    </Layout>
  );
};

export default Page;
