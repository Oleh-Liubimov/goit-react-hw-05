import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../../api-request";

export default function MovieDetailPage() {
  const { movieId } = useParams();
  console.log(movieId);

  const [movie, setMovie] = useState(null);
  console.log(movie);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(...data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, [movieId]);

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <Outlet />
    </div>
  );
}
