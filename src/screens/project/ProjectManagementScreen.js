
import React from "react";
import { FormGroup, Label, ButtonGroup, UncontrolledTooltip, Col, CardTitle, CardText, Container, Row, Card } from "reactstrap";
import UserHeader from "../../components/Headers/UserHeader";
import CityView from './components/CityView';
import Button from '../../components/Common/Button.js';
import InputBox from '../../components/Common/Inputbox.js';
import ScrollWrapper from "../../components/Common/ScrollWrapper";
import SelectField from "../../components/Common/SelectField";
import { FLAG, DATA } from "config/constants";
import Pagination from "../../components/Common/Pagination";

const ProjectManagementScreen = () => {
  return (
    <>
      <UserHeader />
      <Container className="p-0 display-content secondary">

        <Row sm="12" md="12" lg="12" className="mt-4 mr-3 ml-3 mb-5 d-flex justify-content-end">
          <Button color="primary" label="+" />
          <i class="fa fa-plus-square-o" style={{ fontSize: 40 }} aria-hidden="true"></i>
        </Row>

        <Row sm="12" md="12" lg="3" className="mt-4 mr-3 ml-3 mb-5">
          <Col sm="12" md="12" lg="4">
            <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-3 label-color font-26" >
              Category 1 (02)
            </Row>
            <Card body className="p-3" >
              <Row sm="12" md="12" lg="12" className="p-3 title-color d-flex justify-content-between" >
                <Col sm="12" md="12" lg="6" className="p-0">Project Name</Col>
                <Col sm="12" md="12" lg="6" className=" d-flex justify-content-end">...</Col>
              </Row>
              <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-4 font-14 h3-color">
                With supporting text below as a natural lead-in to additional content.
              </Row>

              <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-4">
                <Button color="primary" label="TAG 1" className="mr-2 category1" />
                <Button color="primary" label="TAG 2" className="category2" />
              </Row>

              <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-3 d-flex justify-content-end">
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
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
                      className="avatar avatar-sm"
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
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip804044742"
                      onClick={(e) => e.preventDefault()}
                    >

                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip804044742"
                    >
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip996637554"
                      onClick={(e) => e.preventDefault()}>

                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip996637554"
                    >
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
              </Row>

            </Card>
          </Col>


          <Col sm="12" md="12" lg="4">
            <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-3 label-color font-26" >
              Category 1 (02)
            </Row>
            <Card body className="p-3" >
              <Row sm="12" md="12" lg="12" className="p-3 title-color d-flex justify-content-between" >
                <Col sm="12" md="12" lg="6" className="p-0">Project Name</Col>
                <Col sm="12" md="12" lg="6" className=" d-flex justify-content-end">...</Col>
              </Row>
              <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-4 font-14 h3-color">
                With supporting text below as a natural lead-in to additional content.
              </Row>

              <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-4">
                <Button color="primary" label="TAG 1" className="mr-2 category1" />
                <Button color="primary" label="TAG 2" className="category2" />
              </Row>

              <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-3 d-flex justify-content-end">
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
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
                      className="avatar avatar-sm"
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
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip804044742"
                      onClick={(e) => e.preventDefault()}
                    >

                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip804044742"
                    >
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip996637554"
                      onClick={(e) => e.preventDefault()}>

                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip996637554"
                    >
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
              </Row>

            </Card>
          </Col>



          <Col sm="12" md="12" lg="4">
            <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-3 label-color font-26" >
              Category 1 (02)
            </Row>
            <Card body className="p-3" >
              <Row sm="12" md="12" lg="12" className="p-3 title-color d-flex justify-content-between" >
                <Col sm="12" md="12" lg="6" className="p-0">Project Name</Col>
                <Col sm="12" md="12" lg="6" className=" d-flex justify-content-end">...</Col>
              </Row>
              <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-4 font-14 h3-color">
                With supporting text below as a natural lead-in to additional content.
              </Row>

              <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-4">
                <Button color="primary" label="TAG 1" className="mr-2 category1" />
                <Button color="primary" label="TAG 2" className="category2" />
              </Row>

              <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-3 d-flex justify-content-end">
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
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
                      className="avatar avatar-sm"
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
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip804044742"
                      onClick={(e) => e.preventDefault()}
                    >

                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip804044742"
                    >
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip996637554"
                      onClick={(e) => e.preventDefault()}>

                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip996637554"
                    >
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
              </Row>

            </Card>
          </Col>
        </Row>
        <Row sm="12" md="12" lg="3" className="mt-4 mr-3 ml-3 mb-5">


          <Col sm="12" md="12" lg="4">
            <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-3 label-color font-26" >
              Category 1 (02)
            </Row>
            <Card body className="p-3" >
              <Row sm="12" md="12" lg="12" className="p-3 title-color d-flex justify-content-between" >
                <Col sm="12" md="12" lg="6" className="p-0">Project Name</Col>
                <Col sm="12" md="12" lg="6" className=" d-flex justify-content-end">...</Col>
              </Row>
              <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-4 font-14 h3-color">
                With supporting text below as a natural lead-in to additional content.
              </Row>

              <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-4">
                <Button color="primary" label="TAG 1" className="mr-2 category1" />
                <Button color="primary" label="TAG 2" className="category2" />
              </Row>

              <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-3 d-flex justify-content-end">
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
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
                      className="avatar avatar-sm"
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
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip804044742"
                      onClick={(e) => e.preventDefault()}
                    >

                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip804044742"
                    >
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip996637554"
                      onClick={(e) => e.preventDefault()}>

                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip996637554"
                    >
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
              </Row>

            </Card>
          </Col>

          <Col sm="12" md="12" lg="4">
            <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-3 label-color font-26" >
              Category 1 (02)
            </Row>
            <Card body className="p-3" >
              <Row sm="12" md="12" lg="12" className="p-3 title-color d-flex justify-content-between" >
                <Col sm="12" md="12" lg="6" className="p-0">Project Name</Col>
                <Col sm="12" md="12" lg="6" className=" d-flex justify-content-end">...</Col>
              </Row>
              <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-4 font-14 h3-color">
                With supporting text below as a natural lead-in to additional content.
              </Row>

              <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-4">
                <Button color="primary" label="TAG 1" className="mr-2 category1" />
                <Button color="primary" label="TAG 2" className="category2" />
              </Row>

              <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-3 d-flex justify-content-end">
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
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
                      className="avatar avatar-sm"
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
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip804044742"
                      onClick={(e) => e.preventDefault()}
                    >

                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip804044742"
                    >
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip996637554"
                      onClick={(e) => e.preventDefault()}>

                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip996637554"
                    >
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
              </Row>

            </Card>
          </Col>

          <Col sm="12" md="12" lg="4">
            <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-3 label-color font-26" >
              Category 1 (02)
            </Row>
            <Card body className="p-3" >
              <Row sm="12" md="12" lg="12" className="p-3 title-color d-flex justify-content-between" >
                <Col sm="12" md="12" lg="6" className="p-0">Project Name</Col>
                <Col sm="12" md="12" lg="6" className=" d-flex justify-content-end">...</Col>
              </Row>
              <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-4 font-14 h3-color">
                With supporting text below as a natural lead-in to additional content.
              </Row>

              <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-4">
                <Button color="primary" label="TAG 1" className="mr-2 category1" />
                <Button color="primary" label="TAG 2" className="category2" />
              </Row>

              <Row sm="12" md="12" lg="12" className="pl-3 pr-3 pb-3 d-flex justify-content-end">
                <td>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm"
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
                      className="avatar avatar-sm"
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
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip804044742"
                      onClick={(e) => e.preventDefault()}
                    >

                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip804044742"
                    >
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-sm"
                      href="#pablo"
                      id="tooltip996637554"
                      onClick={(e) => e.preventDefault()}>

                    </a>
                    <UncontrolledTooltip
                      delay={0}
                      target="tooltip996637554"
                    >
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </td>
              </Row>

            </Card>
          </Col>

        </Row>
      </Container >
    </>
  );
};

export default ProjectManagementScreen;
