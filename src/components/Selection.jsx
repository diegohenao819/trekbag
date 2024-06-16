import { useState } from "react";
import Select from "react-select";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

const Selection = ({ items }) => {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "packed") {
      return b.packed - a.packed;
    }
    if (sortBy === "unpacked") {
      return a.packed - b.packed;
    }
    return;
  });

  return (
    <Select
      onChange={(option) => setSortBy(option.value)}
      defaultValue={sortingOptions[0]}
      options={sortingOptions}
    />
  );
};

export default Selection;
