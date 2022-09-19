import RestApi from "../../utils/common/RestApi";
import {
  DEPT_OFF_JURISDICTION_LIST_REQUEST,
  DEPT_OFF_JURISDICTION_LIST_SUCCESS,
  DEPT_OFF_JURISDICTION_LIST_FAIL,

  DEPT_OFF_JURISDICTION_CREATE_REQUEST,
  DEPT_OFF_JURISDICTION_CREATE_SUCCESS,
  DEPT_OFF_JURISDICTION_CREATE_FAIL,

  DEPT_OFF_JURISDICTION_UPDATE_REQUEST,
  DEPT_OFF_JURISDICTION_UPDATE_SUCCESS,
  DEPT_OFF_JURISDICTION_UPDATE_FAIL
} from './deptoffjurisdictionConstants';

import { API_URL } from "../../config/env";
const restApi = new RestApi();

export const fetchAllDeptOffJurisdiction = (_model) => async (dispatch) => {
  try {
    dispatch({ type: DEPT_OFF_JURISDICTION_LIST_REQUEST });
    const path = API_URL + '/departmentoffice/';
    const { data } = await restApi.get(path, _model);
    dispatch({ type: DEPT_OFF_JURISDICTION_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: DEPT_OFF_JURISDICTION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const searchDeptOffJurisdiction = (city, query) => async (dispatch) => {
  try {
    let q = "";
    if (city && query) {
      q = `city=${city}&search=${query}`;
    } else if (city) {
      q = `city=${city}`;
    } else if (query) {
      q = `search=${query}`;
    }
    dispatch({ type: DEPT_OFF_JURISDICTION_LIST_REQUEST });
    const path = API_URL + `/departmentoffice/?${q}`;
    const { data } = await restApi.get(path);
    dispatch({ type: DEPT_OFF_JURISDICTION_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: DEPT_OFF_JURISDICTION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};


export const fetchNext = (path) => async (dispatch) => {
  try {
    dispatch({ type: DEPT_OFF_JURISDICTION_LIST_REQUEST });
    const { data } = await restApi.get(path);
    dispatch({ type: DEPT_OFF_JURISDICTION_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: DEPT_OFF_JURISDICTION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const createDeptOffJurisdiction = (_model) => async (dispatch) => {
  try {
    dispatch({ type: DEPT_OFF_JURISDICTION_CREATE_REQUEST });
    const path = API_URL + '/departmentoffice/';
    const { data } = await restApi.post(path, _model);
    dispatch({ type: DEPT_OFF_JURISDICTION_CREATE_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: DEPT_OFF_JURISDICTION_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const updateDeptOffJurisdiction = (_model) => async (dispatch) => {
  try {
    dispatch({ type: DEPT_OFF_JURISDICTION_UPDATE_REQUEST, payload: _model });
    const path = API_URL + `/departmentoffice/${_model.id}/`;
    const { data } = await restApi.put(path, _model);
    dispatch({ type: DEPT_OFF_JURISDICTION_UPDATE_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: DEPT_OFF_JURISDICTION_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};