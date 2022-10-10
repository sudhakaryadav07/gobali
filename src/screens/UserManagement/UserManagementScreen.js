
import React, { useState } from "react";
import { FormGroup, Label, Col, Container, Row } from "reactstrap";
import UserHeader from "../../components/Headers/UserHeader";
import UserManagementView from './UserManagementView';
import Button from '../../components/Common/Button.js';
import InputBox from '../../components/Common/Inputbox.js';
import ScrollWrapper from "../../components/Common/ScrollWrapper";
import SelectField from "../../components/Common/SelectField";
import { ROWCOUNT, DATA } from "config/constants";
import Pagination from "../../components/Common/Pagination";
import { PERMISSION } from "config/constants";
import { JOINED } from "config/constants";

const UserManagementScreen = () => {

  const [rowCount, setRowCount] = useState();
  const [permission, setPermission] = useState();
  const [joined, setJoined] = useState();
  const [users, setUsers] = useState(DATA);

  const [search, setSearch] = useState("");
  const [loading, setLoader] = useState(false);

  const handleSearch = async (search) => {
    try {
      if (!search) setUsers(DATA);
      setLoader(true);
      setSearch(search);
      let filteredUsers = await DATA.filter(item => item.name.toLowerCase().indexOf(search.toLowerCase()) >= 0);
      setUsers(filteredUsers);
      setLoader(false);
    } catch (e) {
      console.log("handleUserSearch-->".e)
    }
  }

  return (
    <>
      <UserHeader />
      <Container className="p-0 display-content secondary">
        <Row sm="12" md="12" lg="12" className="mt-4 mr-3 ml-3 mb-5">
          <Col sm="12" md="12" lg="12">
            <Row className="ml-1"><h2 className="label-color mb-0">User Management</h2></Row>
            <Row >
              <Col sm="12" md="12" lg="2" >
                <InputBox
                  value={search}
                  size="medium"
                  name="search"
                  type="text"
                  placeholder="Search Name..."
                  onChange={handleSearch}
                />
              </Col>
              <Col sm="12" md="12" lg="2" >
                <FormGroup className="mb-3">
                  <SelectField
                    className="mt-11"
                    size="medium"
                    options={PERMISSION}
                    value={permission}
                    onChange={setPermission}
                  />
                </FormGroup>
              </Col>
              <Col sm="12" md="12" lg="2">
                <FormGroup className="mb-3">
                  <SelectField
                    size="medium"
                    className="mt-11"
                    value={joined}
                    options={JOINED}
                    onChange={setJoined}
                  />
                </FormGroup>
              </Col>
              <Col sm="12" md="12" lg="3" />
              <Col sm="12" md="12" lg="3" className="d-flex justify-content-end">
                <Button
                  color="primary"
                  className="mt-4 mr-4"
                  label="Export"
                />
                <Button
                  color="warning"
                  disabled={false}
                  label="+ New User"
                  className="my-4 full-width mt-4"
                />
              </Col>
            </Row>
            <div style={{ border: "1px solid #1261A9", borderRadius: 5, borderTop: 0 }}>
              <Row className="justify-content-between display-content m-0" sm="12" md="12" lg="12">
                <ScrollWrapper onScroll={() => { }}>
                  <UserManagementView
                    loading={loading}
                    data={users}
                    rowCount={rowCount}
                  />
                </ScrollWrapper>
              </Row>
              <Row className="justify-content-between mt-5 mb-5 mr-2 ml-2">
                <Col sm="12" md="12" lg="4" >
                  <Pagination className="mt-2" />
                </Col>
                <Col sm="12" md="12" lg="3" >
                  <Row sm="12" md="12" lg="12" className="justify-content-end">
                    <Col sm="12" md="12" lg="12" className="d-flex justify-content-end">
                      <Label className="mt-2 mr-3">Show: </Label>
                      <FormGroup className="mb-3" style={{ width: "100%" }}>
                        <SelectField
                          size="medium"
                          value={rowCount}
                          placeholder="Status"
                          options={ROWCOUNT}
                          onChange={setRowCount}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container >
    </>
  );
};

export default UserManagementScreen;
