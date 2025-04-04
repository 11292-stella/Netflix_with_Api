import { Component } from "react"
import { Row, Col, Container } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import { Carousel } from "react-bootstrap"

const URL = "https://www.omdbapi.com/?apikey=fcd33959&s=harry%20potter"
class MyFirstApi extends Component {
  state = {
    movie: [],
  }

  recPoster = () => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore nella fetch")
        }
      })
      .then((data) => {
        console.log("film", data)
        this.setState({
          movie: data.Search,
        })
      })
      .catch((err) => {
        console.log("errore", err)
      })
  }

  componentDidMount = () => {
    this.recPoster()
  }

  render() {
    const { movie } = this.state
    const firstSix = movie.slice(0, 5)
    const remaining = movie.slice(5, 10)
    return (
      <Container className="my-5">
        <Row xs={2} sm={3} md={4} lg={6} xl={10} className="g-4">
          {/* Renderizza le prime 6 immagini */}
          {firstSix.map((movie) => (
            <Col key={movie.imdbID}>
              <Image src={movie.Poster} fluid />
            </Col>
          ))}

          {/* Aggiungi un carosello per le restanti immagini nell'ultima colonna */}
          <Col key="carousel" className="d-flex justify-content-center">
            <Carousel>
              {remaining.map((movie) => (
                <Carousel.Item key={movie.imdbID}>
                  <Image src={movie.Poster} fluid />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MyFirstApi
