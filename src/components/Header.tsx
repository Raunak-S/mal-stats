import { Container, Form, Nav, Navbar } from "react-bootstrap"


const Header = () => {


  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* <!-- Bootstrap 5 switch --> */}
          <Form.Check
            type="switch"
            id="darkModeSwitch"
            label="Dark Mode"
            onChange={() => {
              const htmlElement = document.documentElement;
              const currentTheme = localStorage.getItem('bsTheme') || 'light';
              htmlElement.setAttribute('data-bs-theme', currentTheme);
              const checked = currentTheme === 'light';

              if (checked) {
                htmlElement.setAttribute('data-bs-theme', 'dark');
                localStorage.setItem('bsTheme', 'dark');
              } else {
                htmlElement.setAttribute('data-bs-theme', 'light');
                localStorage.setItem('bsTheme', 'light');
              }
            }}
          ></Form.Check>
        </Container>
      </Navbar>
    </>
  )
}

export default Header