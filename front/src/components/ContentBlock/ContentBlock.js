import { Row, Col } from "react-bootstrap";
import "./styles.css";

const ContentBlock = ({ children }) => {
  return (
    <div>
      <Row className="px-1 mx-content">{children}</Row>
    </div>
  );
};

export default ContentBlock;
