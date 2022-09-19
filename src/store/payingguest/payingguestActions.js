import RestApi from "../../utils/common/RestApi";
import {
  PAYING_GUEST_LIST_REQUEST,
  PAYING_GUEST_LIST_SUCCESS,
  PAYING_GUEST_LIST_FAIL,

  PAYING_GUEST_CREATE_REQUEST,
  PAYING_GUEST_CREATE_SUCCESS,
  PAYING_GUEST_CREATE_FAIL,

  PAYING_GUEST_UPDATE_REQUEST,
  PAYING_GUEST_UPDATE_SUCCESS,
  PAYING_GUEST_UPDATE_FAIL,
  PAYING_GUEST_UPDATE_INIT
} from './payingguestConstants';

import { API_URL } from "../../config/env";
const restApi = new RestApi();

export const fetchAllPayingGuest = (_model) => async (dispatch) => {
  try {
    dispatch({ type: PAYING_GUEST_LIST_REQUEST });
    const path = API_URL + '/payguest/';
    const { data } = await restApi.get(path, _model);
    dispatch({ type: PAYING_GUEST_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: PAYING_GUEST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const searchPayingGuest = (city, query) => async (dispatch) => {
  try {
    let q = "";
    if (city && query) {
      q = `city=${city}&search=${query}`;
    } else if (city) {
      q = `city=${city}`;
    } else if (query) {
      q = `search=${query}`;
    }
    dispatch({ type: PAYING_GUEST_LIST_REQUEST });
    const path = API_URL + `/payguest/?${q}`;
    const { data } = await restApi.get(path);
    dispatch({ type: PAYING_GUEST_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: PAYING_GUEST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};


export const fetchNext = (path) => async (dispatch) => {
  try {
    dispatch({ type: PAYING_GUEST_LIST_REQUEST });
    const { data } = await restApi.get(path);
    dispatch({ type: PAYING_GUEST_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: PAYING_GUEST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const createPayingGuest = (_model) => async (dispatch) => {
  try {
    dispatch({ type: PAYING_GUEST_CREATE_REQUEST });
    const path = API_URL + '/payguest/';
    const { data } = await restApi.post(path, _model);
    dispatch({ type: PAYING_GUEST_CREATE_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: PAYING_GUEST_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const updateOneEvent = (_model) => async (dispatch) => {
  try {
    dispatch({ type: PAYING_GUEST_UPDATE_INIT, payload: _model });
  } catch (error) {

  }
};

export const updatePayingGuest = (_model) => async (dispatch) => {
  try {
    dispatch({ type: PAYING_GUEST_UPDATE_REQUEST, payload: _model });
    const path = API_URL + `/payguest/${_model.id}/`;
    const { data } = await restApi.put(path, _model);
    dispatch({ type: PAYING_GUEST_UPDATE_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: PAYING_GUEST_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};