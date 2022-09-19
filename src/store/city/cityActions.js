import RestApi from "../../utils/common/RestApi";
import {
  CITY_LIST_REQUEST,
  CITY_LIST_SUCCESS,
  CITY_LIST_FAIL,

  CITY_CREATE_REQUEST,
  CITY_CREATE_SUCCESS,
  CITY_CREATE_FAIL,

  CITY_UPDATE_REQUEST,
  CITY_UPDATE_SUCCESS,
  CITY_UPDATE_FAIL

} from './cityConstants';

import { API_URL } from "../../config/env";
const restApi = new RestApi();

export const fetchAllCity = () => async (dispatch) => {
  try {
    dispatch({ type: CITY_LIST_REQUEST });
    const path = API_URL + '/cities/';
    const { data } = await restApi.get(path);
    dispatch({ type: CITY_LIST_SUCCESS, payload: data.results });
    return data.results;
  } catch (error) {
    dispatch({
      type: CITY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const fetchNext = (path) => async (dispatch) => {
  try {
    dispatch({ type: CITY_LIST_REQUEST });
    const { data } = await restApi.get(path);
    dispatch({ type: CITY_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: CITY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const searchCity =  (query) => async (dispatch) => {
  try {
    dispatch({ type: CITY_LIST_REQUEST });
    const path = API_URL + `/cities/${query}`;
    const { data } = await restApi.get(path);
    dispatch({ type: CITY_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: CITY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const createCity = (_model) => async (dispatch) => {
  try {
    dispatch({ type: CITY_CREATE_REQUEST });
    const path = API_URL + '/cities/';
    const { data } = await restApi.post(path, _model);
    dispatch({ type: CITY_CREATE_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: CITY_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const updateCity = (_model) => async (dispatch) => {
  try {
    dispatch({ type: CITY_UPDATE_REQUEST, payload: _model });
    const path = API_URL + `/cities/${_model.id}/`;
    const { data } = await restApi.put(path, _model);
    dispatch({ type: CITY_UPDATE_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: CITY_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};