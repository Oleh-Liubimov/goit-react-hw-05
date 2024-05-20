import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Navigation from "../../components/Navigation/Navigation"
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchMovieOnQuery } from "../../api-request";
import { useSearchParams } from "react-router-dom";




function MoviesPage() {

  
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query")
  const [searchQuery, setSearchQuery] = useState(query || "");


  console.log(searchQuery);
  // console.log(films);

  function updateQuery(query) {
    const nextQuery = query !== "" ? { query } : {}
    setSearchParams(nextQuery)
  }


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
        <SearchBar onSubmit={handleSubmit} onChange={updateQuery} />
      </Navigation>
      <MovieList data={films} />
    </div>
  );
}

export default MoviesPage