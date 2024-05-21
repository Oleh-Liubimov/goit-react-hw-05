import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchMovieCast } from "../../api-request"

export default function MovieCast() {
  const { movieId } = useParams()
  console.log(movieId);
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";


  const [cast, setCast] = useState([])
  // console.log(cast);
  
  useEffect(() => {
    const fetchCast = async () => {
      console.log(movieId);
      try {
        const data = await fetchMovieCast(movieId);
        console.log(data.data.cast.slice(0, 5));
        setCast(data.data.cast.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [movieId]);


  return (
    <ul className="flex gap-3 mt-5">
      {cast.map((p) => (
        <li key={p.id}>
          <img
            className="w-[250px] rounded-lg"
            src={
              p.profile_path
                ? `https://image.tmdb.org/t/p/w500${p.profile_path}`
                : defaultImg
            }
            alt="Actor picture"
          />
          <p className="text-center font-mono font-bold text-xl">{p.name}</p>
          <p className="text-center">as</p>
          <p className="text-center font-mono font-bold text-xl">
            {p.character}
          </p>
        </li>
      ))}
    </ul>
  );
}
