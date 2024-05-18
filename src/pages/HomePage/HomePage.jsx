import MovieList from "../../components/MovieList/MovieList"
import { fetchTrendingMovies } from "../../api-request"
import { useEffect,useState} from "react"

function HomePage() {
    const [films, setFilms] = useState([]);
    const [movieId, setMovieId] = useState(0)
    console.log(movieId);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                setFilms([])
                const response = await fetchTrendingMovies();
                setFilms(response.data.results);
                setMovieId(response.data.results.id);
            } catch (error) {
                console.error();
            }

        }
        fetchData()
    },[])

  return (
      <main>
          <MovieList data={films} onDetails={setMovieId} />
    </main>
  )
}

export default HomePage