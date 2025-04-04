import { Component } from "react"
import { Row, Col, Container, Modal, Button } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import { Carousel } from "react-bootstrap"

const URL = "https://www.omdbapi.com/?apikey=fcd33959&s=Resident%20Evil"
class MySecondApi extends Component {
  state = {
    movie: [],
    selectedMovies: null,
    showModal: false,
  }
  showModal = (movie) => {
    this.setState({ selectedMovies: movie, showModal: true })
  }

  closeModal = () => {
    this.setState({ showModal: false, selectedMovies: null })
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
          {firstSix.map((movie) => (
            <Col key={movie.imdbID}>
              <Image
                src={movie.Poster}
                fluid
                onClick={() => {
                  this.showModal(movie)
                }}
              />
            </Col>
          ))}

          {
            <Modal
              show={this.state.showModal}
              onHide={this.closeModal}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton className="bg-dark">
                <Modal.Title className="text-light">
                  {this.state.selectedMovies?.Title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="bg-dark">
                <p className="text-light">
                  <strong>Year:</strong> {this.state.selectedMovies?.Year}
                </p>
                <p className="text-light">
                  <strong>Type:</strong> {this.state.selectedMovies?.Type}
                </p>
                <Image
                  src={this.state.selectedMovies?.Poster}
                  fluid
                  alt={this.state.selectedMovies?.Title}
                />
              </Modal.Body>
              <Modal.Footer className="bg-dark">
                <Button variant="secondary" onClick={this.closeModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          }

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

export default MySecondApi
