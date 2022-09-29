import Button from '../../components/Common/Button.js';
import React, { useState } from 'react';

import {
    Container,
    Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText
} from 'reactstrap';
import SelectField from '../../components/Common/SelectField.js';
import { PERMISSION } from 'config/constants.js';
import InputBox from '../../components/Common/Inputbox.js';
import Checkbox from '../../components/Common/Checkbox.js';
import UserHeader from 'components/Headers/UserHeader.js';

const ProjectManagementDetail = ({ isOpen, className, handleModal }) => {


    const [name, setName] = useState();
    const [assets, setAssets] = useState();
    const [pincode, setPincode] = useState();
    const [area, setArea] = useState();
    const [placeholder, setPlaceholder] = useState();
    const [description, setDescription] = useState();

    const handleCancel = () => {
        try {
            handleModal(!isOpen);
        } catch (e) {

        }

    };

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
                                    <Col sm="12" md="12" lg="2" className='h5 mb-0 pt-3'>
                                        <Row>Area/Locality</Row>
                                        <Row>Odhisa</Row>
                                    </Col>
                                    <Col sm="12" md="12" lg="2" className='h5 mb-0 pt-3'>
                                        <Row>Pincode</Row>
                                        <Row>400023</Row>
                                    </Col>
                                    <Col sm="12" md="12" lg="3" className='h5 mb-0 pt-3'>
                                        <Row>Flow</Row>
                                        <Row>Surveyor</Row>
                                    </Col>
                                    <Col sm="12" md="12" lg="5" className='h5 mb-0 pt-3'>
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
                                    <Row className='m-0 mb-1 h3 list-border list-height'>
                                        <Col sm="12" md="12" lg="2" className='h5 mb-0 pt-3'>
                                            <i class="fa fa-eye" style={{ marginRight: 15 }} aria-hidden="true"></i>
                                            <i class="fa-thin fa-pencil"></i>
                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                        </Col>
                                        <Col sm="12" md="12" lg="2" className='h5 mb-0 pt-3'>
                                            <Row>19/01/2022</Row>
                                        </Col>
                                        <Col sm="12" md="12" lg="6" className='h5 mb-0 pt-3'>
                                            <Row>Form 1</Row>
                                        </Col>
                                        <Col sm="12" md="12" lg="2" className='h5 mb-0 p-0 pt-3  d-flex'>
                                            <i class="fa fa-paperclip" style={{ lineHeight: 'inherit', marginRight: 20 }} aria-hidden="true"></i>
                                            <Row>Task One</Row>
                                        </Col>
                                    </Row>
                                    <Row className='m-0 mb-1 h3 list-border list-height'>
                                        <Col sm="12" md="12" lg="2" className='h5 mb-0 pt-3'>
                                            <i class="fa fa-eye" style={{ marginRight: 15 }} aria-hidden="true"></i>
                                            <i class="fa-thin fa-pencil"></i>
                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                        </Col>
                                        <Col sm="12" md="12" lg="2" className='h5 mb-0 pt-3'>
                                            <Row>19/01/2022</Row>
                                        </Col>
                                        <Col sm="12" md="12" lg="6" className='h5 mb-0 pt-3'>
                                            <Row>Form 1</Row>
                                        </Col>
                                        <Col sm="12" md="12" lg="2" className='h5 mb-0 p-0 pt-3  d-flex'>
                                            <i class="fa fa-paperclip" style={{ lineHeight: 'inherit', marginRight: 20 }} aria-hidden="true"></i>
                                            <Row>Task One</Row>
                                        </Col>
                                    </Row>
                                    <Row className='m-0 mb-1 h3 list-border list-height'>
                                        <Col sm="12" md="12" lg="2" className='h5 mb-0 pt-3'>
                                            <i class="fa fa-eye" style={{ marginRight: 15 }} aria-hidden="true"></i>
                                            <i class="fa-thin fa-pencil"></i>
                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                        </Col>
                                        <Col sm="12" md="12" lg="2" className='h5 mb-0 pt-3'>
                                            <Row>19/01/2022</Row>
                                        </Col>
                                        <Col sm="12" md="12" lg="6" className='h5 mb-0 pt-3'>
                                            <Row>Form 1</Row>
                                        </Col>
                                        <Col sm="12" md="12" lg="2" className='h5 mb-0 p-0 pt-3  d-flex'>
                                            <i class="fa fa-paperclip" style={{ lineHeight: 'inherit', marginRight: 20 }} aria-hidden="true"></i>
                                            <Row>Task One</Row>
                                        </Col>
                                    </Row>
                                    <Row className='m-0 mb-1 h3 list-border list-height'>
                                        <Col sm="12" md="12" lg="2" className='h5 mb-0 pt-3'>
                                            <i class="fa fa-eye" style={{ marginRight: 15 }} aria-hidden="true"></i>
                                            <i class="fa-thin fa-pencil"></i>
                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                        </Col>
                                        <Col sm="12" md="12" lg="2" className='h5 mb-0 pt-3'>
                                            <Row>19/01/2022</Row>
                                        </Col>
                                        <Col sm="12" md="12" lg="6" className='h5 mb-0 pt-3'>
                                            <Row>Form 1</Row>
                                        </Col>
                                        <Col sm="12" md="12" lg="2" className='h5 mb-0 p-0 pt-3  d-flex'>
                                            <i class="fa fa-paperclip" style={{ lineHeight: 'inherit', marginRight: 20 }} aria-hidden="true"></i>
                                            <Row>Task One</Row>
                                        </Col>
                                    </Row>
                                </Container>
                                <Row className='mb-2 h6'>
                                    <Col sm="12" md="12" lg="12" className='d-flex justify-content-start'>
                                        <Button
                                            size="bg"
                                            color="primary"
                                            label="CREATE FORM"
                                            className="text-xs full-width mt-4"
                                        />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" md="12" lg="6" className='pt-2 p-0 pl-2'>
                        <Card className='full-width'>
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
                                <Row className='mb-2 h6'>
                                    <Col sm="12" md="12" lg="2" className='d-flex align-items-center'>
                                        Field user List
                                    </Col>
                                    <Col sm="12" md="12" lg="2" />
                                    <Col sm="12" md="12" lg="5">
                                        <InputBox
                                            value=""
                                            size="sm"
                                            className="text-xs"
                                            name="search"
                                            type="text"
                                            placeholder="Search Name..."
                                            onChange="{handleSearch}"
                                        />
                                    </Col>
                                    <Col sm="12" md="12" lg="3" className='d-flex justify-content-end'>
                                        <Button
                                            size="sm"
                                            color="primary"
                                            label="ADD USER"
                                            className="text-xs full-width mt-4"
                                        />
                                    </Col>
                                </Row>
                                <div style={{ height: 225, overflow: "auto" }}>
                                    <Row sm="12" md="12" lg="12" className='label-colorlist-navbar m-0 h3 label-color'>
                                        <Col sm="12" md="12" lg="3" className='list-label-color h6 m-0 pt-3'>
                                            USER NAME
                                        </Col>
                                        <Col sm="12" md="12" lg="2" className='list-label-color h6 m-0 pt-3'>
                                            AREA
                                        </Col>
                                        <Col sm="12" md="12" lg="3" className='list-label-color h6 m-0 pt-3'>
                                            ASSIGNED TO
                                        </Col>
                                        <Col sm="12" md="12" lg="3" className='list-label-color h6 mb-0 p-0 pt-3'>
                                            ASSIGNED DATE
                                        </Col>
                                        <Col sm="12" md="12" lg="1" className='list-label-color h6 mb-0 p-0 pt-3'>
                                            DELETE
                                        </Col>
                                    </Row>
                                    <Row className='m-0 mb-1 h3 d-flex align-items-center'>
                                        <Col sm="12" md="12" lg="3" className='h6 mb-0 p-0'>
                                            Sudhakar Yadav
                                        </Col>
                                        <Col sm="12" md="12" lg="2" className='h6 mb-0 p-0'>
                                            Thane
                                        </Col>
                                        <Col sm="12" md="12" lg="3" className='h6 mb-0 p-0'>
                                            Project Name
                                        </Col>
                                        <Col sm="12" md="12" lg="3" className='h6 mb-0 p-0'>
                                            10-08-2022
                                        </Col>
                                        <Col sm="12" md="12" lg="1" className='h5 mb-0 pt-3'>
                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                        </Col>
                                    </Row>

                                </div>

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
                                        <Row className='mb-2 h6'>
                                            <Col sm="12" md="12" lg="2" className='d-flex align-items-center'>
                                                Task Overview
                                            </Col>
                                            <Col sm="12" md="12" lg="5" />
                                            <Col sm="12" md="12" lg="3">
                                                <InputBox
                                                    value=""
                                                    size="medium"
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
                                                    className="my-4 full-width mt-4"
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
                                            <Row className='m-0 mb-1 pl-3 h3 d-flex align-items-center'>
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
                                                <Col sm="12" md="12" lg="1" className='h6 mb-0 p-0'>
                                                    <Button
                                                        size="sm"
                                                        color="primary"
                                                        label="Approved"
                                                        className="full-width mt-4"
                                                    />
                                                </Col>
                                                <Col sm="12" md="12" lg="1" className='h6 mb-0 p-0'>
                                                    20
                                                </Col>
                                                <Col sm="12" md="12" lg="1" className='h6 mb-0 p-0'>
                                                    Form 1
                                                </Col>
                                                <Col sm="12" md="12" lg="1" className='h5 mb-0 pt-3'>
                                                    <i class="fa fa-eye" style={{ marginRight: 15 }} aria-hidden="true"></i>
                                                    <i class="fa-thin fa-pencil"></i>
                                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                                </Col>
                                            </Row>
                                            <Row className='label-coloralt-list-color m-0 mb-1 pl-3 h3 d-flex align-items-center'>
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
                                                <Col sm="12" md="12" lg="1" className='h6 mb-0 p-0'>
                                                    <Button
                                                        size="sm"
                                                        color="primary"
                                                        label="Approved"
                                                        className="full-width mt-4"
                                                    />
                                                </Col>
                                                <Col sm="12" md="12" lg="1" className='h6 mb-0 p-0'>
                                                    20
                                                </Col>
                                                <Col sm="12" md="12" lg="1" className='h6 mb-0 p-0'>
                                                    Form 1
                                                </Col>
                                                <Col sm="12" md="12" lg="1" className='h5 mb-0 pt-3'>
                                                    <i class="fa fa-eye" style={{ marginRight: 15 }} aria-hidden="true"></i>
                                                    <i class="fa-thin fa-pencil"></i>
                                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                                </Col>
                                            </Row>
                                            <Row className='m-0 mb-1 pl-3 h3 d-flex align-items-center'>
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
                                                <Col sm="12" md="12" lg="1" className='h6 mb-0 p-0'>
                                                    <Button
                                                        size="sm"
                                                        color="primary"
                                                        label="Approved"
                                                        className="full-width mt-4"
                                                    />
                                                </Col>
                                                <Col sm="12" md="12" lg="1" className='h6 mb-0 p-0'>
                                                    20
                                                </Col>
                                                <Col sm="12" md="12" lg="1" className='h6 mb-0 p-0'>
                                                    Form 1
                                                </Col>
                                                <Col sm="12" md="12" lg="1" className='h5 mb-0 pt-3'>
                                                    <i class="fa fa-eye" style={{ marginRight: 15 }} aria-hidden="true"></i>
                                                    <i class="fa-thin fa-pencil"></i>
                                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                                </Col>
                                            </Row>
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