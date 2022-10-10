import Button from '../../components/Common/Button.js';
import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import InputBox from '../../components/Common/Inputbox.js';
import UserHeader from 'components/Headers/UserHeader.js';
import Pagination from 'components/Common/Pagination.js';
import { TASK } from 'config/constants.js';

const ProjectManagementDetail = () => {

    return (
        <>
            <UserHeader />
            <Container className="p-0 display-content secondary">
                <Row sm="12" md="12" lg="12" className='m-3'>
                    <Col sm="12" md="12" lg="6" className='pt-2 p-0 pr-2'>
                        <Card className='full-width'>
                            <CardBody className='p-4 border-radius'>
                                <Row className="m-0 mb-2 h3">
                                    Project Name
                                </Row>
                                <Row className='m-0 mb-3 h6'>
                                    These project will need a new brand identity where they will get recognies.
                                </Row>
                                <Row className='m-0 mb-1 h3'>
                                    <Col sm="12" md="12" lg="2" className='h5 mb-0 pt-3 ptext'>
                                        <Row>Area/Locality</Row>
                                        <Row>Odhisa</Row>
                                    </Col>
                                    <Col sm="12" md="12" lg="2" className='h5 mb-0 pt-3 ptext'>
                                        <Row>Pincode</Row>
                                        <Row>400023</Row>
                                    </Col>
                                    <Col sm="12" md="12" lg="3" className='h5 mb-0 pt-3 ptext'>
                                        <Row>Flow</Row>
                                        <Row>Surveyor</Row>
                                    </Col>
                                    <Col sm="12" md="12" lg="5" className='h5 mb-0 pt-3 ptext'>
                                        <Row>Assigned Project Manager</Row>
                                        <Row>Rocky Dsouza, Pankaj Dhiria</Row>
                                    </Col>
                                </Row>
                                <hr className='mt-3 mb-3' />
                                <Row className='mt-2 mb-2 h6'>
                                    <Col sm="12" md="12" lg="12" >
                                        From List
                                    </Col>
                                </Row>
                                <Container className='m-0 p-0' style={{ height: 175, overflow: "auto" }}>
                                    {TASK.map((item, i) => {
                                        return <Row key={i} className='m-0 mb-1 h3 project-list'>
                                            <Col sm="12" md="12" lg="2" className='h5 mb-0 d-flex align-items-center gtext'>
                                                <i class="fa fa-eye" style={{ marginRight: 15 }} aria-hidden="true"></i>
                                                <i class="fa-thin fa-pencil"></i>
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                            </Col>
                                            <Col sm="12" md="12" lg="2" className='h5 mb-0 d-flex align-items-center gtext'>
                                                <Row>{item.assigned_date}</Row>
                                            </Col>
                                            <Col sm="12" md="12" lg="6" className='h5 mb-0 d-flex align-items-center gtext'>
                                                <Row>{item.linked_form}</Row>
                                            </Col>
                                            <Col sm="12" md="12" lg="2" className='h5 mb-0 p-0 align-items-center gtext d-flex'>
                                                <i class="fa fa-paperclip" style={{ lineHeight: 'inherit', marginRight: 20 }} aria-hidden="true"></i>
                                                <Row>{item.task_name}</Row>
                                            </Col>
                                        </Row>
                                    })}
                                </Container>
                                <Row className='mb-2 h6'>
                                    <Col sm="12" md="12" lg="12" className='d-flex justify-content-start'>
                                        <Button
                                            size="bg"
                                            label="CREATE FORM"
                                            className="cust-btn text-xs full-width mt-4"
                                        />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" md="12" lg="6" className='pt-2 p-0 pl-2' >
                        <Card className='full-width' style={{ height: 597 }}>
                            <CardBody className='p-4 border-radius'>
                                <Row className="m-0 h3">
                                    Task Details
                                </Row>
                                <Row className='m-0 mb-1 h3 d-flex justify-content-between'>
                                    <Col sm="12" md="12" lg="4" className='h5 mb-0 pt-3'>
                                        <Row>Current working users</Row>
                                        <Row className='d-flex align-items-center justify-content-center border-radius mr-2' style={{ backgroundColor: "#E2EBF2", height: 68 }}>40</Row>
                                    </Col>
                                    <Col sm="12" md="12" lg="4" className='h5 mb-0 pt-3'>
                                        <Row>Non working users</Row>
                                        <Row className='d-flex align-items-center justify-content-center border-radius' style={{ backgroundColor: "#E2EBF2", height: 68 }}>20</Row>
                                    </Col>
                                    <Col sm="12" md="12" lg="4" className='h5 mb-0 pt-3'>
                                        <Row>Available users</Row>
                                        <Row className='d-flex align-items-center justify-content-center border-radius ml-2' style={{ backgroundColor: "#E2EBF2", height: 68 }}>20</Row>
                                    </Col>
                                    <Col sm="12" md="12" lg="6" />
                                </Row>
                                <Row className='mb-3 h6'>
                                    <Col sm="12" md="12" lg="2" className='d-flex align-items-center'>
                                        Field user List
                                    </Col>
                                    <Col sm="12" md="12" lg="3" />
                                    <Col sm="12" md="12" lg="5" className='mt-2 pr-0 d-flex justify-contents-end'>
                                        <InputBox
                                            value=""
                                            size="sm"
                                            formClassName="mb-0"
                                            className="user-input text-xs"
                                            name="search"
                                            type="text"
                                            placeholder="Search Name..."
                                            onChange="{handleSearch}"
                                        />
                                    </Col>
                                    <Col sm="12" md="12" lg="2" className='d-flex justify-content-end'>
                                        <Button
                                            size="sm"
                                            color="primary"
                                            label="ADD USER"
                                            className="text-xs full-width mt-4 user-btn-height"
                                        />
                                    </Col>
                                </Row>
                                <div style={{ height: 250, overflow: "auto" }}>
                                    <Row sm="12" md="12" lg="12" className='label-colorlist-navbar user-list-row-header mb-0 h3 ml-0 mr-0 label-color'>
                                        <Col sm="12" md="12" lg="3" className='list-label-color h6 pt-3 pb-2'>
                                            USER NAME
                                        </Col>
                                        <Col sm="12" md="12" lg="2" className='list-label-color ml-0 mr-0 h6 pt-3 pb-2'>
                                            AREA
                                        </Col>
                                        <Col sm="12" md="12" lg="3" className='list-label-color ml-0 mr-0 h6 pt-3 pb-2'>
                                            ASSIGNED TO
                                        </Col>
                                        <Col sm="12" md="12" lg="3" className='list-label-color ml-0 mr-0 h6 p-0 pt-3 pb-2'>
                                            ASSIGNED DATE
                                        </Col>
                                        <Col sm="12" md="12" lg="1" className='list-label-color ml-0 mr-0 h6 p-0 pt-3 pb-2'>
                                            DELETE
                                        </Col>
                                    </Row>
                                    {TASK.map((item, i) => {
                                        return <Row key={i} className='label-coloralt-list-color m-0 user-list-row mb-1 h3 d-flex align-items-center'>
                                            <Col sm="12" md="12" lg="3" className='h6 mb-0 p-0 ml-0 pl-3 mr-0'>
                                                {item.name}
                                            </Col>
                                            <Col sm="12" md="12" lg="2" className='h6 mb-0 p-0 pl-3 ml-0'>
                                                {item.area}
                                            </Col>
                                            <Col sm="12" md="12" lg="3" className='h6 mb-0 p-0 ml-0 pl-3'>
                                                Project Name
                                            </Col>
                                            <Col sm="12" md="12" lg="3" className='h6 mb-0 p-0 ml-0 pl-3'>
                                                {item.assigned_date}
                                            </Col>
                                            <Col sm="12" md="12" lg="1" className='h5 mb-0 pt-0 ml-0 pl-3'>
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                            </Col>
                                        </Row>
                                    })}
                                </div>
                                <Row sm="12" md="12" lg="12" className='mb-0 mr-0'>
                                    <Col sm="12" md="12" lg="12" className='p-0 d-flex justify-content-end'>
                                        <Pagination className="mb-0" />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
                <Row sm="12" md="12" lg="12" className='m-3'>
                    <Col sm="12" md="12" lg="12" className='p-0'>
                        <Row sm="12" md="12" lg="12" className='m-1'>
                            <Col sm="12" md="12" lg="12" className='p-0'>
                                <Card className='full-width'>
                                    <CardBody className='p-4 border-radius'>
                                        <Row className="m-0 h3">
                                            Task Details
                                        </Row>
                                        <Row className='m-0 mb-1 h3'>
                                            <Col sm="12" md="12" lg="2" className='h5 mb-0 pt-3'>
                                                <Row>Task Details</Row>
                                                <Row className='d-flex align-items-center justify-content-center border-radius' style={{ backgroundColor: "#E2EBF2", height: 68 }}>40</Row>
                                            </Col>
                                            <Col sm="12" md="12" lg="2" className='h5 mb-0 pt-3 ml-2'>
                                                <Row>Completed Task</Row>
                                                <Row className='d-flex align-items-center justify-content-center border-radius' style={{ backgroundColor: "#E2EBF2", height: 68 }}>20</Row>
                                            </Col>
                                            <Col sm="12" md="12" lg="2" className='h5 mb-0 pt-3 ml-2'>
                                                <Row>Ongoing Task</Row>
                                                <Row className='d-flex align-items-center justify-content-center border-radius' style={{ backgroundColor: "#E2EBF2", height: 68 }}>20</Row>
                                            </Col>
                                            <Col sm="12" md="12" lg="6" />
                                        </Row>
                                        <Row className='h6'>
                                            <Col sm="12" md="12" lg="2" className='d-flex align-items-center'>
                                                Task Overview
                                            </Col>
                                            <Col sm="12" md="12" lg="5" />
                                            <Col sm="12" md="12" lg="3" className='mt--07 pr-0'>
                                                <InputBox
                                                    value=""
                                                    size="md"
                                                    className="text-xs mb-0"
                                                    name="search"
                                                    type="text"
                                                    placeholder="Search Name..."
                                                    onChange="{handleSearch}"
                                                />
                                            </Col>
                                            <Col sm="12" md="12" lg="2" className='d-flex justify-content-end'>
                                                <Button
                                                    color="primary"
                                                    label="CREATE TASK +"
                                                    className="mt-1 mb-1 full-width task-btn-height"
                                                />
                                            </Col>
                                        </Row>
                                        <div style={{ height: 250, overflow: "auto" }}>
                                            <Row sm="12" md="12" lg="12" className='label-colorlist-navbar m-0 h3 label-color'>
                                                <Col sm="12" md="12" lg="1" className='list-label-color h6 m-0 pt-3'>
                                                    TASK NAME
                                                </Col>
                                                <Col sm="12" md="12" lg="1" className='list-label-color h6 m-0 pt-3'>
                                                    AREA
                                                </Col>
                                                <Col sm="12" md="12" lg="1" className='list-label-color h6 m-0 pt-3'>
                                                    ASSIGNED TO
                                                </Col>
                                                <Col sm="12" md="12" lg="1" className='list-label-color h6 mb-0 p-0 pt-3'>
                                                    ASSIGNED DATE
                                                </Col>
                                                <Col sm="12" md="12" lg="2" className='list-label-color h6 mb-0 p-0 pt-3'>
                                                    START DATE & TIME
                                                </Col>
                                                <Col sm="12" md="12" lg="2" className='list-label-color h6 mb-0 p-0 pt-3'>
                                                    END DATE & TIME
                                                </Col>
                                                <Col sm="12" md="12" lg="1" className='list-label-color h6 mb-0 p-0 pt-3'>
                                                    STATUS
                                                </Col>
                                                <Col sm="12" md="12" lg="1" className='list-label-color h6 mb-0 p-0 pt-3'>
                                                    SUBMITTED RECORDS
                                                </Col>
                                                <Col sm="12" md="12" lg="1" className='list-label-color h6 mb-0 p-0 pt-3'>
                                                    LINKED FORM
                                                </Col>
                                                <Col sm="12" md="12" lg="1" className='list-label-color h6 mb-0 p-0 pt-3'>
                                                    ACTION
                                                </Col>
                                            </Row>
                                            {TASK.map((item, i) => {
                                                return <Row className='m-0 mb-1 pl-3 h3 d-flex align-items-center'>
                                                    <Col sm="12" md="12" lg="1" className='h6 mb-0 p-0'>
                                                        Task One
                                                    </Col>
                                                    <Col sm="12" md="12" lg="1" className='h6 mb-0 p-0'>
                                                        Thane
                                                    </Col>
                                                    <Col sm="12" md="12" lg="1" className='h6 mb-0 p-0'>
                                                        Rockey Dsouza
                                                    </Col>
                                                    <Col sm="12" md="12" lg="1" className='h6 mb-0 p-0'>
                                                        10-08-2022
                                                    </Col>
                                                    <Col sm="12" md="12" lg="2" className='h6 mb-0 p-0'>
                                                        12-08-2022 / 12:00PM
                                                    </Col>
                                                    <Col sm="12" md="12" lg="2" className='h6 mb-0 p-0'>
                                                        13-08-2022 / 14:00PM
                                                    </Col>
                                                    <Col sm="12" md="12" lg="1" className='h6 mb-0 p-0 d-flex'>
                                                        <Button
                                                            size="sm"
                                                            color="success"
                                                            label="Approved"
                                                            className="full-width mt-3 mb-2"
                                                        />
                                                    </Col>
                                                    <Col sm="12" md="12" lg="1" className='h6 mb-0 p-0'>
                                                        20
                                                    </Col>
                                                    <Col sm="12" md="12" lg="1" className='h6 mb-0 p-0'>
                                                        Form 1
                                                    </Col>
                                                    <Col sm="12" md="12" lg="1" className='h5 mb-0 pt-0'>
                                                        <i class="fa fa-eye" style={{ marginRight: 15 }} aria-hidden="true"></i>
                                                        <i class="fa-thin fa-pencil"></i>
                                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                                    </Col>
                                                </Row>
                                            })}
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ProjectManagementDetail;