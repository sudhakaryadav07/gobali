import Button from '../../components/Common/Button.js';
import React, { useState } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Row, Col, Label
} from 'reactstrap';
import SelectField from '../../components/Common/SelectField.js';
import { PERMISSION } from 'config/constants.js';
import InputBox from '../../components/Common/Inputbox.js';
import Checkbox from '../../components/Common/Checkbox.js';

const ProjectManagementForm = ({ isOpen, className, handleModal }) => {

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
        <Modal isOpen={isOpen} className={className} backdrop={true}>
            <ModalHeader >Create Project</ModalHeader>
            <ModalBody>
                <Row>
                    <Col sm="12" md="12" lg="6" >
                        <InputBox
                            value={name}
                            size="medium"
                            name="name"
                            type="text"
                            placeholder="Name..."
                            onChange={setName}
                        />
                    </Col>
                    <Col sm="12" md="12" lg="6" >
                        <FormGroup className="mb-3">
                            <SelectField
                                className="mt-11"
                                size="medium"
                                options={PERMISSION}
                                value={area}
                                onChange={setArea}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md="12" lg="6" >
                        <InputBox
                            value={pincode}
                            size="medium"
                            name="pincode"
                            type="text"
                            placeholder="Pincode"
                            onChange={setPincode}
                        />
                    </Col>
                    <Col sm="12" md="12" lg="6" >
                        <FormGroup className="mb-3">
                            <SelectField
                                className="mt-11"
                                size="medium"
                                options={PERMISSION}
                                value={assets}
                                onChange={setAssets}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md="12" lg="6" >
                        <InputBox
                            value={placeholder}
                            size="medium"
                            name="placeholder"
                            type="text"
                            placeholder="Placeholder"
                            onChange={setPlaceholder}
                        />
                    </Col>
                    <Col sm="12" md="12" lg="6" >
                        <InputBox
                            value={description}
                            size="medium"
                            name="description"
                            type="text"
                            placeholder="Description"
                            onChange={setDescription}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md="12" lg="12" className='d-flex justify-content-start'>
                        <Label className='text-sm'>Assign Project Manager(Multiple choice if any)</Label>
                    </Col>
                    <Col sm="12" md="12" lg="6" className='ml--4'>
                        <Checkbox label="Pratik Patil" />
                    </Col>
                    <Col sm="12" md="12" lg="6" className='ml--9'>
                        <Checkbox label="Rocky Dsouza" />
                    </Col>
                    <Col sm="12" md="12" lg="6" className='ml--4'>
                        <Checkbox label="Pankaj Dhiria" />
                    </Col>
                    <Col sm="12" md="12" lg="6" className='ml--9'>
                        <Checkbox label="Bhushan Shinde" />
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter>
                <Row sm="12" md="12" lg="12" className='d-flex justify-content-center full-width'>
                    <Button label="Submit" className="full-width" color="primary" onClick={handleCancel} />
                </Row>
            </ModalFooter>
        </Modal>
    );
}

export default ProjectManagementForm;