import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../../api-request";
import Navigation from "../../components/Navigation/Navigation";

export default function MovieDetailPage() {
  const { movieId } = useParams();
  

  const [movie, setMovie] = useState([]);
  

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        // console.log(data.data);
        setMovie(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, [movieId]);

  return (
    <div>
      <Navigation />
      <div className="flex items-center p-5 gap-5">
        <div className="w-1/4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col items-start gap-5 w-3/4">
          <h2 className="text-2xl font-mono font-bold">{movie.title}</h2>
          <p className="font-mono">{movie.tagline}</p>
          <p className="font-mono text-xl font-bold">Overview</p>
          <p className="font-mono">{movie.overview}</p>
          <p className="font-mono text-xl font-bold">Average rating</p>
          <p>{movie.vote_average}</p>
          <p className="font-mono text-xl font-bold">Genres</p>
          <div className="flex gap-5">
            {movie.genres &&
              movie.genres.map((genre) => (
                <p key={genre.id} className="font-mono text">
                  {genre.name}
                </p>
              ))}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
