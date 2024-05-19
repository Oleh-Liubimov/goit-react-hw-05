import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Navigation from "../../components/Navigation/Navigation"
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchMovieOnQuery } from "../../api-request";
import { useSearchParams } from "react-router-dom";




function MoviesPage() {

  const [searchQuery, setSearchQuery] = useState("");
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(searchQuery);
  // console.log(films);


 function handleSubmit(values,actions) {
   setSearchQuery(values.search)
   actions.resetForm();
  }

  useEffect(() => {
    if (!searchQuery) return;
    setFilms([]);
    async function getMovies() {
      const data = await fetchMovieOnQuery(searchQuery);
      setFilms(data.data.results);
    }
    getMovies();
  }, [searchQuery]);


  return (
    <div>
      <Navigation>
        <SearchBar onSubmit={handleSubmit} onChange={setSearchParams} />
      </Navigation>
      <MovieList data={films} />
    </div>
  );
}

export default MoviesPage