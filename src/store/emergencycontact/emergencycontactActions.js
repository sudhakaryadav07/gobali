import RestApi from "../../utils/common/RestApi";
import {
  EMERGENCYCONTACT_GET_ONE_REQUEST,
  EMERGENCYCONTACT_GET_ONE_SUCCESS,
  EMERGENCYCONTACT_GET_ONE_FAIL,

  EMERGENCYCONTACT_CREATE_REQUEST,
  EMERGENCYCONTACT_CREATE_SUCCESS,
  EMERGENCYCONTACT_CREATE_FAIL,

  EMERGENCYCONTACT_UPDATE_REQUEST,
  EMERGENCYCONTACT_UPDATE_SUCCESS,
  EMERGENCYCONTACT_UPDATE_FAIL
} from './emergencycontactConstants';

import { API_URL } from "../../config/env";
const restApi = new RestApi();

export const fetchAllEmergencyContact = (_model) => async (dispatch) => {
  try {
    dispatch({ type: EMERGENCYCONTACT_GET_ONE_REQUEST });
    const path = API_URL + `/admin/emergencycontacts-v2/`;
    const { data } = await restApi.get(path, _model);
    dispatch({ type: EMERGENCYCONTACT_GET_ONE_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: EMERGENCYCONTACT_GET_ONE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const createEmergencyContact = (_model) => async (dispatch) => {
  try {
    dispatch({ type: EMERGENCYCONTACT_CREATE_REQUEST });
    const path = API_URL + '/admin/emergencycontacts-v2/';
    const { data } = await restApi.post(path, _model);
    dispatch({ type: EMERGENCYCONTACT_CREATE_SUCCESS, payload: data.results });
    return data;
  } catch (error) {
    dispatch({
      type: EMERGENCYCONTACT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const updateEmergencyContact = (_model) => async (dispatch) => {
  try {
    dispatch({ type: EMERGENCYCONTACT_UPDATE_REQUEST, payload: _model });
    const path = API_URL + `/admin/emergencycontacts-v2/`;
    const { data } = await restApi.post(path, _model);
    dispatch({ type: EMERGENCYCONTACT_UPDATE_SUCCESS, payload: data.results });
    return data;
  } catch (error) {
    dispatch({
      type: EMERGENCYCONTACT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};