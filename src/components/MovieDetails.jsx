import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col, Image } from "react-bootstrap"

const MovieDetails = () => {
  const { movieId } = useParams() // Prendi l'ID del film dal parametro dell'URL
  const [movieData, setMovieData] = useState(null)
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const URL = `https://www.omdbapi.com/?apikey=fcd33959&i=${movieId}`
    const URLDUE = `https://striveschool-api.herokuapp.com/api/comments/${movieId}`

    setLoading(true)
    setError(null)

    // Fetch dettagli del film
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nel recupero dei dettagli del film")
        }
      })
      .then((data) => {
        setMovieData(data)
      })
      .catch((err) => {
        setError(err.message)
      })

    // Fetch commenti
    fetch(URLDUE, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMjcwMzM4MzRiZjAwMTUwMDA3MDAiLCJpYXQiOjE3NDM2ODQ3MzYsImV4cCI6MTc0NDg5NDMzNn0.qS52rTci0AyAlbwFKzIjMXL4LY5O0JxHJizWLUJHWUM",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nel recupero dei commenti")
        }
      })
      .then((data) => {
        setComments(data)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [movieId])

  if (loading) {
    return <p>Caricamento...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  if (!movieData) {
    return <p>Film non trovato</p>
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Image src={movieData.Poster} fluid alt={movieData.Title} />
        </Col>
        <Col md={8}>
          <h2>{movieData.Title}</h2>
          <p>
            <strong>Anno:</strong> {movieData.Year}
          </p>
          <p>
            <strong>Genere:</strong> {movieData.Genre}
          </p>
          <p>
            <strong>Trama:</strong> {movieData.Plot}
          </p>
        </Col>
      </Row>

      <h4 className="mt-4">Commenti:</h4>
      <ul>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <li key={comment._id}>
              {comment.comment} – <strong>{comment.rate}/5</strong>
            </li>
          ))
        ) : (
          <p>Nessun commento trovato.</p>
        )}
      </ul>
    </Container>
  )
}

export default MovieDetails
