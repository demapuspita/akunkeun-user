// ResultPage.js
import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import FooterApp from './footer';
import Header from './navbar';

const ResultPage = () => {
  // Get the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const judulkegiatan = urlParams.get('judulkegiatan') || 'N/A'; // Update parameter name
  const datemulai = urlParams.get('datemulai') || 'N/A';
  const dateselesai = urlParams.get('dateselesai') || 'N/A';
  const jumlahorang = urlParams.get('jumlahorang') || 'N/A';

  return (
    <>
    <Header/>
    <Container>
      <Row className="justify-content-md-center mt-5 pt-5">
        <Col md={10}>
          <Card>
            <Card.Header>Result</Card.Header>
            <Card.Body>
                <Table striped responsive>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Judul Kegiatan</th>
                        <th>Tanggal Mulai Acara</th>
                        <th>Jumlah Orang</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>{judulkegiatan}</td>
                        <td>{datemulai}</td>
                        <td>{dateselesai}</td>
                        <td>{jumlahorang}</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <FooterApp/>
    </>
  );
};

export default ResultPage;
