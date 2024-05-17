import MovieList from "../../components/MovieList/MovieList"
import { fetchMovieDetails, fetchTrendingMovies } from "../../api-request"
import { useEffect,useState} from "react"
import { useParams } from "react-router-dom";

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