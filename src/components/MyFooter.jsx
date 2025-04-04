import { Container, Row, Col, Button } from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./Footer.css"

const MyFooter = function () {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10}>
            <Row>
              <Col className="mb-3">
                <i className="bi bi-facebook footer-icon me-3"></i>
                <i className="bi bi-instagram footer-icon me-3"></i>
                <i className="bi bi-twitter-x footer-icon me-3"></i>
                <i className="bi bi-youtube footer-icon"></i>
              </Col>
            </Row>

            <Row className="row-cols-2 row-cols-md-4 g-3">
              <Col className="footer-links">
                <p>
                  <a href="#">Audio and Subtitles</a>
                </p>
                <p>
                  <a href="#">Media Center</a>
                </p>
                <p>
                  <a href="#">Privacy</a>
                </p>
                <p>
                  <a href="#">Contact us</a>
                </p>
              </Col>
              <Col className="footer-links">
                <p>
                  <a href="#">Audio Description</a>
                </p>
                <p>
                  <a href="#">Investor Relations</a>
                </p>
                <p>
                  <a href="#">Legal Notices</a>
                </p>
              </Col>
              <Col className="footer-links">
                <p>
                  <a href="#">Help Center</a>
                </p>
                <p>
                  <a href="#">Jobs</a>
                </p>
                <p>
                  <a href="#">Cookie Preferences</a>
                </p>
              </Col>
              <Col className="footer-links">
                <p>
                  <a href="#">Gift Cards</a>
                </p>
                <p>
                  <a href="#">Terms of Use</a>
                </p>
                <p>
                  <a href="#">Corporate Information</a>
                </p>
              </Col>
            </Row>

            <Row>
              <Col className="mt-4">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="rounded-0 footer-button"
                >
                  Service Code
                </Button>
              </Col>
            </Row>

            <Row>
              <Col className="mt-3 copyright text-secondary small">
                © 1997-2023 Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MyFooter
