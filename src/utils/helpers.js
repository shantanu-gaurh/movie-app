//keeping common mukltiple usage functions at a common place
import { urls, tvGenres, movieGenres } from "./constants";

export const fetchPopularMovies = async () => {
  const data = await fetch(urls.popularMovies);
  const movies = await data.json();
  return movies.results;
};

export const fetchTrendingMovies = async () => {
  const url = urls.trendingMovies;
  const data = await fetch(url);
  const movies = await data.json();
  return movies.results;
};

export const fetchLatestMovies = async () => {
  const data = await fetch(urls.latestMovies);
  const movies = await data.json();
  return movies;
};

export const fetchTopratedMovies = async () => {
  const data = await fetch(urls.topRatedMovies);
  const movies = await data.json();
  return movies.results;
};

export const fetchPopularTv = async () => {
  const data = await fetch(urls.popularTv);
  const tv = await data.json();
  return tv.results;
};

export const fetchTrendingTv = async () => {
  const url = urls.trendingTv;
  const data = await fetch(url);
  const tv = await data.json();
  return tv.results;
};

export const fetchLatestTv = async () => {
  const data = await fetch(urls.latestTv);
  const tv = await data.json();
  return tv;
};

export const fetchTopratedTv = async () => {
  const data = await fetch(urls.topRatedTv);
  const tv = await data.json();
  return tv.results;
};

export const getYear = (date) => {
  const temp = new Date(date);
  return temp.toISOString().split("-")[0];
};

export const getGenre = (type, ids) => {
  let result = [];
  if (type === "movie") {
    ids.forEach((id) => {
      movieGenres.filter((e) => {
        if (e.id === id) {
          result.push(e.name);
        }
      });
    });
  } else if (type === "tv") {
    ids.forEach((id) => {
      tvGenres.filter((e) => {
        if (e.id === id) {
          result.push(e.name);
        }
      });
    });
  }
  return result;
};
