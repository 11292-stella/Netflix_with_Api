import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import { Container } from "react-bootstrap"
import MyFirstApi from "./components/MyFirstApi"
import MySeconApi from "./components/MySecondApi"
import MyThirdApi from "./components/MyThirdApi"
import EditProfile from "./components/EditProfile"

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark">
      <MyNav />
      <main className="flex-grow-1">
        <Container>
          <MyFirstApi />
          <MySeconApi />
          <MyThirdApi />
        </Container>
      </main>
      <MyFooter />
    </div>
  )
}

export default App
