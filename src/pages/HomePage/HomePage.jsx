import MovieList from "../../components/MovieList/MovieList";
import Navigation from "../../components/Navigation/Navigation";
import { fetchTrendingMovies } from "../../api-request";
import { useEffect, useState } from "react";

function HomePage() {
    const [films, setFilms] = useState(() => {
        const savedFilms = localStorage.getItem("saved films")
        return savedFilms ? JSON.parse(savedFilms) : ([])
  });
    const [movieId, setMovieId] = useState(0);
  const [page, setPage] = useState(1)
  
    

    useEffect(() => {
    const fetchData = async () => {
      try {
        setFilms([]);
          const response = await fetchTrendingMovies();
          localStorage.setItem(
            "saved films",
            JSON.stringify(response.data.results)
          );
          setFilms(response.data.results);
          setMovieId(response.data.results.id);
      } catch (error) {
        console.error();
      }
    };
    if(films.length === 0) fetchData();
  }, [films]);

  return (
    <main>
      <Navigation />
      <MovieList data={films} onDetails={setMovieId} />
    </main>
  );
}

export default HomePage;
