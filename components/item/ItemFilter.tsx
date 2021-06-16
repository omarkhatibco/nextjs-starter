import styled from "styled-components";

interface Props {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const ItemFilter: React.FC<Props> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const onChange = (e) => {
    const { value } = e.target;
    setSelectedCategory(`${value}`);
  };

  return (
    <Wrapper>
      <Select value={selectedCategory} onChange={onChange}>
        <option value={""}>Alle</option>
        {Array.isArray(categories)
          ? categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))
          : null}
      </Select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block-end: 2rem;
`;

const Select = styled.select``;
