
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Card from "../../components/Common/Card.js";
import { Container, Row } from "reactstrap";

const ProjectManagementView = () => {

    const history = useHistory();


    const handleProjectDetails = (e) => {
        try {
            history.push("/admin/project/detail");
        } catch (e) {

        }
    }

    return (
        <Container className="p-0 display-content secondary">
            <Row sm="12" md="12" lg="3" className="mt-4 mr-3 ml-3 mb-5">
                <Card onClick={handleProjectDetails} />
                <Card />
                <Card />
                <Card />
                <Card />
            </Row>
        </Container >
    );
};

export default ProjectManagementView;
