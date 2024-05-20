import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Navigation from "../Navigation/Navigation"


const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailPage"))
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"))
const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"))
const MovieReviews = lazy(()=> import("../../components/MovieReviews/MovieReviews"))



function App() {

  return (
    <div className="">
      
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<MovieCast/>}/>
            <Route path="/movies/:movieId/reviews" element={<MovieReviews/>}/>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App
