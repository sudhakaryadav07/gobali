
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardBody, InputGroupAddon, InputGroup, Label, Col, CardHeader, Container, Row } from "reactstrap";
import UserHeader from "../../components/Headers/UserHeader";
import CityView from './components/CityView';
// import CityForm from './components//CityForm';


import { fetchAllCity, createCity, updateCity } from '../../store/city/cityActions';
// import { InputField, ScrollWrapper, Button, Loader } from './components/';
import Button from '../../components/common/button.js';
import InputBox from '../../components/common/inputbox.js';

import { createSaveSearch } from "../../store/savedsearch/savedsearchActions";
import { uploadFile } from "../../utils/common/UploadUtil";
import ScrollWrapper from "components/common/ScrollWrapper";

let DISTRICT_ADMIN = "ABC"

const CityScreen = () => {
  const dispatch = useDispatch();

  const { userRole, userSavedSearch } = useSelector((state) => state.userLogin);
  const { loading: loadingList, error: errorList, cities } = useSelector((state) => state.cityList);
  const { loading: loadingCreate, error: errorCreate } = useSelector((state) => state.cityCreate);
  const { loading: loadingUpdate, error: errorUpdate } = useSelector((state) => state.cityUpdate);

  const [cityList, setCityList] = useState([]);
  const [cityObj, setCityObj] = useState();
  const [cityForm, setShowForm] = useState(false);

  const [mode, setMode] = useState("create");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoader] = useState(false);

  useEffect(() => {
    if (loadingList || loadingCreate || loadingUpdate) {
      setLoader(true)
    } else {
      setLoader(false)
    }
  }, [loadingList, loadingCreate, loadingUpdate]);

  useEffect(() => {
    if (errorList) {
      setError(errorList)
    } else if (errorCreate) {
      setError(errorCreate)
    } else if (errorUpdate) {
      setError(errorUpdate)
    } else {
      setError(null)
    }
  }, [errorList, errorCreate, errorUpdate]);

  useEffect(() => {
    try {
      if (loadingCreate || loadingUpdate) return;
      dispatch(fetchAllCity()).then(data => setCityList(data));
    } catch (e) {
      console.log('e: ', e);
    }
  }, [dispatch, loadingCreate, loadingUpdate]);

  const handleSearch = async () => {
    try {
      if (!search) return;
      setLoader(true);

      let filterdCities = await cities.filter(item => item.name.toLowerCase().indexOf(search.toLowerCase()) >= 0);
      setCityList(filterdCities);
      if (filterdCities.length > 0) {
        await createSaveSearch({ ...userSavedSearch, keyword: search, module: "City" });
      }
      setLoader(false);
    } catch (e) {

    }
  }

  const handleForm = (mode, data) => {
    try {
      if (mode === "create" && !`${userRole}`.includes(DISTRICT_ADMIN)) {
        alert("Access Is Denied: you don't have enough privileges to access this module");
        return;
      }

      if (mode === "create") {
        setCityObj(null);
        setMode(mode);
        setShowForm(true);
      } else if (data && data.id) {
        setCityObj(data);
        setMode(mode);
        setShowForm(true);
      }
    } catch (e) {

    }
  }

  const handleUpload = async (selectedFile, name, module) => {
    try {
      if (!`${userRole}`.includes(DISTRICT_ADMIN)) {
        alert("Access Is Denied: you don't have enough privileges to access this module");
        return;
      }
      const { id, filePath } = await uploadFile(selectedFile, name, module)
      return { id, filePath };
    } catch (e) {
      console.log('e: ', e);
    }
  }

  const handleSubmit = async (fmode, fCity) => {
    try {
      if (!`${userRole}`.includes(DISTRICT_ADMIN)) {
        alert("Access Is Denied: you don't have enough privileges to access this module");
        return;
      }

      return fmode === "create"
        ? dispatch(createCity(fCity))
        : dispatch(updateCity(fCity));
    } catch (e) {
      console.log('e: ', e);
    }
  }


  const handleSetFilter = () => {
    try {
      setSearch("");
      setCityList(cities);
    } catch (e) {

    }
  }

  return (
    <>
      <UserHeader />
      <Container className="mt--9" fluid>
        <Row >
          {/* {loading ? <Loader loading={loading} /> : null} */}
          <Col className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="justify-content-between">
                  <Col sm="12" md="12" lg="3">
                    <InputBox
                      label="Search City"
                      value={search}
                      size="medium"
                      name="search"
                      type="text"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </Col>
                  <Col sm="12" md="12" lg="3">
                    {/* <FormGroup className="mb-3">
                      <Label className="text-sm">Permission</Label>
                      <SelectField
                        value="activeflag"
                        size="medium"
                        placeholder="Status"
                        // disabled={fmode === "view" ? true : false}
                        options={FLAGS}
                        onChange={(value) => setStatus(value)}
                      />
                    </FormGroup> */}
                  </Col>
                  <Col sm="12" md="12" lg="3">
                  </Col>
                  <Col sm="12" md="12" lg="1">
                    <Button variant="primary" className="mt-10" label="Reset" onClick={() => handleSetFilter()} />
                  </Col>
                  <Col sm="12" md="12" lg="2">
                    <Button
                      disabled={false}
                      variant="primary"
                      label="+ New User"
                      color="primary"
                      onSubmit={() => handleForm('create', '')} />
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <ScrollWrapper onScroll={() => { }}>
                  <CityView
                    loading={loading}
                    data={cityList}
                    authAccess={`${userRole}`.includes(DISTRICT_ADMIN)}
                    handleForm={handleForm}
                  />
                </ScrollWrapper>
              </CardBody>
            </Card>
          </Col>
          {/* <Col sm="12" md="12" lg="12" className="text-center p-0 m-0">Record Count : {cityList.length}</Col> */}
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
      </Container>
    </>
  );
};

export default CityScreen;
