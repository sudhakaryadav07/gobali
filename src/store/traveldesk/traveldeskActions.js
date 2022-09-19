import RestApi from "../../utils/common/RestApi";
import {
  TRAVEL_DESK_LIST_REQUEST,
  TRAVEL_DESK_LIST_SUCCESS,
  TRAVEL_DESK_LIST_FAIL,

  TRAVEL_DESK_CREATE_REQUEST,
  TRAVEL_DESK_CREATE_SUCCESS,
  TRAVEL_DESK_CREATE_FAIL,

  TRAVEL_DESK_UPDATE_REQUEST,
  TRAVEL_DESK_UPDATE_SUCCESS,
  TRAVEL_DESK_UPDATE_FAIL
} from './traveldeskConstants';

import { API_URL } from "../../config/env";
const restApi = new RestApi();

export const fetchAllTravelDesk = (_model) => async (dispatch) => {
  try {
    dispatch({ type: TRAVEL_DESK_LIST_REQUEST });
    const path = API_URL + '/travelagency/';
    const { data } = await restApi.get(path, _model);
    dispatch({ type: TRAVEL_DESK_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: TRAVEL_DESK_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};


export const searchTraveldesk =  (city, query) => async (dispatch) => {
  try {
    let q = "";
    if (city && query) {
      q = `city=${city}&search=${query}`;
    } else if (city) {
      q = `city=${city}`;
    } else if (query) {
      q = `search=${query}`;
    }

    dispatch({ type: TRAVEL_DESK_LIST_REQUEST });
    const path = API_URL + `/travelagency/?${q}`;
    const { data } = await restApi.get(path);
    dispatch({ type: TRAVEL_DESK_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: TRAVEL_DESK_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};


export const fetchNext = (path) => async (dispatch) => {
  try {
    dispatch({ type: TRAVEL_DESK_LIST_REQUEST });
    const { data } = await restApi.get(path);
    dispatch({ type: TRAVEL_DESK_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: TRAVEL_DESK_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const createTravelDesk = (_model) => async (dispatch) => {
  try {
    dispatch({ type: TRAVEL_DESK_CREATE_REQUEST });
    const path = API_URL + '/travelagency/';
    const { data } = await restApi.post(path, _model);
    dispatch({ type: TRAVEL_DESK_CREATE_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: TRAVEL_DESK_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const updateTravelDesk = (_model) => async (dispatch) => {
  try {
    dispatch({ type: TRAVEL_DESK_UPDATE_REQUEST, payload: _model });
    const path = API_URL + `/travelagency/${_model.id}/`;
    const { data } = await restApi.put(path, _model);
    dispatch({ type: TRAVEL_DESK_UPDATE_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: TRAVEL_DESK_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};