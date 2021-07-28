import { Row, Col } from "react-bootstrap";
import { SvgIcon } from "../../SvgIcon/SvgIcon";
import { Button } from "../../Button/Button";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ButtonWrapper,
  Title,
  ShortLine,
} from "./styles";

const LeftContentBlock = ({ icon, title, content, button, id }) => {
  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row className="mx-0">
          <Col lg={6} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="90%" height="90%" />
          </Col>
          <Col lg={6} md={11} sm={12} xs={24} className="my-auto">
            <ContentWrapper>
              <Title>{title}</Title>
              <ShortLine />
              <Content>{content}</Content>
              <ButtonWrapper>
                <Button
                  color={"transparent"}
                  text={"#DA4459"}
                  outline={"#DA4459"}
                  fixedWidth={true}
                  shadow={"none"}
                >
                  {button}
                </Button>
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default LeftContentBlock;
