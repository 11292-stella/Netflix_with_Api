import { Container, Row, Col, Dropdown, Button, Form } from "react-bootstrap"

const EditProfile = () => {
  return (
    <main>
      <Container>
        <Row>
          <Col xs={9} className="text-light">
            <h1>Edit Profile</h1>
          </Col>
          <hr className="text-light" />
        </Row>

        <Row>
          <Col xs={4}>
            <img
              src="public/avatar.png"
              alt="logo"
              className="img-fluid"
              style={{ width: "160px", height: "auto" }}
            />
          </Col>
          <Col xs={6}>
            <div className="bg-secondary text-light p-2 text-start">
              Strive Student
            </div>
            <div className="bg-dark text-light mt-3 p-2">Language:</div>
            <div className="mt-2">
              <Dropdown>
                <Dropdown.Toggle
                  variant="dark"
                  className="rounded-0 bg-black border border-light"
                >
                  English
                </Dropdown.Toggle>
              </Dropdown>
            </div>
          </Col>
        </Row>

        {/* Riga hr e impostazioni */}
        <Row className="mt-3">
          <Col xs={6} className="offset-4">
            <hr className="text-bg-secondary" />
            <p className="text-light">Maturity Setting :</p>
            <div className="bg-secondary text-light p-2 text-start">
              ALL MATURITY RATINGS
            </div>
            <div className="mt-2">
              <Dropdown>
                <Dropdown.Toggle
                  variant="dark"
                  className="rounded-0 bg-black text-secondary border border-secondary"
                >
                  Edit
                </Dropdown.Toggle>
              </Dropdown>
              <hr className="text-bg-secondary" />
              <p className="text-light">Autoplay Controls :</p>
              <Form.Check
                type="checkbox"
                label="Autoplay next episode in a series on device"
                id="autoplay1"
                className="text-light"
              />
              <Form.Check
                type="checkbox"
                label="Autoplay next episode in a series on device"
                id="autoplay2"
                className="text-light"
              />
            </div>
          </Col>
        </Row>

        <hr className="text-bg-secondary" />

        {/* Bottoni */}
        <Row className="justify-content-center mt-3">
          <Col xs="auto">
            <Button variant="light" className="rounded-0 border border-light">
              Save
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              variant="dark"
              className="rounded-0 border border-secondary text-secondary"
            >
              Cancel
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              variant="dark"
              className="rounded-0 border border-secondary text-secondary"
            >
              Delete Profile
            </Button>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default EditProfile
