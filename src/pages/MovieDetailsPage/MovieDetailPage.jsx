import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import { Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../../api-request";

export default function MovieDetailPage() {
    const movie = useLoaderData();
    

    const { movieId } = useParams();

    


  return (
    <div>
      {movie.title}
      <Outlet />
    </div>
  );
}


export const movieDetailsLoader = ({params}) => {
    const data = fetchMovieDetails(params.movieId)
    return data
}