
import React, { useState } from "react";
import { Row } from "reactstrap";
import UserHeader from "../../components/Headers/UserHeader";
import ProjectManagementView from './ProjectManagementView';
import Button from '../../components/Common/Button.js';
import ProjectManagementForm from "./ProjectManagementForm";

const ProjectManagementScreen = () => {

  const [isOpen, setModaOpen] = useState(false);

  return (
    <>
      <UserHeader />
      <Row sm="12" md="12" lg="12" className="mt-4 mr-4 ml-3 mb-4 d-flex justify-content-end pr-14">
        <Button color="primary" label="+" className="pr-14 text-lg" onClick={() => setModaOpen(!isOpen)} />
      </Row>
      <ProjectManagementForm isOpen={isOpen} handleModal={() => setModaOpen(!isOpen)} />
      <ProjectManagementView />
    </>
  );
};

export default ProjectManagementScreen;
