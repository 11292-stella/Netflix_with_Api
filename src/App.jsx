import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import { Container } from "react-bootstrap"
import MyFirstApi from "./components/MyFirstApi"
import MySeconApi from "./components/MySecondApi"
import MyThirdApi from "./components/MyThirdApi"
import EditProfile from "./components/EditProfile"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MovieDetails from "./components/MovieDetails"
import MyList from "./components/MyList"
function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100 bg-dark">
        <MyNav />
        <main className="flex-grow-1">
          <Container>
            <Routes>
              <Route
                path="/movie-details/:movieId"
                element={<MovieDetails />}
              />
              <Route
                path="/tvshow"
                element={
                  <div>
                    <MyFirstApi />
                    <MySeconApi />
                    <MyThirdApi />
                  </div>
                }
              />
              <Route path="/profile" element={<EditProfile />} />
              <Route path="/mylist" element={<MyList />} />
            </Routes>
          </Container>
        </main>
        <MyFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
