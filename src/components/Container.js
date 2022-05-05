import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import "../css/container.css";
import MovieTile from "./MovieTile";
import {
  fetchPopularMovies,
  fetchTrendingMovies,
  fetchLatestMovies,
  fetchTopratedMovies,
  fetchPopularTv,
  fetchTrendingTv,
  fetchLatestTv,
  fetchTopratedTv,
} from "../utils/helpers";
import Sidebar from "./Sidebar";
import Filter from "./Filter";
import { getYear, getGenre } from "../utils/helpers";

const Container = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("popular");
  const [selectedType, setSelectedType] = useState("movie");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [isDataFiltered, setIsDataFiltered] = useState(false);
  const [selectedFromDate, setSelectedFromDate] = useState("");
  const [selectedToDate, setSelectedToDate] = useState("2022");

  useEffect(() => {
    if (selectedType === "tv") {
      onFilterApply(selectedFilter);
    }
  }, [selectedType]);

  //at first load popular movies are loaded
  const {
    data: popularMoviesData,
    status: popularMoviesStatus,
    refetch: refetchPopularMovies,
  } = useQuery("popularMovies", fetchPopularMovies, { keepPreviousData: true });

  const {
    data: trendingMoviesData,
    status: trendingMoviesStatus,
    refetch: refetchTrendingMovies,
  } = useQuery("trendingMovies", fetchTrendingMovies, {
    enabled: false,
    keepPreviousData: true,
  });

  const {
    data: latestMoviesData,
    status: latestMoviesStatus,
    refetch: refetchLatestMovies,
  } = useQuery("latestMovies", fetchLatestMovies, {
    enabled: false,
    keepPreviousData: true,
  });

  const {
    data: topratedMoviesData,
    status: topratedMoviesStatus,
    refetch: refetchTopratedMovies,
  } = useQuery("topratedMovies", fetchTopratedMovies, {
    enabled: false,
    keepPreviousData: true,
  });

  const {
    data: popularTvData,
    status: popularTvStatus,
    refetch: refetchPopularTv,
  } = useQuery("popularTv", fetchPopularTv, {
    enabled: false,
    keepPreviousData: true,
  });

  const {
    data: trendingTvData,
    status: trendingTvStatus,
    refetch: refetchTrendingTv,
  } = useQuery("trendingTv", fetchTrendingTv, {
    enabled: false,
    keepPreviousData: true,
  });

  const {
    data: latestTvData,
    status: latestTvStatus,
    refetch: refetchLatestTv,
  } = useQuery("latestTv", fetchLatestTv, {
    enabled: false,
    keepPreviousData: true,
  });

  const {
    data: topratedTvData,
    status: topratedTvStatus,
    refetch: refetchTopratedTv,
  } = useQuery("topratedMovies", fetchTopratedTv, {
    enabled: false,
    keepPreviousData: true,
  });

  if (
    popularMoviesStatus === "loading" ||
    trendingMoviesStatus === "loading" ||
    latestMoviesStatus === "loading" ||
    topratedMoviesStatus === "loading" ||
    popularTvStatus === "loading" ||
    trendingTvStatus === "loading" ||
    latestTvStatus === "loading" ||
    topratedTvStatus === "loading"
  ) {
    return <div className="loader"></div>;
  }

  if (
    popularMoviesStatus === "error" ||
    trendingMoviesStatus === "error" ||
    latestMoviesStatus === "error" ||
    topratedMoviesStatus === "error" ||
    popularTvStatus === "error" ||
    trendingTvStatus === "error" ||
    latestTvStatus === "error" ||
    topratedTvStatus === "error"
  ) {
    return <div style={{ color: "white" }}>Something Went Wrong!</div>;
  }

  const onFilterApply = (type) => {
    setSelectedFilter(type);
    if (type === "popular") {
      if (selectedType === "tv") refetchPopularTv();
      else refetchPopularMovies();
    }
    if (type === "trending") {
      if (selectedType === "tv") refetchTrendingTv();
      else refetchTrendingMovies();
    } else if (type === "latest") {
      if (selectedType === "tv") refetchLatestTv();
      else refetchLatestMovies();
    } else if (type === "toprated") {
      if (selectedType === "tv") refetchTopratedTv();
      else refetchTopratedMovies();
    }
  };

  const onTypeFilterChange = (type) => {
    setSelectedType(type);
  };

  const onGenreChange = (newGenre) => {
    setSelectedGenre(newGenre);
    setIsDataFiltered(true);
  };

  const onToDateChange = (newDate) => {
    setSelectedFromDate(newDate);
    setIsDataFiltered(true);
  };

  const onFromDateChange = (newDate) => {
    setSelectedFromDate(newDate);
    setIsDataFiltered(true);
  };

  const getfilteredData = () => {
    let result = [];
    if (selectedType === "movie") {
      if (selectedFilter === "popular") {
        //genre filter check
        popularMoviesData.filter((e) => {
          if (e.genre_ids.includes(selectedGenre.value)) {
            result.push(e);
          }
          //date filter check
          if (getYear(e.release_date) <= selectedToDate) {
            if (selectedFromDate !== "") {
              if (getYear(e.release_date >= selectedFromDate)) result.push(e);
            }
          }
        });
      } else if (selectedFilter === "trending") {
        trendingMoviesData.filter((e) => {
          if (e.genre_ids.includes(selectedGenre.value)) result.push(e);
        });
      } else if (selectedFilter === "latest") {
        latestMoviesData.filter((e) => {
          if (e.genre_ids.includes(selectedGenre.value)) result.push(e);
        });
      } else if (selectedFilter === "toprated") {
        topratedMoviesData.filter((e) => {
          if (e.genre_ids.includes(selectedGenre.value)) result.push(e);
        });
      }
    } else if (selectedType === "tv") {
      if (selectedFilter === "popular") {
        popularTvData &&
          popularTvData.filter((e) => {
            if (e.genre_ids.includes(selectedGenre.value)) result.push(e);
          });
      } else if (selectedFilter === "trending") {
        trendingTvData &&
          trendingTvData.filter((e) => {
            if (e.genre_ids.includes(selectedGenre.value)) result.push(e);
          });
      } else if (selectedFilter === "latest") {
        latestTvData &&
          latestTvData.filter((e) => {
            if (e.genre_ids.includes(selectedGenre.value)) result.push(e);
          });
      } else if (selectedFilter === "toprated") {
        topratedTvData &&
          topratedTvData.filter((e) => {
            if (e.genre_ids.includes(selectedGenre.value)) result.push(e);
          });
      }
    }
    return result;
  };

  const getData = () => {
    let data = [];
    if (selectedFilter === "popular") {
      if (selectedType === "tv") data = popularTvData ? popularTvData : [];
      else data = popularMoviesData;
    } else if (selectedFilter === "trending") {
      if (selectedType === "tv") data = trendingTvData ? trendingTvData : [];
      else data = trendingMoviesData;
    } else if (selectedFilter === "latest") {
      // latest api only returns a single movie/tv, which has been added recently
      // most of the times it only has a name, and no image
      let result = [];
      if (selectedType === "tv") latestTvData && result.push(latestTvData);
      else result.push(latestMoviesData);
      data = result;
    } else if (selectedFilter === "toprated") {
      if (selectedType === "tv") data = topratedTvData ? topratedTvData : [];
      else data = topratedMoviesData;
    }
    return data;
  };



  return (
    <div className="container">
      <p className="hdr-txt">Discover </p>

      <div className="filter-bar">
        <Filter onFilterApply={onFilterApply} selectedFilter={selectedFilter} />
      </div>
      <div style={{ overflow: "auto" }}>
        <div className="popular-movies">
          {!isDataFiltered &&
            getData().map((movie) => {
              return (
                <MovieTile
                  key={movie.id}
                  movie={movie}
                  selectedType={selectedType}
                />
              );
            })}
          {isDataFiltered &&
            getfilteredData().map((movie) => {
              return (
                <MovieTile
                  key={movie.id}
                  movie={movie}
                  selectedType={selectedType}
                />
              );
            })}
        </div>
        <div className="sidebar">
          <Sidebar
            selectedType={selectedType}
            setSelectedType={onTypeFilterChange}
            selectedGenre={selectedGenre}
            setSelectedGenre={onGenreChange}
            setSelectedDateTo={onToDateChange}
            setSelectedDateFrom={onFromDateChange}
            selectedToDate={selectedToDate}
            onSearch={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
