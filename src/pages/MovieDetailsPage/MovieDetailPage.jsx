import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../../api-request";
import Navigation from "../../components/Navigation/Navigation";
import BackLink from "../../components/BackLink/BackLink";

export default function MovieDetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state ?? "/movies";
const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  


  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
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
      <div className="p-5">
        <BackLink to={backLinkHref}>Go back</BackLink>
        <div className="flex items-center gap-5">
          <div className="w-1/4">
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : defaultImg}
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
        </div>
        <div className="flex gap-3 mt-5">
          <Link
            to={"cast"}
            className="p-3 bg-orange-300 rounded hover:bg-orange-400"
          >
            See movie cast
          </Link>
          <Link
            to={"reviews"}
            className="p-3 bg-orange-300 rounded hover:bg-orange-400"
          >
            See movie review
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
