import Header from './components/header'
import User from './components/user'
import Channel from './components/channel'
import Category from './components/category'
import Message from './components/message'
import Notification from './components/notification'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap";


function App() {
  return (
  <Router>
    <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Header/>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Routes>
              <Route exact path='/' element={<User/>} />
              <Route path='/channels' element={<Channel/>} />
              <Route path='/categories' element={<Category/>} />
              <Route path='/messages' element={<Message/>} />
              <Route path='/notifications' element={<Notification/>} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>
  )
}

export default App
