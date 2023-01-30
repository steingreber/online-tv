import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardCanal from './CardsCanais';

const pathImg = "/src/imgcanais/"

function TheBody() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste01.png"} nomeCanal="Rede-Brasil" catgCanal="+ Seriados" /></Col>
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste02.png"} nomeCanal="SBT" catgCanal="+ Filmes" linkCanal="SBT" /></Col>
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste03.png"} nomeCanal="RecordTV" catgCanal="+ Canais Abertos" /></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste11.png"} nomeCanal="NovaPlay-TV" catgCanal="+ FIlmes" /></Col>
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste10.png"} nomeCanal="TV-Agua-Boa" catgCanal="+ Filmes" /></Col>
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste06.png"} nomeCanal="Rede-TV" catgCanal="+ Canais Abertos" /></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste07.png"} nomeCanal="TV-Brasil" catgCanal="+ Canais Abertos" /></Col>
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste08.png"} nomeCanal="Tv-Cultura" catgCanal="+ Filmes" /></Col>
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste09.png"} nomeCanal="TV-Gazeta" catgCanal="+ Canais Abertos" /></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste12.png"} nomeCanal="Vintage-TV" catgCanal="+ Filmes" /></Col>
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste13.png"} nomeCanal="AWTv" catgCanal="+ Filmes" /></Col>
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste14.png"} nomeCanal="TV-Classicos" catgCanal="+ Filmes" /></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste15.png"} nomeCanal="GLN-TV" catgCanal="+ Filmes" /></Col>
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste16.png"} nomeCanal="Bons-Tempos-TV" catgCanal="+ Filmes" /></Col>
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste17.png"} nomeCanal="Channel-1" catgCanal="+ Filmes" /></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste18.png"} nomeCanal="Recordacoes-TV" catgCanal="+ Filmes" /></Col>
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste19.png"} nomeCanal="Chips" catgCanal="+ Filmes" /></Col>
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste20.png"} nomeCanal="Web-TV" catgCanal="+ Filmes" /></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste21.png"} nomeCanal="Run-Time" catgCanal="+ Filmes" /></Col>
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste22.png"} nomeCanal="Hits-TV" catgCanal="+ Filmes" /></Col>
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste23.png"} nomeCanal="Imperial-TV" catgCanal="+ Filmes" /></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste24.png"} nomeCanal="Central-TV" catgCanal="+ Filmes" /></Col>
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste25.png"} nomeCanal="Entorno-Sul-TV" catgCanal="+ Filmes" /></Col>
        <Col md="auto"><CardCanal imgCanal={pathImg+"teste26.png"} nomeCanal="ISTV" catgCanal="+ Filmes" /></Col>
      </Row>

      
    </Container>
  );
}



export default TheBody;