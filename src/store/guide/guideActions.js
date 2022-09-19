import RestApi from "../../utils/common/RestApi";
import {
  GUIDE_LIST_REQUEST,
  GUIDE_LIST_SUCCESS,
  GUIDE_LIST_FAIL,

  GUIDE_CREATE_REQUEST,
  GUIDE_CREATE_SUCCESS,
  GUIDE_CREATE_FAIL,

  GUIDE_UPDATE_REQUEST,
  GUIDE_UPDATE_SUCCESS,
  GUIDE_UPDATE_FAIL
} from './guideConstants';

import { API_URL } from "../../config/env";
const restApi = new RestApi();

export const fetchAllGuide = () => async (dispatch) => {
  try {
    dispatch({ type: GUIDE_LIST_REQUEST });
    const path = API_URL + '/tourguide/';
    const { data } = await restApi.get(path);
    dispatch({ type: GUIDE_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: GUIDE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const searchGuide = (city, query) => async (dispatch) => {
  try {
    let q = "";
    if (city && query) {
      q = `city=${city}&search=${query}`;
    } else if (city) {
      q = `city=${city}`;
    } else if (query) {
      q = `search=${query}`;
    }

    dispatch({ type: GUIDE_LIST_REQUEST });
    const path = API_URL + `/tourguide/?${q}`;
    const { data } = await restApi.get(path);
    dispatch({ type: GUIDE_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    console.log('error: ', error);
  }
};


export const fetchNext = (path) => async (dispatch) => {
  try {
    dispatch({ type: GUIDE_LIST_REQUEST });
    const { data } = await restApi.get(path);
    dispatch({ type: GUIDE_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: GUIDE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const createGuide = (_model) => async (dispatch) => {
  try {
    dispatch({ type: GUIDE_CREATE_REQUEST });
    const path = API_URL + '/tourguide/';
    const { data } = await restApi.post(path, _model);
    dispatch({ type: GUIDE_CREATE_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: GUIDE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const updateGuide = (_model) => async (dispatch) => {
  try {
    dispatch({ type: GUIDE_UPDATE_REQUEST, payload: _model });
    const path = API_URL + `/tourguide/${_model.id}/`;
    const { data } = await restApi.put(path, _model);
    dispatch({ type: GUIDE_UPDATE_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: GUIDE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};