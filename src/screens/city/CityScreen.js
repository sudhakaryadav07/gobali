
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Card, FormGroup, CardBody, InputGroupAddon, InputGroup, InputGroupText, Label, Col, CardHeader, Container, Row } from "reactstrap";
import UserHeader from "../../components/Headers/UserHeader";
import CityView from './components/CityView';
// import CityForm from './components//CityForm';

import { fetchAllCity, createCity, updateCity } from '../../store/city/cityActions';
// import { InputField, ScrollWrapper, Button, Loader } from './components/';
import Button from '../../components/common/button.js';
import InputBox from '../../components/common/inputbox.js';

import { uploadFile } from "../../utils/common/UploadUtil";
import ScrollWrapper from "components/common/ScrollWrapper";
import SelectField from "components/common/SelectField";
import { FLAG, DATA } from "config/constants";
import { Pagination } from "components/pagination";


let DISTRICT_ADMIN = "ABC"

const CityScreen = () => {
  const dispatch = useDispatch();

  // const { userRole, userSavedSearch } = useSelector((state) => state.userLogin);
  // const { loading: loadingList, error: errorList, cities } = useSelector((state) => state.cityList);
  // const { loading: loadingCreate, error: errorCreate } = useSelector((state) => state.cityCreate);
  // const { loading: loadingUpdate, error: errorUpdate } = useSelector((state) => state.cityUpdate);

  const [cityList, setCityList] = useState([]);
  const [cityObj, setCityObj] = useState();
  const [cityForm, setShowForm] = useState(false);

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

  // const handleSearch = async () => {
  //   try {
  //     if (!search) return;
  //     setLoader(true);

  //     let filterdCities = await cities.filter(item => item.name.toLowerCase().indexOf(search.toLowerCase()) >= 0);
  //     setCityList(filterdCities);
  //     if (filterdCities.length > 0) {
  //       // await createSaveSearch({ ...userSavedSearch, keyword: search, module: "City" });
  //     }
  //     setLoader(false);
  //   } catch (e) {

  //   }
  // }

  // const handleForm = (mode, data) => {
  //   try {
  //     if (mode === "create" && !`${userRole}`.includes(DISTRICT_ADMIN)) {
  //       alert("Access Is Denied: you don't have enough privileges to access this module");
  //       return;
  //     }

  //     if (mode === "create") {
  //       setCityObj(null);
  //       setMode(mode);
  //       setShowForm(true);
  //     } else if (data && data.id) {
  //       setCityObj(data);
  //       setMode(mode);
  //       setShowForm(true);
  //     }
  //   } catch (e) {

  //   }
  // }

  // const handleUpload = async (selectedFile, name, module) => {
  //   try {
  //     if (!`${userRole}`.includes(DISTRICT_ADMIN)) {
  //       alert("Access Is Denied: you don't have enough privileges to access this module");
  //       return;
  //     }
  //     const { id, filePath } = await uploadFile(selectedFile, name, module)
  //     return { id, filePath };
  //   } catch (e) {
  //     console.log('e: ', e);
  //   }
  // }

  // const handleSubmit = async (fmode, fCity) => {
  //   try {
  //     if (!`${userRole}`.includes(DISTRICT_ADMIN)) {
  //       alert("Access Is Denied: you don't have enough privileges to access this module");
  //       return;
  //     }

  //     return fmode === "create"
  //       ? dispatch(createCity(fCity))
  //       : dispatch(updateCity(fCity));
  //   } catch (e) {
  //     console.log('e: ', e);
  //   }
  // }


  // const handleSetFilter = () => {
  //   try {
  //     setSearch("");
  //     setCityList(cities);
  //   } catch (e) {

  //   }
  // }

  return (
    <>
      <UserHeader />
      <Container className="p-0 display-content secondary">
        <Row sm="12" md="12" lg="12" className="mt-5 mr-3 ml-3 mb-5">
          <Col sm="12" md="12" lg="12">
            <Row className="ml-1"><h2 className="label-color">User Management</h2></Row>
            <Row >
              <Col sm="12" md="12" lg="2" >
                <InputBox
                  value={search}
                  size="medium"
                  name="search"
                  type="text"
                  placeholder="Search Name..."
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Col>
              <Col sm="12" md="12" lg="2" >
                <FormGroup className="mb-3">
                  <SelectField
                    value="activeflag"
                    className="mt-11"
                    size="medium"
                    placeholder="Search Name..."
                    options={FLAG}
                  />
                </FormGroup>
              </Col>
              <Col sm="12" md="12" lg="2">
                <FormGroup className="mb-3">
                  <SelectField
                    value="activeflag"
                    size="medium"
                    className="mt-11"
                    placeholder="Status"
                    options={FLAG}
                  />
                </FormGroup>
              </Col>
              <Col sm="12" md="12" lg="3" />
              <Col sm="12" md="12" lg="1">
                <Button
                  color="primary"
                  className="mt-4"
                  label="Export"
                />
              </Col>
              <Col sm="12" md="12" lg="2">
                <Button
                  color="warning"
                  disabled={false}
                  label="+ New User"
                  className="my-4.full-width mt-4"
                />
              </Col>
            </Row>
            <div style={{ border: "1px solid #1261A9", borderRadius: 5, borderTop: 0 }}>
              <Row className="justify-content-between display-content m-0" style={{ height: 764 }} sm="12" md="12" lg="12">
                <ScrollWrapper onScroll={() => { }}>
                  <CityView
                    loading={loading}
                    data={DATA}
                  />
                </ScrollWrapper>
              </Row>
              <Row className="justify-content-between mt-5 mb-5 mr-2 ml-2">
                <Col sm="12" md="12" lg="2" >
                  <Pagination className="mt-2" />
                </Col>
                <Col sm="12" md="12" lg="3" >
                  <Row sm="12" md="12" lg="12" className="justify-content-end">
                    <Col sm="12" md="12" lg="12" className="d-flex justify-content-end">
                      <Label className="mt-2 mr-3">Show: </Label>
                      <FormGroup className="mb-3">
                        <SelectField
                          value="activeflag"
                          size="medium"
                          placeholder="Status"
                          options={FLAG}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

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

export default CityScreen;
