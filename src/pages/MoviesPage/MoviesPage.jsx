import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Navigation from "../../components/Navigation/Navigation"
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchMovieOnQuery } from "../../api-request";
import { useSearchParams } from "react-router-dom";




export default function MoviesPage() {

  
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || ""


  

 function handleSubmit(values,actions) {
   const nextQuery = values.search !== "" ? { query:values.search } : {};
   setSearchParams(nextQuery);
   actions.resetForm();
  }

  useEffect(() => {
    if (!query) return;
    setFilms([]);
    async function getMovies() {
      const data = await fetchMovieOnQuery(query);
      setFilms(data.data.results);
    }
    getMovies();
  }, [query]);


  return (
    <div>
      <Navigation>
        <SearchBar onSubmit={handleSubmit} onChange={handleSubmit} />
      </Navigation>
      <MovieList data={films} />
    </div>
  );
}

