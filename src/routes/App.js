import React from 'react';
import "./App.css";
import { Container, Row, Col } from 'reactstrap';

import Header from './components/shared/Header/header.component';
import Footer from './components/shared/Footer/footer.component';
import Register from './components/register/register.component';

function App() {
  return (
    <div className="App">
    <Container>
      <Row>
        <Col>
          <Header/>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Register />
        </Col>
      </Row>

      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;