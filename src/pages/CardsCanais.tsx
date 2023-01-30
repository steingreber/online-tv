import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';

type CanalProps = {
    nomeCanal: string;
    imgCanal: string;
    catgCanal: string;
    linkCanal?: string;
}

function CardCanal(props: CanalProps) {

  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {props.imgCanal} height="150" />
      <Card.Body>
        <Card.Title>{props.nomeCanal}</Card.Title>
        {/* <Card.Link href="#">{props.catgCanal}</Card.Link> */}
      </Card.Body>
      {/* <ButtonGroup size="sm" aria-label="area opções"> */}
        {/* <Button variant="outline-secondary">{props.catgCanal}</Button> */}
        <Button href={"/assistir/" + props.nomeCanal + ""} variant="primary" >Assistir</Button>
      {/* </ButtonGroup>   */}
    </Card>
    <br />
    </>
  );
}

export default CardCanal;