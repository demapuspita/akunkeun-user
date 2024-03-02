import React, { useState } from 'react';
import { Container, Row, Col, Card, ProgressBar, Form, Button, Table, Modal } from 'react-bootstrap';
import Header from './navbar';
import FooterApp from './footer';

const Kegiatan = () => {
  const [formData, setFormData] = useState({
    judulkegiatan: '',
    datemulai: '',
    dateselesai: '',
  });

  const [activeStep, setActiveStep] = useState(1);
  const [progress, setProgress] = useState(17);

  const nextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
    updateProgressBar((prevWidth) => prevWidth + 17);
  };

  const prevStep = () => {
    setActiveStep((prevStep) => prevStep > 1 ? prevStep - 1 : prevStep);
    updateProgressBar((prevWidth) => prevWidth - 17);
  };

  const submitForm = () => {
    saveFormData();
    // Redirect to the result page with the form data
    window.location.href = `/result?judulkegiatan=${formData.judulkegiatan}&datemulai=${formData.datemulai}&dateselesai=${formData.dateselesai}`;
  };  

  const saveFormData = () => {
    // Implement your form data saving logic here
  };

  const updateProgressBar = (width) => {
    setProgress(width);
  };

  const getStepHeaderText = (step) => {
    switch (step) {
      case 1:
        return 'Judul Program';
      case 2:
        return 'Informasi Dasar';
      case 3:
        return 'Informasi Orang';
      case 4:
        return 'Mobilitas';
      case 5:
        return 'Fasilitas';
      default:
        return 'Saranan dan Prasarana';
    }
  };
  const [tables, setTables] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentTableIndex, setCurrentTableIndex] = useState(null);
  const [tableName, setTableName] = useState('');
  const [rowData, setRowData] = useState({
    // Define the structure of your data row here
    // Example:
    header1: '',
    header2: '',
  });

  const handleAddTableClick = () => {
    setTables([...tables, { name: tableName, data: [] }]);
    setTableName('');
  };

  const handleDeleteTable = (index) => {
    const updatedTables = [...tables];
    updatedTables.splice(index, 1);
    setTables(updatedTables);
  };
  const handleAddRowClick = (index) => {
    setCurrentTableIndex(index);
    setRowData({
      header1: '',
      header2: '',
      // Add more fields as needed
    });
    setShowModal(true);
  };

  const handleModalClose = () => {
    setCurrentTableIndex(null);
    setShowModal(false);
  };

  const handleSaveRow = () => {
    if (currentTableIndex !== null) {
      const updatedTables = [...tables];
      updatedTables[currentTableIndex].data.push(rowData);
      setTables(updatedTables);
      setCurrentTableIndex(null);
    }
    setShowModal(false);
  };

  const handleRowInputChange = (e) => {
    const { name, value } = e.target;
    setRowData({
      ...rowData,
      [name]: value,
    });
  };

  // Step 4 tables
  const [tablesStep4, setTablesStep4] = useState([]);
  const [showModalStep4, setShowModalStep4] = useState(false);
  const [currentTableIndexStep4, setCurrentTableIndexStep4] = useState(null);
  const [tableNameStep4, setTableNameStep4] = useState('');
  const [rowDataStep4, setRowDataStep4] = useState({
    header1: '',
    header2: '',
    // Add more fields as needed for step4
  });

  const handleAddTableClickStep4 = () => {
    setTablesStep4([...tablesStep4, { name: tableNameStep4, data: [] }]);
    setTableNameStep4('');
  };

  const handleDeleteTableStep4 = (index) => {
    const updatedTablesStep4 = [...tablesStep4];
    updatedTablesStep4.splice(index, 1);
    setTablesStep4(updatedTablesStep4);
  };

  const handleAddRowClickStep4 = (index) => {
    setCurrentTableIndexStep4(index);
    setRowDataStep4({
      header1: '',
      header2: '',
      // Add more fields as needed for step4
    });
    setShowModalStep4(true);
  };

  const handleModalCloseStep4 = () => {
    setCurrentTableIndexStep4(null);
    setShowModalStep4(false);
  };

  const handleSaveRowStep4 = () => {
    if (currentTableIndexStep4 !== null) {
      const updatedTablesStep4 = [...tablesStep4];
      updatedTablesStep4[currentTableIndexStep4].data.push(rowDataStep4);
      setTablesStep4(updatedTablesStep4);
      setCurrentTableIndexStep4(null);
    }
    setShowModalStep4(false);
  };

  const handleRowInputChangeStep4 = (e) => {
    const { name, value } = e.target;
    setRowDataStep4({
      ...rowDataStep4,
      [name]: value,
    });
  };

  return (
    <>
    <Header/>
    <Container>
      <Row className="justify-content-md-center mt-5 pt-5 ">
        <Col md={10}>
          <Card className='text-secondary'>
            <Card.Header>{getStepHeaderText(activeStep)}</Card.Header>
            <Card.Body className='mx-4'>
              <ProgressBar now={progress} label={`${progress}%`} className='my-5'/>
              {activeStep === 1 && (
                <div id="step1" className="step">
                    <Form.Group className='mb-3'>
                        <Form.Label>Sasaran Kegiatan</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>-Pilih-</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Indikator Kegiatan</Form.Label>
                        <Form.Control type='text' name="indikator" onChange={(e) => setFormData({ ...formData, indikator: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Program Kerja</Form.Label>
                        <Form.Control type='text' name="programkerja" onChange={(e) => setFormData({ ...formData, programkerja: e.target.value })} />
                    </Form.Group>
                    <Button variant="primary" className="w-50 d-grid gap-2 col-6 mx-auto my-3" onClick={nextStep}>
                        Next
                    </Button>
                </div>
              )}
              {activeStep === 2 && (
                <div id="step2" className="step">
                  {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="Luring"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="Daring"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        <Form.Check
                            inline
                            label="Hybrid"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        </div>
                    ))}
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
                    <Row className="mb-3">
                        <Col sm={4}>
                            <Form.Label>Provinsi</Form.Label>
                            <Form.Control type='text' name="provinsi" onChange={(e) => setFormData({ ...formData, provinsi: e.target.value })} />
                        </Col>
                        <Col sm={4}>
                            <Form.Label>Kota/Kabupaten</Form.Label>
                            <Form.Control type='text' name="kota" onChange={(e) => setFormData({ ...formData, kota: e.target.value })} />
                        </Col>
                        <Col sm={4}>
                            <Form.Label>Kecamatan</Form.Label>
                            <Form.Control type='text' name="kecamatan" onChange={(e) => setFormData({ ...formData, kecamatan: e.target.value })} />
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Alamat Lengkap</Form.Label>
                        <Form.Control as="textarea" rows={3} name="alamat" onChange={(e) => setFormData({ ...formData, alamat: e.target.value })} />
                    </Form.Group>
                    <Row className='mb-2'>
                    <Col xs={12} xl={6} className='mb-2'>
                      <Button variant='warning' className='small fw-bold w-100' onClick={prevStep}>Sebelumnya</Button>
                    </Col>
                    <Col xs={12} xl={6} className='mb-2'>
                    <Button variant="primary" className="small fw-bold w-100" onClick={nextStep}>
                        Next
                    </Button>
                    </Col>
                  </Row>
                </div>
              )}
              {activeStep === 3 && (
                <div id="step3" className="step">
                  <Card className='my-5 text-secondary'>
                    <Card.Body>
                      <Form.Group>
                        <Form.Label>Table Name:</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter table name'
                          value={tableName}
                          onChange={(e) => setTableName(e.target.value)}
                        />
                      </Form.Group>

                      <Button onClick={handleAddTableClick}>Add New Table</Button>

                      {tables.map((table, index) => (
                        <div key={index} className='mt-4'>
                          <h3>{table.name}</h3>
                          <Button variant="danger" onClick={() => handleDeleteTable(index)}>
                            Delete Table
                          </Button>
                          <Table striped bordered hover>
                            <thead>
                              <tr>
                                <th>Header 1</th>
                                <th>Header 2</th>
                                {/* Add more headers as needed */}
                              </tr>
                            </thead>
                            <tbody>
                              {table.data.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                  <td>{row.header1}</td>
                                  <td>{row.header2}</td>
                                  {/* Add more cells for additional headers */}
                                </tr>
                              ))}
                            </tbody>
                          </Table>

                          <Button onClick={() => handleAddRowClick(index)}>Add Data Row</Button>
                        </div>
                      ))}

                      <Modal show={showModal} onHide={handleModalClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Add Data Row</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form.Group>
                            <Form.Label>Header 1:</Form.Label>
                            <Form.Control
                              type='text'
                              name='header1'
                              value={rowData.header1}
                              onChange={handleRowInputChange}
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Header 2:</Form.Label>
                            <Form.Control
                              type='text'
                              name='header2'
                              value={rowData.header2}
                              onChange={handleRowInputChange}
                            />
                          </Form.Group>
                          {/* Add more form fields as needed */}
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant='secondary' onClick={handleModalClose}>
                            Close
                          </Button>
                          <Button variant='primary' onClick={handleSaveRow}>
                            Save Data Row
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </Card.Body>
                  </Card>
                  <Row className='mb-2'>
                    <Col xs={12} xl={6} className='mb-2'>
                      <Button variant='warning' className='small fw-bold w-100' onClick={prevStep}>Sebelumnya</Button>
                    </Col>
                    <Col xs={12} xl={6} className='mb-2'>
                    <Button className="btn-primary small fw-bold w-100" onClick={nextStep}>Selanjutnya</Button>
                    </Col>
                  </Row>
                </div>
              )}
              {activeStep === 4 && (
    <div id='step4' className="step">
      <Card className='my-5 text-secondary'>
        <Card.Body>
          <Form.Group>
            <Form.Label>Table Name:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter table name'
              value={tableNameStep4}
              onChange={(e) => setTableNameStep4(e.target.value)}
            />
          </Form.Group>

          <Button onClick={handleAddTableClickStep4}>Add New Table</Button>

          {tablesStep4.map((table, index) => (
            <div key={index} className='mt-4'>
              <h3>{table.name}</h3>
              <Button variant="danger" onClick={() => handleDeleteTableStep4(index)}>
                Delete Table
              </Button>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                    {/* Add more headers as needed for step4 */}
                  </tr>
                </thead>
                <tbody>
                  {table.data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      <td>{row.header1}</td>
                      <td>{row.header2}</td>
                      {/* Add more cells for additional headers for step4 */}
                    </tr>
                  ))}
                </tbody>
              </Table>

              <Button onClick={() => handleAddRowClickStep4(index)}>Add Data Row</Button>
            </div>
          ))}

          <Modal show={showModalStep4} onHide={handleModalCloseStep4}>
            <Modal.Header closeButton>
              <Modal.Title>Add Data Row</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Label>Header 1:</Form.Label>
                <Form.Control
                  type='text'
                  name='header1'
                  value={rowDataStep4.header1}
                  onChange={handleRowInputChangeStep4}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Header 2:</Form.Label>
                <Form.Control
                  type='text'
                  name='header2'
                  value={rowDataStep4.header2}
                  onChange={handleRowInputChangeStep4}
                />
              </Form.Group>
              {/* Add more form fields as needed for step4 */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleModalCloseStep4}>
                Close
              </Button>
              <Button variant='primary' onClick={handleSaveRowStep4}>
                Save Data Row
              </Button>
            </Modal.Footer>
          </Modal>
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

export default Kegiatan;
