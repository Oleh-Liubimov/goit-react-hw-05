/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";


function MovieCard({ filmData }) {
  const location = useLocation();
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  
  return (
    <div className="max-w-60 cursor-pointer hover:scale-105">
      <Link
        to={`/movies/${filmData.id}`}
        state={location}
      >
        <img
          src={filmData.poster_path ? `https://image.tmdb.org/t/p/w500${filmData.poster_path}` : defaultImg}
          alt=""
          className="h-auto max-w-full rounded-lg"
        />
        <p className="text-center text-l font-mono font-semibold">
          {filmData.title}
        </p>
        {/* <p>{filmData.overview}</p> */}
      </Link>
    </div>
  );
}

export default MovieCard