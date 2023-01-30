import BreadcrumbM from "./Migalhas";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CanalExibido from "./Player";
import { useParams } from "react-router-dom";

type QualCanalProps = {
    nomeCanal?: string;
    imgCanal?: string;
    catgCanal?: string;
    linkCanal?: string;
}

// const nomeCanal = this.props.match.params.nameChanel

export function VerCanal(props: QualCanalProps) {

    const { id, nome } = useParams();

    return (
        <>
            <Container fluid="md">
                <div>
                    <BreadcrumbM />
                </div>

                <div className="bg-dark text-white">
                    <div className="centered w-75 justify-content-center">
                        <h4>
                            <img src="/src/img/3d-glasses-svgrepo-com.svg" width={"30px"} /> Assistir {id}.
                        </h4>
                        <CanalExibido />
                    </div>
                </div>
            </Container>
        </>
    )
}

