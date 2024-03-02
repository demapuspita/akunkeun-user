import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const FooterApp = () => {
  return (
    <>
      <Container bg="light" className='mt-5'>
        <Row xs={1} md={4}>
          <Col className='mb-2'>
            <div className="d-flex flex-row mb-2 justify-content-between">
              <div className="p-2"><img src="./images/logo-user.png" width="100" alt=""/></div>
              <div className="p-2"><img src="./images/LLDIKTI4 final1.png" width="100" alt=""/></div>
            </div>
            <p className="text-muted small text-center text-sm-start">Akunkeun atau Aplikasi Kegiatan dan Urusan Keuangan adalah sebuah aplikasi yang dirancang untuk memudahkan proses pelaksanaan perjalanan dinas dan pemeliharaan barang milik negara di lingkungan LLDIKTI Wilayah IV.</p>
          </Col>
          <Col className='mb-2 text-center text-md-start'>
            <p className="fw-bold text-secondary">Layanan</p>
            <ListGroup variant="flush">
              <ListGroup.Item className='listItem'><a className="text-decoration-none text-muted small" href="">Perjalanan Dinas</a></ListGroup.Item>
              <ListGroup.Item className='listItem'><a className="text-decoration-none text-muted small" href="">Program Kegiatan</a></ListGroup.Item>
              <ListGroup.Item className='listItem'><a className="text-decoration-none text-muted small" href="">Peminjaman Asset BMN</a></ListGroup.Item>
              <ListGroup.Item className='listItem'><a className="text-decoration-none text-muted small" href="">Permohonan Service</a></ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className='mb-2 text-center text-md-start'>
            <p className="fw-bold text-secondary">Link</p>
            <ListGroup variant="flush">
              <ListGroup.Item className='listItem'><a className="text-decoration-none text-muted small" href="">LLDIKTI4</a></ListGroup.Item>
              <ListGroup.Item className='listItem'><a className="text-decoration-none text-muted small" href="">Simojang</a></ListGroup.Item>
              <ListGroup.Item className='listItem'><a className="text-decoration-none text-muted small" href="">SIPPA</a></ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className='mb-2'>
            <p className="fw-bold text-secondary text-center text-md-start">Informasi Kontak</p>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Container fluid>
                  <Row className='align-items-center'>
                    <Col xs={2}><FontAwesomeIcon icon={faPhone} /></Col>
                    <Col xs={10} className='text-muted small'>+022 7275630</Col>
                  </Row>
                </Container>
              </ListGroup.Item>
              <ListGroup.Item>
                <Container fluid>
                  <Row className='align-items-center'>
                    <Col xs={2}><FontAwesomeIcon icon={faEnvelope} /></Col>
                    <Col xs={10} className='text-muted small'>informasi@lldikti4.or.id</Col>
                  </Row>
                </Container>
              </ListGroup.Item>
              <ListGroup.Item>
              <Container fluid>
                  <Row className='align-items-center'>
                    <Col xs={2}><FontAwesomeIcon icon={faLocationDot} /></Col>
                    <Col xs={10} className='text-muted small'>Jalan Penghulu H. Hasan Mustofa No. 38 Bandung 40124</Col>
                  </Row>
                </Container>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>

      <Container bg="light">
        <Row>
          <hr/>
          <p className="small text-muted text-center">
            copyright @2023, MSIB Batch 4 - Tim PKBMN - Dema Puspita
          </p>
        </Row>
      </Container>
    </>
  );
};

export default FooterApp;
