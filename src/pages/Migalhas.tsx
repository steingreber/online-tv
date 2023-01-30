import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useParams } from "react-router-dom";

function BreadcrumbM() {
  const { id, nome } = useParams();
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{id}</Breadcrumb.Item>
    </Breadcrumb>
  );
}
export default BreadcrumbM;