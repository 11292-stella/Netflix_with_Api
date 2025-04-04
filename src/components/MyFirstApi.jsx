import { Component } from "react"
import { Row, Col, Container, Spinner } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import { Carousel } from "react-bootstrap"
import "./imgStyles.css"

const URL = "https://www.omdbapi.com/?apikey=fcd33959&s=harry%20potter"
class MyFirstApi extends Component {
  state = {
    movie: [],
    isLoading: true,
    isError: false,
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
          isLoading: false,
        })
      })
      .catch((err) => {
        console.log("errore", err)
        this.setState({
          isLoading: false,
          isError: true,
        })
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
        {this.state.isLoading && (
          <div className="text-center my-3">
            <Spinner animation="border" variant="light" />
          </div>
        )}
        <Row xs={2} sm={3} md={4} lg={6} xl={10} className="g-4">
          {firstSix.map((movie) => (
            <Col key={movie.imdbID}>
              <Image src={movie.Poster} fluid />
            </Col>
          ))}

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
