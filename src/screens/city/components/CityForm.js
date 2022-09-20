import React, { useState, useEffect } from 'react';
import { FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from "reactstrap";
import { FLAGS } from '../../../config/constants';
import { QuillEditor, Button, Loader, Asterisk, Message, InputField, SelectField, InputErrorMessage } from '../../../components/Common/index';
import { validateCity, validateImageName } from '../../../utils/common/validate';

const CityCreate = ({ mode, authAccess, cityList, cityObj, handleUpload, setShowForm, handleSubmit }) => {

  const [fmode, setMode] = useState(mode);
  const [loading, setLoader] = useState(false);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [media_id, setMediaId] = useState("");
  const [sequence, setSequence] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [east_longitude, setEastLongitude] = useState("");
  const [north_latitude, setNorthLatitude] = useState("");
  const [west_longitude, setWestLongitude] = useState("");
  const [south_latitude, setSouthLatitude] = useState("");

  const [small_description, setSmallDescription] = useState("");
  const [attraction_description, setAttractionDescription] = useState("");
  const [description, setDescription] = useState();

  const [best_time, setBestTiming] = useState("");
  const [radius, setRadius] = useState("");

  const [is_trending, setIsTrending] = useState(false);
  const [is_visible, setIsVisible] = useState(true);

  const [created_by, setCreatedBy] = useState("sudhakar");
  const [activeflag, setStatus] = useState("Y");
  const [deleteremark, setRemark] = useState("");
  const [errors, setErrors] = useState("");

  const [serverStatus, setServerStatus] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      setCreatedBy(localStorage.getItem('userName'));
      if (mode === "edit" || mode === "view") {
        setId(cityObj.id);

        setMediaId(cityObj.media_id);
        setImage(cityObj.image);
        setName(cityObj.name);
        setSequence(cityObj.sequence);

        setLatitude(cityObj.latitude);
        setLongitude(cityObj.longitude);
        setEastLongitude(cityObj.east_longitude);
        setWestLongitude(cityObj.west_longitude);
        setNorthLatitude(cityObj.north_latitude);
        setSouthLatitude(cityObj.south_latitude);

        setSmallDescription(cityObj.small_description);
        setAttractionDescription(cityObj.attraction_description);
        setDescription(cityObj.description);

        setBestTiming(cityObj.best_time);
        setRadius(cityObj.radius);

        setIsTrending(cityObj.is_trending);
        setIsVisible(cityObj.is_visible);

        setStatus(cityObj.activeflag);
        setCreatedBy(cityObj.created_by);
      }
    } catch (e) {

    }
  }, [mode, cityList, cityObj]);

  const handleSetIcon = async (event) => {
    try {
      let status = validateImageName({ name });
      if (status && status.errorFound === true) {
        event.target.value = ''
        setErrors(status.errors);
        return;
      }

      setLoader(true);
      const selectedFile = event.target.files[0];
      const { id, filePath } = await handleUpload(selectedFile, name, "cities");
      setImage(filePath);
      setMediaId(id);
      setLoader(false);
    } catch (e) {
      console.log('e: ', e);
    }
  }


  const handleSubmitAct = async () => {
    try {
      if (!authAccess) {
        alert("Access Is Denied: you don't have enough privileges to access this module");
        return;
      }

      let model = {
        name, image, sequence: parseInt(sequence), latitude, longitude, north_latitude, south_latitude, east_longitude, west_longitude, is_trending, is_visible,
        description, small_description, attraction_description, best_time, radius, activeflag, media_id, created_by, deleteremark
      }
      let status = validateCity(model);
      if (status !== undefined && status.errorFound === false) {
        setLoader(true);
        let response = true;
        if (fmode === 'create') {
          response = await handleSubmit(fmode, model);
        } else {
          response = await handleSubmit(fmode, { ...model, id });
        }

        setLoader(false);
        if (response) {
          setMessage('Successful');
          setServerStatus('success');
          setShowForm(false);
        } else {
          setMessage('Unsuccessful');
          setServerStatus('danger');
        }
      }
      setErrors(status.errors);
    } catch (e) {

    }
  }

  console.log(errors)

  return (
    <div>
      <Modal isOpen={true} size="lg">
        <ModalHeader className='pb-0 pr-3 px-4' toggle={() => setShowForm(false)}><h3 className="p-0 m-0">{name ? name : "City"}</h3></ModalHeader>
        <ModalBody className='pt-2 pl-4 pr-3'>
          {loading ? <Loader loading={true} /> : null}
          {message ? <Message variant={serverStatus}>{message}</Message> : null}
          <Row xl="12" className="sections">
            <Col sm="12" md="12" lg="12">
              <Row lg="12">
                <Col lg="12" style={{ height: '40vh', padding: 0, border: errors && errors.image ? errors.image.status ? '1px solid red' : '1px solid white' : "", borderRadius: 3 }} className='d-flex align-items-center justify-content-center'>
                  {/* {loading ? <Loader loading={true} /> : image ?
                    <img alt="" className="thumbnail avatar-xl" src={image ? image : require("../../../assets/img/theme/imagenotfound.jpg").default} /> :
                    <img alt="" className="thumbnail avatar-xl" src={require("../../../assets/img/theme/imagenotfound.jpg").default} />
                  } */}
                </Col>
                <Row lg="12" style={{ width: '100%' }}>
                  <Col lg="12" className='d-flex align-items-center justify-content-center mt-2'>
                    <Label for="exampleFile" color="primary" size="md" className='mb-0 btnn'>Upload Image</Label> <Asterisk field={image} />
                  </Col>
                  <Col lg="12" className='d-flex align-items-center justify-content-center'>
                    <InputErrorMessage value={errors && errors.image ? errors.image.message : ""} />
                  </Col>
                  <Input hidden type="file" accept="image/png, image/gif, image/jpeg, image/jpg" name="file" id="exampleFile" disabled={fmode === "view" ? true : false} onChange={handleSetIcon} />
                </Row>
              </Row>
            </Col>

            <Col sm="12" md="12" lg="12">
              <FormGroup className="mb-3">
                <Label className="text-sm">Name<Asterisk field={name} /></Label>
                <InputField
                  value={name}
                  type="text"
                  size="medium"
                  placeholder="Name"
                  disabled={fmode === "view" ? true : false}
                  onChange={(e) => setName(e.target.value)}
                  error={errors && errors.name ? errors.name.status : ""}
                />
                <InputErrorMessage value={errors && errors.name ? errors.name.message : ""} />
              </FormGroup>
            </Col>

            <Col sm="12" md="6" lg="6">
              <FormGroup className="mb-3">
                <Label className="text-sm">Sequence<Asterisk field={sequence} /></Label>
                <InputField
                  value={sequence}
                  type="number"
                  size="medium"
                  placeholder="Sequence"
                  disabled={fmode === "view" ? true : false}
                  onChange={(e) => e.target.value !== 0 ? setSequence(e.target.value) : ""}
                  error={errors && errors.sequence ? errors.sequence.status : ""}
                />
                <InputErrorMessage value={errors && errors.sequence ? errors.sequence.message : ""} />
              </FormGroup>
            </Col>

            <Col sm="12" md="6" lg="6">
              <FormGroup className="mb-3">
                <Label className="text-sm">Latitude <Asterisk field={latitude} /></Label>
                <InputField
                  value={latitude}
                  size="medium"
                  type="number"
                  placeholder="Latitude"
                  disabled={fmode === "view" ? true : false}
                  onChange={(e) => setLatitude(e.target.value)}
                  error={errors && errors.latitude ? errors.latitude.status : ""}
                />
                <InputErrorMessage value={errors && errors.latitude ? errors.latitude.message : ""} />
              </FormGroup>
            </Col>

            <Col sm="12" md="6" lg="6">
              <FormGroup className="mb-3">
                <Label className="text-sm">Longitude <Asterisk field={longitude} /></Label>
                <InputField
                  value={longitude}
                  size="medium"
                  type="number"
                  placeholder="Longitude"
                  disabled={fmode === "view" ? true : false}
                  onChange={(e) => setLongitude(e.target.value)}
                  error={errors && errors.longitude ? errors.longitude.status : ""}
                />
                <InputErrorMessage value={errors && errors.longitude ? errors.longitude.message : ""} />
              </FormGroup>
            </Col>

            <Col sm="12" md="6" lg="6">
              <FormGroup className="mb-3">
                <Label className="text-sm">East Longitude</Label>
                <InputField
                  value={east_longitude}
                  type="number"
                  size="medium"
                  placeholder="East Longitude"
                  disabled={fmode === "view" ? true : false}
                  onChange={(e) => setEastLongitude(e.target.value)}
                />
              </FormGroup>
            </Col>

            <Col sm="12" md="6" lg="6">
              <FormGroup className="mb-3">
                <Label className="text-sm">West Longitude</Label>
                <InputField
                  value={west_longitude}
                  type="number"
                  size="medium"
                  placeholder="West Longitude"
                  disabled={fmode === "view" ? true : false}
                  onChange={(e) => setWestLongitude(e.target.value)}
                />
              </FormGroup>
            </Col>

            <Col sm="12" md="6" lg="6">
              <FormGroup className="mb-3">
                <Label className="text-sm">North Latitude</Label>
                <InputField
                  value={north_latitude}
                  type="number"
                  size="medium"
                  placeholder="North Latitude"
                  disabled={fmode === "view" ? true : false}
                  onChange={(e) => setNorthLatitude(e.target.value)}
                />
              </FormGroup>
            </Col>

            <Col sm="12" md="6" lg="6">
              <FormGroup className="mb-3">
                <Label className="text-sm">South Latitude</Label>
                <InputField
                  value={south_latitude}
                  type="number"
                  size="medium"
                  placeholder="South Latitude"
                  disabled={fmode === "view" ? true : false}
                  onChange={(e) => setSouthLatitude(e.target.value)}
                />
              </FormGroup>
            </Col>

            <Col sm="12" md="6" lg="6">
              <FormGroup className="mb-3">
                <Label className="text-sm">Small Description</Label>
                <InputField
                  value={small_description}
                  type="test"
                  size="medium"
                  placeholder="Small Description"
                  disabled={fmode === "view" ? true : false}
                  onChange={(e) => setSmallDescription(e.target.value)}
                />
              </FormGroup>
            </Col>

            <Col sm="12" md="6" lg="6">
              <FormGroup className="mb-3">
                <Label className="text-sm">Attraction Description</Label>
                <InputField
                  value={attraction_description}
                  type="text"
                  size="medium"
                  placeholder="Attraction Description"
                  disabled={fmode === "view" ? true : false}
                  onChange={(e) => setAttractionDescription(e.target.value)}
                />
              </FormGroup>
            </Col>

            <Col sm="12" md="6" lg="6">
              <FormGroup className="mb-3">
                <Label className="text-sm">Radius (Kms) <Asterisk field={radius} /></Label>
                <InputField
                  value={radius}
                  type="number"
                  size="medium"
                  placeholder="Radius"
                  disabled={fmode === "view" ? true : false}
                  onChange={(e) => e.target.value !== 0 ? setRadius(e.target.value) : ""}
                  error={errors && errors.radius ? errors.radius.status : ""}
                />
                <InputErrorMessage value={errors && errors.radius ? errors.radius.message : ""} />
              </FormGroup>
            </Col>

            <Col sm="12" md="6" lg="6">
              <FormGroup className="mb-3">
                <Label className="text-sm">Best Timing</Label>
                <InputField
                  value={best_time}
                  type="text"
                  size="medium"
                  placeholder="Best Timing"
                  disabled={fmode === "view" ? true : false}
                  onChange={(e) => setBestTiming(e.target.value)}
                  error={errors.best_time}
                />
              </FormGroup>
            </Col>

            <Col sm="6" md="3" lg="3">
              <FormGroup check>
                <Label className="mb-4 mt-4">
                  <Input type="checkbox"
                    disabled={fmode === "view" ? true : false}
                    checked={is_trending === true ? true : false} onClick={() => setIsTrending(!is_trending)} />{' '}
                  Trending
                </Label>{"  "}
              </FormGroup>
            </Col>

            <Col sm="6" md="3" lg="3">
              <FormGroup check>
                <Label className="mb-4 mt-4">
                  <Input type="checkbox"
                    disabled={fmode === "view" ? true : false}
                    checked={is_visible === true ? true : false} onClick={() => setIsVisible(!is_visible)} />{' '}
                  Visible
                </Label>{"  "}
              </FormGroup>
            </Col>

            <Col sm="12" md="12" lg="12">
              <FormGroup className="mb-3">
                <Label className="text-sm">Description<Asterisk field={description} /></Label>
                <QuillEditor
                  value={description}
                  placeholder="Description"
                  readOnly={fmode === "view" ? true : false}
                  onChange={(html) => setDescription(html)}
                  error={errors && errors.description ? errors.description.status : ""}
                />
                <InputErrorMessage value={errors && errors.description ? errors.description.message : ""} />
              </FormGroup>
            </Col>

            <Col sm="12" md="6" lg="6">
              <FormGroup className="mb-3">
                <Label className="text-sm">Status</Label>
                <SelectField
                  value={activeflag}
                  size="medium"
                  placeholder="Status"
                  disabled={fmode === "view" ? true : false}
                  options={FLAGS}
                  onChange={(value) => setStatus(value)}
                />
              </FormGroup>
            </Col>

            {activeflag === "N" ? <Col sm="12" md="6" lg="6">
              <FormGroup className="mb-3">
                <Label className="text-sm">Inactive Remark</Label>
                <InputField
                  value={deleteremark}
                  type="textarea"
                  placeholder="Inactive Remark"
                  size="medium"
                  onChange={(e) => setRemark(e.target.value)}
                />
              </FormGroup>
            </Col> : ""}
          </Row>
        </ModalBody>
        {
          authAccess ? <ModalFooter className="justify-content-end">
            {fmode === "create" ? <Button variant="primary" color="primary" onClick={handleSubmitAct} >Save</Button> : ""}
            {fmode === "edit" ? <Button variant="primary" color="primary" onClick={handleSubmitAct}>Save</Button> : ""}
            {fmode === "view" ? <Button variant="primary" color="primary" onClick={() => setMode("edit")}>Edit</Button> : ""}
            <Button variant="secondary" onClick={() => setShowForm(false)}>Cancel</Button>
          </ModalFooter> : null
        }
      </Modal >
    </div >
  );
}

export default CityCreate;