import React from "react";
import StarRating from "./StarRating";

const Filter = ({
  textFilter,
  rateFilter,
  handleTitleFilter,
  handleRateFilter,
}) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={textFilter}
        onChange={(e) => handleTitleFilter(e.target.value)}
      />
      <StarRating rateFilter={rateFilter} handleRateFilter={handleRateFilter} />
    </div>
  );
};

export default Filter;