/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";

function MovieCard({ filmData }) {
  const location = useLocation();
  

 
  return (
    <div className="max-w-60 cursor-pointer hover:scale-105">
      <Link
        to={`${filmData.id}`}
        state={location}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${filmData.poster_path}`}
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