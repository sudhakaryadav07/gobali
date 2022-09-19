import RestApi from "../../utils/common/RestApi";
import {
  POICATEGORY_LIST_REQUEST,
  POICATEGORY_LIST_SUCCESS,
  POICATEGORY_LIST_FAIL,

  POICATEGORY_CREATE_REQUEST,
  POICATEGORY_CREATE_SUCCESS,
  POICATEGORY_CREATE_FAIL,

  POICATEGORY_UPDATE_REQUEST,
  POICATEGORY_UPDATE_SUCCESS,
  POICATEGORY_UPDATE_FAIL,

  POICATEGORY_DELETE_REQUEST,
  POICATEGORY_DELETE_SUCCESS,
  POICATEGORY_DELETE_FAIL

} from './poicategoryConstants';

import { API_URL } from "../../config/env";
const restApi = new RestApi();

export const fetchAllPOICategory = (_model) => async (dispatch) => {
  try {
    dispatch({ type: POICATEGORY_LIST_REQUEST });
    const path = API_URL + '/poicategories/';
    const { data } = await restApi.get(path, _model);

    const sortedCategories = data.results.sort()

    dispatch({ type: POICATEGORY_LIST_SUCCESS, payload: sortedCategories });
    return sortedCategories;
  } catch (error) {
    dispatch({
      type: POICATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const fetchNearbyCategory = (_model) => async (dispatch) => {
  try {
    const path = API_URL + `/nearbycategory/`;
    let { data } = await restApi.get(path);
    return data;
  } catch (error) {
    return error.message
  }
};

export const searchPOICategory = (classification, query) => async (dispatch) => {
  try {
    let q = "";
    if (classification && query) {
      q = `classification=${classification}&search=${query}`;
    } else if (classification) {
      q = `classification=${classification}&`;
    } else {
      q = `search=${query}`;
    }
    dispatch({ type: POICATEGORY_LIST_SUCCESS });
    const path = API_URL + `/poicategories/?${q}`;
    const { data } = await restApi.get(path);
    dispatch({ type: POICATEGORY_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: POICATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const createPOICategory = (_model) => async (dispatch) => {
  try {
    dispatch({ type: POICATEGORY_CREATE_REQUEST });
    const path = API_URL + '/poicategory/create/';
    const { data } = await restApi.post(path, _model);
    dispatch({ type: POICATEGORY_CREATE_SUCCESS, payload: data.results });
    return data;
  } catch (error) {
    dispatch({
      type: POICATEGORY_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const updatePOICategory = (_model) => async (dispatch) => {
  try {
    dispatch({ type: POICATEGORY_UPDATE_REQUEST, payload: _model });
    const path = API_URL + `/poicategory/update/${_model.id}/`;
    const { data } = await restApi.put(path, _model);
    dispatch({ type: POICATEGORY_UPDATE_SUCCESS, payload: data.results });
    return data;
  } catch (error) {
    dispatch({
      type: POICATEGORY_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const deletePOICategory = (_model) => async (dispatch) => {
  try {
    dispatch({ type: POICATEGORY_DELETE_REQUEST, payload: _model });
    const path = API_URL + `/poicategory/delete/${_model.id}/`;
    await restApi.delete(path);
    dispatch({ type: POICATEGORY_DELETE_SUCCESS, payload: _model });
  } catch (error) {
    dispatch({
      type: POICATEGORY_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
