import axios from "axios";

// const key = "536bd557521c6d10f141b6c6b45335f7";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzZiZDU1NzUyMWM2ZDEwZjE0MWI2YzZiNDUzMzVmNyIsInN1YiI6IjY2NDQ3NDczMGMxOGZhZDM4NDI0MWJmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0rrItNhd_rpqSU64nIarPcRXrJpWR1t0C8RZ6eV2VIE",
  },
};


export function fetchTrendingMovies() {
  const res = axios.get(`trending/movie/day?language=en-US`, options);
  return res
}


export function fetchMovieDetails(id) {
  const res = axios.get(`movie/${id}`, options);
  return res
}

export function fetchMovieOnQuery(query) {
  const res = axios.get(`/search/movie?query=${query}&include_adult=false`,options);
  return res
}