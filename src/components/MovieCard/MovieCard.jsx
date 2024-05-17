/* eslint-disable react/prop-types */

function MovieCard({ filmData, onDetails}) {
    const handleClick = () => {
        onDetails(filmData.id)
        
    }
  return (
      <div
          className="max-w-60 cursor-pointer hover:scale-105"
          onClick={() => handleClick()}
      >
      <img
        src={`https://image.tmdb.org/t/p/w500${filmData.poster_path}`}
        alt=""
        className="h-auto max-w-full rounded-lg"
      />
      <p className="text-center text-l font-mono font-semibold">{filmData.title}</p>
      {/* <p>{filmData.overview}</p> */}
    </div>
  );
}

export default MovieCard