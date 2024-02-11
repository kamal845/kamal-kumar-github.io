import './App.css';
 import imagine1 from "./images/287eeba87ee0de0b86a505d68e86ee57.png";
import imagine2 from "./images/screenshot (38).png";
import imagine3 from"./images/6b21bb54db14ed7b2a1f6b8734accad5.png"; 
import imagine4 from "./images/screenshot (99).png";
import imagine5 from "./images/screenshot (3).png";
import imagine007 from "./images/screenshot (007).png";
import imagine888 from "./images/screenshot (888).png";
import imagine0007 from "./images/screenshot (0007).png";
import imagine00007 from "./images/screenshot (00007).png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  return (
    <>
    <Navbar bg="light" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
<img src={imagine1} alt="image" className="imagine1"></img>MATRIX LABS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#home">WhitePaper</Nav.Link>
            <Nav.Link href="#link">Aduit</Nav.Link>
            <Nav.Link href="#link">Telegram</Nav.Link>
            <Button variant="success" className="hike">CONNECT</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 <Container> 
  <Row>
    <h3 className="kuppy">The Kuppy system</h3>
    <h6>The kuppy Clans Ecosystem consists of our two native<br></br>Tokens-Canine Master and Feline Master.</h6>
   <Col xs={6}className="section1 p-0">
    <img src ={imagine4} alt ="imagine4" className="imagine4"></img>
    <div className="mb-3">
      <div className="kamal2">
   <img src={imagine888} alt="imagine888" className="imagine888"></img><br></br>
    <img src={imagine007} alt="imagine"className="imagine007"></img><br></br>
    <img src={imagine00007} alt="imagine"className="imagine00007"></img>
    </div>
      <h3>Tokenomics</h3>
      <Container>
      <Row>
        <Col md><img src={imagine5} alt="image"className="imagine5"></img><h6><strong>10%</strong> team lock</h6></Col>
        <Col md><img src={imagine5} alt="image"className="imagine5"></img><h6><strong>20%</strong> staking rewards</h6></Col>
      </Row>
      <Row>
      <Col md><img src={imagine5} alt="image"className="imagine5"></img><h6><strong>30%</strong> liquidity</h6></Col>
      <Col md><img src={imagine5} alt="image"className="imagine5"></img><h6><strong>40%</strong> fair launch</h6></Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <h3>TAX</h3>
        <Col>
          <h4 className="sike1"><b>3% BUY TAX</b></h4>
          <h4 className="sike2">2% RESERVE</h4>
          <h5 className="sike3">1%Burn</h5>
        </Col>
        <Col>
        <h4><b>7% SELL TAX</b></h4>
          <h4>6% MARKETING</h4>
           <h5>1% Burn</h5>
        </Col>
      </Row>
    </Container>
    </div>
   </Col>
   <Col xs={6} className="section2  p-0">
    <img src={imagine2} alt="imagine2" className="imagine2"></img>
    <img src={imagine3} alt="imagine3" className="imagine3"></img>
    <p>This is a strict Whitelist
    Presales Allocations for the
    Kuppy Clans Community,to
    Whitelist for this pre-Sale, we
    encourage you to stake 
    100,000 Canine Master $CM
    for 90 days.10% of raised
    BUSDs would be used to Buy 
    Back $CM.</p>
   </Col>
 </Row>
</Container>
</>
  );
}
export default App;



   