
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
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
  const dispatch = useDispatch();

  // const { userRole, userSavedSearch } = useSelector((state) => state.userLogin);
  // const { loading: loadingList, error: errorList, cities } = useSelector((state) => state.cityList);
  // const { loading: loadingCreate, error: errorCreate } = useSelector((state) => state.cityCreate);
  // const { loading: loadingUpdate, error: errorUpdate } = useSelector((state) => state.cityUpdate);

  const [rowCount, setRowCount] = useState();
  const [permission, setPermission] = useState();
  const [joined, setJoined] = useState();
  const [users, setUsers] = useState(DATA);

  const [mode, setMode] = useState("create");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoader] = useState(false);

  // useEffect(() => {
  //   if (loadingList || loadingCreate || loadingUpdate) {
  //     setLoader(true)
  //   } else {
  //     setLoader(false)
  //   }
  // }, [loadingList, loadingCreate, loadingUpdate]);

  // useEffect(() => {
  //   if (errorList) {
  //     setError(errorList)
  //   } else if (errorCreate) {
  //     setError(errorCreate)
  //   } else if (errorUpdate) {
  //     setError(errorUpdate)
  //   } else {
  //     setError(null)
  //   }
  // }, [errorList, errorCreate, errorUpdate]);

  // useEffect(() => {
  //   try {
  //     if (loadingCreate || loadingUpdate) return;
  //     dispatch(fetchAllCity()).then(data => setCityList(data));
  //   } catch (e) {
  //     console.log('e: ', e);
  //   }
  // }, [dispatch, loadingCreate, loadingUpdate]);

  const handleSearch = async (search) => {
    try {
      if (!search) setUsers(DATA);
      setSearch(search);
      let filteredUsers = await DATA.filter(item => item.name.toLowerCase().indexOf(search.toLowerCase()) >= 0);
      setUsers(filteredUsers);
    } catch (e) {
      console.log("handleUserSearch-->".e)
    }
  }

  const [todos, setTodos] = useState(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodoPerPage] = useState(3);

  const handleClick = (event) => {

    setCurrentPage(Number(event.target.id))

  }


  const indexOfLastTodo = currentPage * 2;
  const indexOfFirstTodo = indexOfLastTodo - 3;
  const currentTodos = users.slice(indexOfFirstTodo, indexOfLastTodo);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / 3); i++) {
    pageNumbers.push(i);
  }

  const renderTodos = currentTodos.map((todo, index) => {
    return <li key={index}>{todo}</li>;
  });

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li
        key={number}
        id={number}
        onClick={(e) => handleClick(e)}
      >
        {number}
      </li>
    );
  });


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



        {/* 
        <div>
          <ul>
            {renderTodos}
          </ul>
          <ul id="page-numbers" style={{ display: "flex", justifyContent: "space-around" }}>
            {renderPageNumbers}
          </ul>
        </div> */}

        {/* {cityForm ?
          <CityForm
            mode={mode}
            cityObj={cityObj}
            cityList={cityList}
            handleUpload={handleUpload}
            handleSubmit={handleSubmit}
            authAccess={`${userRole}`.includes(DISTRICT_ADMIN)}
            setShowForm={setShowForm}
          /> : null} */}
      </Container >
    </>
  );
};

export default UserManagementScreen;
