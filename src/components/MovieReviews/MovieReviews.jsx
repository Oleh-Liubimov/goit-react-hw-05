import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchMovieReviews } from "../../api-request"





export default function MovieReviews() {

  const {movieId} = useParams()

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data.data.results.slice(0, 5));
        console.log(data.data.results.slice(0, 5));
      } catch (error) {
        console.log(error);
      }

    }
    fetchReviews()
  }, [movieId])

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0,maxLength) + "..."
    }
    return text
  }


  return (
    <ul className="flex gap-3 mt-5">
      {reviews.map((review) => (
        <li key={review.id} className="max-w-xs h-[250px]">
          <p className="text-center font-mono font-bold">{review.author}</p>
          <p className="">{truncateText(review.content,250)}</p>
        </li>
      ))}
    </ul>
  );
}
