import RestApi from "../../utils/common/RestApi";
import {
  VIDEO_CATEGORY_LIST_REQUEST,
  VIDEO_CATEGORY_LIST_SUCCESS,
  VIDEO_CATEGORY_LIST_FAIL,

  VIDEO_CATEGORY_CREATE_REQUEST,
  VIDEO_CATEGORY_CREATE_SUCCESS,
  VIDEO_CATEGORY_CREATE_FAIL,

  VIDEO_CATEGORY_UPDATE_REQUEST,
  VIDEO_CATEGORY_UPDATE_SUCCESS,
  VIDEO_CATEGORY_UPDATE_FAIL,
  VIDEO_CATEGORY_UPDATE_INIT
} from './videocategoryConstants';

import { API_URL } from "../../config/env";
const restApi = new RestApi();

export const fetchAllVideoCategory = (_model) => async (dispatch) => {
  try {
    dispatch({ type: VIDEO_CATEGORY_LIST_REQUEST });
    const path = API_URL + '/videocategory/';
    const { data } = await restApi.get(path, _model);
    dispatch({ type: VIDEO_CATEGORY_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: VIDEO_CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const searchVideoCategory = (city, query) => async (dispatch) => {
  try {
    let q = "";
    if (city && query) {
      q = `city=${city}&search=${query}`;
    } else if (city) {
      q = `city=${city}`;
    } else if (query) {
      q = `search=${query}`;
    }
    dispatch({ type: VIDEO_CATEGORY_LIST_REQUEST });
    const path = API_URL + `/videocategory/?${q}`;
    const { data } = await restApi.get(path);
    dispatch({ type: VIDEO_CATEGORY_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: VIDEO_CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};


export const fetchNext = (path) => async (dispatch) => {
  try {
    dispatch({ type: VIDEO_CATEGORY_LIST_REQUEST });
    const { data } = await restApi.get(path);
    dispatch({ type: VIDEO_CATEGORY_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: VIDEO_CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const createVideoCategory = (_model) => async (dispatch) => {
  try {
    dispatch({ type: VIDEO_CATEGORY_CREATE_REQUEST });
    const path = API_URL + '/videocategory/';
    const { data } = await restApi.post(path, _model);
    dispatch({ type: VIDEO_CATEGORY_CREATE_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: VIDEO_CATEGORY_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const updateOneEvent = (_model) => async (dispatch) => {
  try {
    dispatch({ type: VIDEO_CATEGORY_UPDATE_INIT, payload: _model });
  } catch (error) {

  }
};

export const updateVideoCategory = (_model) => async (dispatch) => {
  try {
    dispatch({ type: VIDEO_CATEGORY_UPDATE_REQUEST, payload: _model });
    const path = API_URL + `/videocategory/${_model.id}/`;
    const { data } = await restApi.put(path, _model);
    dispatch({ type: VIDEO_CATEGORY_UPDATE_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: VIDEO_CATEGORY_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};