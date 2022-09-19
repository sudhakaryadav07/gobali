import RestApi from "../../utils/common/RestApi";
import {
  EVENT_LIST_REQUEST,
  EVENT_LIST_SUCCESS,
  EVENT_LIST_FAIL,

  EVENT_CREATE_REQUEST,
  EVENT_CREATE_SUCCESS,
  EVENT_CREATE_FAIL,

  EVENT_UPDATE_INIT,

  EVENT_UPDATE_REQUEST,
  EVENT_UPDATE_SUCCESS,
  EVENT_UPDATE_FAIL,

  EVENT_DELETE_REQUEST,
  EVENT_DELETE_SUCCESS,
  EVENT_DELETE_FAIL

} from './eventConstants';

import { API_URL } from "../../config/env";
const restApi = new RestApi();

export const fetchAllEvent = () => async (dispatch) => {
  try {
    dispatch({ type: EVENT_LIST_REQUEST });
    const path = API_URL + '/events/all/';
    const { data } = await restApi.get(path);
    dispatch({ type: EVENT_LIST_SUCCESS, payload: data.results });
    return data;
  } catch (error) {
    dispatch({
      type: EVENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const searchEvent = (cityname, query) => async (dispatch) => {
  try {
    let q = "";
    if (cityname && query) {
      q = `cityname=${cityname}&search=${query}`;
    } else if (cityname) {
      q = `cityname=${cityname}&`;
    } else {
      q = `search=${query}`;
    }
    dispatch({ type: EVENT_LIST_REQUEST });
    const path = API_URL + `/eventsearch/?${q}`;
    const { data } = await restApi.get(path);
    dispatch({ type: EVENT_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    console.log('error: ', error);
  }
};

export const fetchNext = (path) => async (dispatch) => {
  try {
    dispatch({ type: EVENT_LIST_REQUEST });
    const { data } = await restApi.get(path);
    dispatch({ type: EVENT_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: EVENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const createEvent = (_model) => async (dispatch) => {
  console.log('_model: ', _model);
  try {
    dispatch({ type: EVENT_CREATE_REQUEST });
    const path = API_URL + '/events/create/';
    const { data } = await restApi.post(path, _model);
    dispatch({ type: EVENT_CREATE_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: EVENT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const updateOneEvent = (_model) => async (dispatch) => {
  try {
    dispatch({ type: EVENT_UPDATE_INIT, payload: _model });
  } catch (error) {

  }
};

export const updateEvent = (_model) => async (dispatch) => {
  try {
    dispatch({ type: EVENT_UPDATE_REQUEST, payload: _model });
    const path = API_URL + `/events/update/${_model.id}/`;
    const { data } = await restApi.put(path, _model);
    dispatch({ type: EVENT_UPDATE_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: EVENT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const deleteEvent = (_model) => async (dispatch) => {
  try {
    dispatch({ type: EVENT_DELETE_REQUEST, payload: _model });
    const path = API_URL + `/api-v1-admin-event/${_model.id}`;
    await restApi.delete(path);
    dispatch({ type: EVENT_DELETE_SUCCESS, payload: _model });
  } catch (error) {
    dispatch({
      type: EVENT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
