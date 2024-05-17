import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Navigation from "../Navigation/Navigation"


const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailPage"))
const NotFoundPage = lazy(()=> import("../../pages/NotFoundPage/NotFoundPage"))



function App() {

  return (
    <div className="">
      <Navigation />

      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App
