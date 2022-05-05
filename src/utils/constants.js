// api key generated from the website

const api_key = "da5bbae6b98b9c28c4aecc27fba19802";
const base_url = "https://api.themoviedb.org/3";
export const image_base_url = "https://image.tmdb.org/t/p/w500";

export const urls = {
  popularMovies: `${base_url}/movie/popular?api_key=${api_key}&language=en-US&page=1`,
  trendingMovies: `${base_url}/trending/movie/day?api_key=${api_key}`,
  latestMovies: `${base_url}/movie/latest?api_key=${api_key}&language=en-US`,
  topRatedMovies: `${base_url}/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,

  popularTv: `${base_url}/tv/popular?api_key=${api_key}&language=en-US&page=1`,
  trendingTv: `${base_url}/trending/tv/day?api_key=${api_key}`,
  latestTv: `${base_url}/tv/latest?api_key=${api_key}&language=en-US`,
  topRatedTv: `${base_url}/tv/top_rated?api_key=${api_key}&language=en-US&page=1`,
};

// have used /genre/movie/list to get genres
export const movieGenres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

export const tvGenres = [
  { id: 10759, name: "Action & Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 10762, name: "Kids" },
  { id: 9648, name: "Mystery" },
  { id: 10763, name: "News" },
  { id: 10764, name: "Reality" },
  { id: 10765, name: "Sci-Fi & Fantasy" },
  { id: 10766, name: "Soap" },
  { id: 10767, name: "Talk" },
  { id: 10768, name: "War & Politics" },
  { id: 37, name: "Western" },
];
