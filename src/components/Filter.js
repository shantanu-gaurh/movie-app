import React from "react";
import "../css/filter.css";

const Filter = (props) => {
  const { onFilterApply, selectedFilter } = props;
  return (
    <div className="filter-container">
      <div className="buttons-div">
        <button
          className={`filter-btn ${selectedFilter === "popular" && `active`}`}
          onClick={() => onFilterApply("popular")}
        >
          Popular
        </button>
        <button
          className={`filter-btn ${selectedFilter === "trending" && `active`}`}
          onClick={() => onFilterApply("trending")}
        >
          Trending
        </button>
        <button
          className={`filter-btn ${selectedFilter === "toprated" && `active`}`}
          onClick={() => onFilterApply("toprated")}
        >
          Top Rated
        </button>
        <button
          className={`filter-btn ${selectedFilter === "latest" && `active`}`}
          onClick={() => onFilterApply("latest")}
        >
          Latest
        </button>
      </div>
    </div>
  );
};

export default Filter;
