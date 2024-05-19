import MovieList from "../../components/MovieList/MovieList";
import Navigation from "../../components/Navigation/Navigation";
import { fetchTrendingMovies } from "../../api-request";
import { useEffect, useState } from "react";

function HomePage() {
  const [films, setFilms] = useState(() => {
      const savedFilms = localStorage.getItem("films");
    return savedFilms ? JSON.parse(savedFilms) : [];
  });
  const [movieId, setMovieId] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFilms([]);
        if (!films) {
          const response = await fetchTrendingMovies();
          localStorage.setItem("films", JSON.stringify(response.data.results));
          setFilms(response.data.results);

          setMovieId(response.data.results.id);
        } else {
          return;
        }
      } catch (error) {
        console.error();
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <Navigation />
      <MovieList data={films} onDetails={setMovieId} />
    </main>
  );
}

export default HomePage;
