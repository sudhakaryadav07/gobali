import { UncontrolledTooltip, Col, Row, Card as CardComponent } from "reactstrap";
import Button from "./Button.js";

const Card = ({ onClick }) => {
    return (
        <Col sm="12" md="12" lg="4" className="mb-4 cursor" onClick={(e) => onClick(e)}>
            <CardComponent body className="p-3" >
                <Row sm="12" md="12" lg="12" className="p-3 title-color d-flex justify-content-between" >
                    <Col sm="12" md="12" lg="6" className="p-0">Project Name</Col>
                    <Col sm="12" md="12" lg="6" className=" d-flex justify-content-end">...</Col>
                </Row>
                <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-4 font-14 h3-color">
                    With supporting text below as a natural lead-in to additional content.
                </Row>

                <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-4">
                    <Button color="primary" label="TAG 1" className="mr-2 card-actegory1" />
                    <Button color="primary" label="TAG 2" className="card-category2" />
                </Row>

                <Row sm="12" md="12" lg="12" className="pl-3 pb-3 d-flex justify-content-end">
                    <Col sm="12" md="12" lg="6" className="p-0 d-flex">
                        <Button label="Consumer Indexing" className="card-mt" />
                    </Col>
                    <Col sm="12" md="12" lg="6" className=" d-flex justify-content-end">
                        <td>
                            <div className="avatar-group">
                                <a
                                    className="avatar avatar-sm cavatar  "
                                    href="#pablo"
                                    id="tooltip742438047"
                                    onClick={(e) => e.preventDefault()}>

                                </a>
                                <UncontrolledTooltip
                                    delay={0}
                                    target="tooltip742438047">
                                    Ryan Tompson
                                </UncontrolledTooltip>
                                <a
                                    className="avatar avatar-sm cavatar"
                                    href="#pablo"
                                    id="tooltip941738690"
                                    onClick={(e) => e.preventDefault()}
                                >

                                </a>
                                <UncontrolledTooltip
                                    delay={0}
                                    target="tooltip941738690">
                                    Romina Hadid
                                </UncontrolledTooltip>
                            </div>
                        </td>
                    </Col>
                </Row>
            </CardComponent>
        </Col>

    )
};
export default Card;