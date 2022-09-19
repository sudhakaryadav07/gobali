import RestApi from "../../utils/common/RestApi";
import {
  TOURIST_CIRCUIT_LIST_REQUEST,
  TOURIST_CIRCUIT_LIST_SUCCESS,
  TOURIST_CIRCUIT_LIST_FAIL,

  TOURIST_CIRCUIT_CREATE_REQUEST,
  TOURIST_CIRCUIT_CREATE_SUCCESS,
  TOURIST_CIRCUIT_CREATE_FAIL,

  TOURIST_CIRCUIT_UPDATE_REQUEST,
  TOURIST_CIRCUIT_UPDATE_SUCCESS,
  TOURIST_CIRCUIT_UPDATE_FAIL
} from './touristcircuitConstants';

import { API_URL } from "../../config/env";
const restApi = new RestApi();

export const fetchAllTouristCircuit = (_model) => async (dispatch) => {
  try {
    dispatch({ type: TOURIST_CIRCUIT_LIST_REQUEST });
    const path = API_URL + '/touristcircuit/';
    const { data } = await restApi.get(path, _model);
    dispatch({ type: TOURIST_CIRCUIT_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: TOURIST_CIRCUIT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const searchTouristCircuit =  (query) => async (dispatch) => {
  try {
    dispatch({ type: TOURIST_CIRCUIT_LIST_REQUEST });
    const path = API_URL + `/touristcircuit/?search=${query}`;
    const { data } = await restApi.get(path);
    dispatch({ type: TOURIST_CIRCUIT_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: TOURIST_CIRCUIT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};


export const fetchNext = (path) => async (dispatch) => {
  try {
    dispatch({ type: TOURIST_CIRCUIT_LIST_REQUEST });
    const { data } = await restApi.get(path);
    dispatch({ type: TOURIST_CIRCUIT_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: TOURIST_CIRCUIT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const createTouristCircuit = (_model) => async (dispatch) => {
  try {
    dispatch({ type: TOURIST_CIRCUIT_CREATE_REQUEST });
    const path = API_URL + '/touristcircuit/';
    const { data } = await restApi.post(path, _model);
    dispatch({ type: TOURIST_CIRCUIT_CREATE_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: TOURIST_CIRCUIT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const updateTouristCircuit = (_model) => async (dispatch) => {
  try {
    dispatch({ type: TOURIST_CIRCUIT_UPDATE_REQUEST, payload: _model });
    const path = API_URL + `/touristcircuit/${_model.id}/`;
    const { data } = await restApi.put(path, _model);
    dispatch({ type: TOURIST_CIRCUIT_UPDATE_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: TOURIST_CIRCUIT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};