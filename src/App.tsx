import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Header from './components/Header';
import Input from './components/Input';

function App() {
  const [user, setUser] = useState('')

  return (
    <>
      <div className="d-flex flex-column overflow-hidden min-vh-100 vh-100">
        <Header />
        <Container className="d-flex flex-grow-1 align-items-center justify-content-center text-center">
          <Row>
            <Col>
              <h1>mal-stats</h1>
              <h3>Enter Your MyAnimeList Username</h3>
              <form onSubmit={e => {
                e.preventDefault();
                const username = (document.getElementById('username') as HTMLInputElement).value
                setUser(username)
              }}>
                {/* TODO: Replace CDN link with local image
        <img style={{ 'borderRadius': '50%', width: '30%' }} src="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png" alt="avatar" /> */}
                <input id="username" type="text" name="username" autoComplete="off" />
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default App
