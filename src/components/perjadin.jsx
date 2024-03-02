import React, { useState } from 'react';
import { Container, Row, Col, Card, ProgressBar, Form, Button, Table } from 'react-bootstrap';
import Header from './navbar';
import FooterApp from './footer';

const MyForm = () => {
  const [formData, setFormData] = useState({
    judulkegiatan: '',
    email: '',
    datemulai: '',
    dateselesai: '',
    jumlahorang: '',
    alamat: '',
    // Add other form fields as needed
  });

  const [activeStep, setActiveStep] = useState(1);
  const [progress, setProgress] = useState(50);

  const nextStep = () => {
    setActiveStep(2);
    updateProgressBar(100);
  };

  const prevStep = () => {
    setActiveStep(1);
    updateProgressBar(50);
  };

  const submitForm = () => {
    saveFormData();
    // Redirect to the result page with the form data
    window.location.href = `/result?judulkegiatan=${formData.judulkegiatan}&email=${formData.email}&datemulai=${formData.datemulai}&dateselesai=${formData.dateselesai}&jumlahorang=${formData.jumlahorang}&alamat=${formData.alamat}`;
  };  

  const saveFormData = () => {
    // Implement your form data saving logic here
  };

  const updateProgressBar = (width) => {
    setProgress(width);
  };

  return (
    <>
    <Header/>
    <Container>
      <Row className="justify-content-md-center mt-5 pt-5 ">
        <Col md={10}>
          <Card className='text-secondary'>
            <Card.Header>{activeStep === 1 ? 'Informasi Dasar' : 'Informasi Orang'}</Card.Header>
            <Card.Body className='mx-4'>
              <ProgressBar now={progress} label={`${progress}%`} className='my-5'/>
              {activeStep === 1 && (
                <div id="step1" className="step">
                  <Form.Group className="mb-3">
                    <Form.Label>Masukan Judul Kegiatan Perjalanan (Sesuai dengan surat undangan)</Form.Label>
                    <Form.Control as="textarea" rows={3} name="judulkegiatan" onChange={(e) => setFormData({ ...formData, judulkegiatan: e.target.value })} />
                  </Form.Group>
                  <Row className="mb-3">
                    <Col sm={4}>
                      <Form.Label>Tanggal Mulai Acara</Form.Label>
                      <Form.Control type='date' name="datemulai" onChange={(e) => setFormData({ ...formData, datemulai: e.target.value })} />
                    </Col>
                    <Col sm={4}>
                      <Form.Label>Tanggal Selesai Acara</Form.Label>
                      <Form.Control type='date' name="dateselesai" onChange={(e) => setFormData({ ...formData, dateselesai: e.target.value })} />
                    </Col>
                    <Col sm={4}>
                      <Form.Label>Jumlah Orang yang Berangkat</Form.Label>
                      <Form.Control type='number' min={0} name="jmlorang" onChange={(e) => setFormData({ ...formData, jmlorang: e.target.value })} />
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control as="textarea" rows={3} name="alamat" onChange={(e) => setFormData({ ...formData, alamat: e.target.value })} />
                  </Form.Group>
                  <Row className="mb-5">
                    <Col sm={4}>
                      <Form.Label>Upload Surat Undangan</Form.Label>
                      <Form.Control type='file' name="suratundangan" onChange={(e) => setFormData({ ...formData, suratundangan: e.target.value })} />
                    </Col>
                    <Col sm={4}>
                      <Form.Label>Upload Surat Tugas</Form.Label>
                      <Form.Control type='file' name="surattugas" onChange={(e) => setFormData({ ...formData, surattugas: e.target.value })} />
                    </Col>
                    <Col sm={4}>
                      <Form.Label>Pilih Fasilitas</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>-Pilih-</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Button variant="primary" className="w-50 d-grid gap-2 col-6 mx-auto my-3" onClick={nextStep}>
                    Next
                  </Button>
                </div>
              )}
              {activeStep === 2 && (
                <div id="step2" className="step">
                  <Card className='my-5 text-secondary'>
                    <Card.Body>
                      <Row className='mb-2'>
                        <Col sm={4}>Judul Surat Undangan </Col>
                        <Col sm={8}>{formData.judulkegiatan}</Col>
                      </Row>
                      <Row className='mb-2'>
                        <Col sm={4}>Tanggal Pelaksanaan </Col>
                        <Col>{formData.datemulai} - {formData.dateselesai}</Col>
                      </Row>
                      <Row className='mb-2'>
                        <Col sm={4}>Lokasi</Col>
                        <Col>{formData.alamat}</Col>
                      </Row>
                      <Row className='mb-2'>
                        <Col sm={4}>Lampiran</Col>
                        <Col></Col>
                      </Row>
                    </Card.Body>
                  </Card>
                  <Card className='mb-5'>
                    <Card.Body>
                      <Table striped responsive>
                        <thead className='text-secondary'>
                            <tr>
                            <th>No</th>
                            <th>Nama Lengkap</th>
                            <th>Pangkat/Golongan</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                  <Row className='mb-2'>
                    <Col xs={12} xl={6} className='mb-2'>
                      <Button className='btn-primary small fw-bold w-100' onClick={prevStep}>Sebelumnya</Button>
                    </Col>
                    <Col xs={12} xl={6} className='mb-2'>
                      <Button variant='warning' className='small fw-bold w-100 text-white' onClick={submitForm}>Kirim</Button>
                    </Col>
                  </Row>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <FooterApp/>
    </>
  );
};

export default MyForm;
