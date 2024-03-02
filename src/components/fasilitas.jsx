import { Container, Row, Col, Card, Form, Modal, InputGroup } from "react-bootstrap";
import FooterApp from "./footer";
import Header from "./navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Fasilitas() {
    return (
        <>
            <Header />

            <Container className="pt-5 mt-5">
            <Col md={8} className="mx-auto text-secondary">
                <Row>
                    <Col md={12}>
                        <h4 className="fw-bold">Cari Barang untuk Dipinjam</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="rounded-pill shadow-sm">
                            <Card.Body>
                                <InputGroup >
                                    <InputGroup.Text id="basic-addon1" className="rounded-0 border-0 bg-white"><FontAwesomeIcon icon={faMagnifyingGlass} /></InputGroup.Text>
                                    <Form.Control className="rounded-0 border-0"
                                    placeholder="Cari sesuatu..."
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                </Row>
            </Col>

            </Container>
            <FooterApp />
        </>
    );
}

export default Fasilitas;