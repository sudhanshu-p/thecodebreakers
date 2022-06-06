import React from 'react';
import "./Register.css";
import { Container, Row, Col } from 'reactstrap';

import Header from '../components/header.component';
import Footer from '../components/footer.component';
import Register from '../components/register.component';

function mRegister() {
  return (
    <div className="register">
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

export default mRegister;