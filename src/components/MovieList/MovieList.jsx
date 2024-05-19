import MovieCard from "../MovieCard/MovieCard";

/* eslint-disable react/prop-types */
export default function MovieList({data, onDetails}) {
    return (
      <ul className="flex flex-wrap justify-center gap-4 p-8">
        { data && data.map((film) => (
          <li key={film.id}>
            <MovieCard filmData={film} onDetails={onDetails} />
          </li>
        ))}
      </ul>
    );
}