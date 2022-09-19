import RestApi from "../../utils/common/RestApi";
import { API_URL } from "../../config/env";

import {
  TRIP_LIST_REQUEST,
  TRIP_LIST_SUCCESS,
  TRIP_LIST_FAIL,
  // TRIP_LIST_RESET,

  TRIP_DETAILS_REQUEST,
  TRIP_DETAILS_SUCCESS,
  TRIP_DETAILS_FAIL,
  // TRIP_DETAILS_RESET,

  TRIP_CREATE_REQUEST,
  TRIP_CREATE_SUCCESS,
  TRIP_CREATE_FAIL,

  TRIP_UPDATE_REQUEST,
  TRIP_UPDATE_SUCCESS,
  TRIP_UPDATE_FAIL,

  TRIP_DELETE_REQUEST,
  TRIP_DELETE_SUCCESS,
  TRIP_DELETE_FAIL,

} from './tripConstants';


const restApi = new RestApi();


export const fetchAllTrip = () => async (dispatch) => {
  try {
    dispatch({ type: TRIP_LIST_REQUEST });
    const path = API_URL + '/trips-v2/';
    const { data } = await restApi.get(path);
    dispatch({ type: TRIP_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: TRIP_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const searchTrip = (city, query) => async (dispatch) => {
  try {
    let q = "";
    if (city) {
      q = q + `city=${city}&`;
    }
    if (query) {
      q = q + `search=${query}`;
    }

    dispatch({ type: TRIP_LIST_REQUEST });
    const path = API_URL + `/trips-v2/?${q}`;
    const { data } = await restApi.get(path);
    dispatch({ type: TRIP_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    console.log('error: ', error);
  }
};

export const fetchNext = (path) => async (dispatch) => {
  try {
    dispatch({ type: TRIP_DETAILS_REQUEST });
    const { data } = await restApi.get(path);
    dispatch({ type: TRIP_DETAILS_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: TRIP_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const fetchOne = (_id) => async (dispatch) => {
  try {
    dispatch({ type: TRIP_DETAILS_REQUEST });
    const path = API_URL + `/trips-v2/${_id}`;
    const { data } = await restApi.get(path);
    dispatch({ type: TRIP_DETAILS_SUCCESS, payload: data });
    return data.results;
  } catch (error) {
    dispatch({
      type: TRIP_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const createTrip = (_model) => async (dispatch) => {
  try {
    dispatch({ type: TRIP_CREATE_REQUEST });
    const path = API_URL + '/trips-v2/';
    if (_model.id) delete _model['id'];

    const { data } = await restApi.post(path, _model);
    const obj = data ? data.results : null;
    dispatch({ type: TRIP_CREATE_SUCCESS, payload: obj });
    return obj;
  } catch (error) {
    dispatch({
      type: TRIP_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const updateTrip = (_model) => async (dispatch) => {
  try {
    dispatch({ type: TRIP_UPDATE_REQUEST, payload: _model });
    // const path = API_URL + `/trips/${_model.id}/`;
    const path = API_URL + `/trips-v2/${_model.id}/`;
    const { data } = await restApi.put(path, _model);
    const obj = data ? data.results : null;
    dispatch({ type: TRIP_UPDATE_SUCCESS, payload: obj });
    return obj;
  } catch (error) {
    dispatch({
      type: TRIP_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const deleteTrip = (_model) => async (dispatch) => {
  try {
    dispatch({ type: TRIP_DELETE_REQUEST, payload: _model });
    const path = API_URL + `/trips-v2/${_model.id}/`;
    await restApi.delete(path);
    dispatch({ type: TRIP_DELETE_SUCCESS, payload: _model });
  } catch (error) {
    dispatch({
      type: TRIP_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

