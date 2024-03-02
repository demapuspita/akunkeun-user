import Header from './components/navbar';
import FooterApp from './components/footer';
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import CustomFigure from './components/figure';

const figuresData = [
  { src: './images/1 - Judul Program.png', caption: '1. Judul Program' },
  { src: './images/2 - Informasi Kegiatan.png', caption: '2. Informasi Kegiatan' },
  { src: './images/3 - Informasi Orang.png', caption: '3. Informasi Orang' },
  { src: './images/4 - Fasilitas.png', caption: '4. Fasilitas' },
  { src: './images/5 - Mobilisasi.png', caption: '5. Mobilisasi' },
  { src: './images/6 - Sarana dan Prasarana.png', caption: '6. Sarana dan Prasarana' },
  { src: './images/7 - Formulir Peminjaman.png', caption: '1. Formulir Peminjaman' },
  { src: './images/8 - Peminjaman Asset.png', caption: '2. Peminjaman Asset' },
  // Add more data as needed
];

function App() {
  return (
    <div className="App">
      <Header/>

      <Container className="mt-5 pt-5">
        <Card bg='light' className='p-5'>
          <Row className='text-secondary'>
            <Col xs={12} md={6} lg={6} className="mb-3" md={{ order: 2 }}>
              <img src="./images/jumbotron.png" className='img-fluid mw-md-170 mw-lg-150 mb-6 mb-md-0' alt="" />
            </Col>
            <Col xs={12} md={6} lg={6} className="mb-3" md={{ order: 1 }}>
              <Row className='mb-3'>
                <Col className='mb-4'>
                  <img src="./images/logo akunkeun.png" alt="" className='lldiktifinal'/>
                </Col>
                <br />
              <h1 className="text-md-start fw-bold">AKUNKEUN<br/></h1>                    
              <p className="lead text-md-start text-muted mb-3 mb-lg-8 small">Aplikasi Kegiatan dan Urusan Keuangan</p>
              </Row>
              <Row className='mb-2'>
                <Col xs={12} xl={6} className='mb-2'>
                  <Button className='btn-primary small fw-bold w-100'>Ajukan Perjalanan Dinas!</Button>
                </Col>
                <Col xs={12} xl={6} className='mb-2'>
                  <Button variant='warning' className='small fw-bold w-100 text-white'>Ajukan Kegiatan Dinas!</Button>
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col>
                <img src="./images/LLDIKTI4 final1.png" width="150px" alt="" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>

      <Container className='mt-5'>
        <Row>
          <h3 className="fw-bold text-secondary mb-3">Fitur Aplikasi Akunkeun</h3>
        </Row>
        <Row>
          <Col lg={4} className='mb-3'>
            <Card bg="light" className='p-1 imgFitur'>
              <Card.Header>
              <Card.Img variant="top" src="./images/Perjalanan Dinas.png" alt="Perjalanan Dinas"/>
              </Card.Header>
              <Card.Body className='text-secondary'>
                <Card.Title className='fw-bold h5'>Perjalanan Dinas</Card.Title>
                <Card.Text className='small  pb-3'>
                 Pengajuan perjalanan dinas saat ini dapat dilakukan secara online dan akan diproses secara langsung sehingga keefisiensian waktu bisa dimanfaatkan secara maximal.
                </Card.Text>
              </Card.Body>
              <Card.Footer bg='light' boder='0'>
                <Button size='sm' className='btn-primary small fw-bold w-100' >Ajukan Perjalanan Dinas</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={4} className='mb-3'>
            <Card bg="light" className='p-1 imgFitur'>
              <Card.Header>
              <Card.Img variant="top" src="./images/Program Kegiatan.png" alt="Program Kegiatan" />
              </Card.Header>
              <Card.Body className='text-secondary'>
                <Card.Title className='fw-bold h5'>Program Kegiatan</Card.Title>
                <Card.Text className="small  pb-3">
                  Pengajuan Program Kegiatan saat ini dapat dilakukan secara online hanya dengan melengkapi formulir program yang diajukan akan segera diproses oleh pihak keuangan.
                </Card.Text>
              </Card.Body>
              <Card.Footer bg='light' boder='0'>
                <Button size='sm' className='btn-primary small fw-bold w-100' >Ajukan Program Kegiatan</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={4} className='mb-3'>
            <Card bg="light" className='p-1 imgFitur'>
              <Card.Header>
              <Card.Img variant="top" src="./images/Peminjaman Asset.png" alt='Peminjaman Asset' />
              </Card.Header>
              <Card.Body className='text-secondary'>
                <Card.Title className='fw-bold h5'>Peminjaman Asset BMN</Card.Title>
                <Card.Text className="small  pb-3">
                 Peminjaman aset BMN saat ini dapat dilakukan secara online, pengaju hanya perlu memilih assets yang akan dipinjam lalu pihak BMN akan segera memprosesnya.
                </Card.Text>
              </Card.Body>
              <Card.Footer bg='light' boder='0'>
                <Button size='sm' className='btn-primary small fw-bold w-100' >Ajukan Permohonan Peminjaman</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className='mt-5'>
        <Row>
          <Col md={12}>
            <Card border='0' className='mb-3 p-3 text-secondary'>
              <Row className='d-flex align-items-center'>
                <Col xs={12} md={5} lg={5} className='mb-3'>
                  <img src="./images/Perjalanan Dinas - 2.png" className="img-fluid rounded-start" alt="" />
                </Col>
                <Col xs={12} md={2} lg={2} className='mb-3'>
                  <div className='circle-with-text bg-secondary text-white fw-bold h4 mx-auto'>01</div>
                </Col>
                <Col xs={12} md={5} lg={5} className='mb-3'>
                  <Card.Title className='fw-bold'>Perjalanan Dinas</Card.Title>
                  <Card.Text className='small'>Pengajuan perjalanan dinas sekarang bias dilakukan secara online dan akan diproses secara langsung sehingga keefisiensian waktu bias dimanfaatkan secara maximal, proses pengajuan ada 2 tahap yaitu mengisi surat undangan dan surat tugas lalu mengisi data orang yang akan diajukan melakukan perjalan dinas.</Card.Text>
                  <div className='text-center mb-3 small d-md-none d-lg-block'>
                    {figuresData.slice(0, 2).map((figure, index) => (
                      <CustomFigure key={index} src={figure.src} caption={figure.caption} />
                    ))}
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card border='0' className='mb-3 p-3 text-secondary'>
              <Row className='d-flex align-items-center'>
                <Col xs={12} md={5} lg={5} className='mb-3'>
                  <img src="./images/Program Kegiatan - 2.png" className="img-fluid rounded-start" alt="" />
                </Col>
                <Col xs={12} md={2} lg={2} className='mb-3'>
                  <div className='circle-with-text bg-secondary text-white fw-bold h4 mx-auto'>02</div>
                </Col>
                <Col xs={12} md={5} lg={5} className='mb-3'>
                  <Card.Title className='fw-bold'>Program Kegiatan</Card.Title>
                  <Card.Text className='small'>Pengajuan Program Kegiatan sekarang bias dilakukan secara online pengaju hanya tinggal melengkapi formulirnya maka program yang diajukan akan diproses oleh pihak keuangan. ada 6 tahap proses pengajuan program seperti ilustrasi dibawah.</Card.Text>
                  <div className='text-center mb-3 small d-md-none d-lg-block'>
                    {figuresData.slice(0, 6).map((figure, index) => (
                      <CustomFigure key={index} src={figure.src} caption={figure.caption} />
                    ))}
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card border='0' className='mb-3 p-3 text-secondary'>
              <Row className='d-flex align-items-center'>
                <Col xs={12} md={5} lg={5} className='mb-3'>
                  <img src="./images/Peminjaman Asset - 2.png" className="img-fluid rounded-start" alt="" />
                </Col>
                <Col xs={12} md={2} lg={2} className='mb-3'>
                  <div className='circle-with-text bg-secondary text-white fw-bold h4 mx-auto'>03</div>
                </Col>
                <Col xs={12} md={5} lg={5} className='mb-3'>
                  <Card.Title className='fw-bold'>Peminjaman Aset BMN</Card.Title>
                  <Card.Text className='small'>Peminjaman assets BMN sekarang bias dilakukan secara online, pengaju hanya tinggal memilih assets yang akan dipinjamkan lalu pihak BMN akan memprosesnya. adapun fiktur untuk permohonan perbaikan assets yang sedang dipinjam jika ada masalah yang terdapat pada barang yang dipinjam.</Card.Text>
                  <div className='text-center mb-3 small d-md-none d-lg-block'>
                    {figuresData.slice(6, 8).map((figure, index) => (
                      <CustomFigure key={index} src={figure.src} caption={figure.caption} />
                    ))}
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>

      <FooterApp/>
    </div>
  );
}

export default App;
