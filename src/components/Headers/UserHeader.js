import { Container, Row } from "reactstrap";

const UserHeader = () => {
  return (
    <>
      <div
        className="header d-flex align-items-center"
        style={{
          minHeight: "72px",
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center">
          <Row>

          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
