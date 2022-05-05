import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import "../css/sidebar.css";

const Sidebar = (props) => {
  const {
    selectedType,
    setSelectedType,
    setSelectedGenre,
    setSelectedDateTo,
    setSelectedDateFrom,
    selectedToDate,
    onSearch,
  } = props;

  const getTypeDrpDwn = () => {
    const options = [
      { value: "movie", label: "Movies" },
      { value: "tv", label: "TV" },
    ];

    return (
      <Dropdown
        className="sidebar-drpdwn"
        options={options}
        onChange={(e) => {
          setSelectedType(e.value);
        }}
        value={selectedType}
      />
    );
  };

  const getGenreDrpDwn = () => {
    const options =
      selectedType === "tv"
        ? [
            { value: 10759, label: "Action & Adventure" },
            { value: 80, label: "Crime" },
            { value: 35, label: "Comedy" },
          ]
        : [
            { value: 28, label: "Action" },
            { value: 80, label: "Crime" },
            { value: 35, label: "Comedy" },
          ];
    return (
      <Dropdown
        className="sidebar-drpdwn"
        options={options}
        onChange={(e) => {
          setSelectedGenre(e);
        }}
        // value={defaultOption}
        placeholder="Select an option"
      />
    );
  };

  const getYearDrpDwn = () => {
    const optionsFrom = ["2018", "2019", "2020", "2021", "2022"];
    const optionsTo = ["2019", "2020", "2021", "2022"];
    return (
      <div className="date-container">
        <Dropdown
          className="sidebar-drpdwn date"
          options={optionsFrom}
          onChange={(e) => {
            setSelectedDateFrom(e);
          }}
          // value={defaultOption}
          placeholder="From"
        />
        <Dropdown
          className="sidebar-drpdwn date"
          options={optionsTo}
          onChange={(e) => {
            setSelectedDateTo(e);
          }}
          value={selectedToDate}
          placeholder="To"
        />
      </div>
    );
  };

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  function saveInput(text) {
    onSearch(text);
  }

  const onInputDebounce = debounce((e) => saveInput(e.target.value));

  return (
    <div>
      <span className="sidebar-hdr">Filter Options</span>
      <div style={{ paddingTop: "10px" }}>
        <input
          type="text"
          className="search"
          placeholder="Search.. (WIP)"
          onKeyUp={onInputDebounce}
        ></input>
      </div>
      <div style={{ paddingTop: "10px" }}>
        <span className="sidebar-labels">Type</span>
        {getTypeDrpDwn()}
      </div>
      <div style={{ paddingTop: "10px" }}>
        <span className="sidebar-labels">Genre</span>
        {getGenreDrpDwn()}
      </div>
      <div style={{ paddingTop: "10px" }}>
        <span className="sidebar-labels">Date (WIP)</span>
        {getYearDrpDwn()}
      </div>
    </div>
  );
};

export default Sidebar;
