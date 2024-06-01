import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <div className="footer mt-auto py-3 bg-success bottom-fix">
      <Container>
        <Row>
          <Col>
            <p>© {new Date().getFullYear()} Ecommerce</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
