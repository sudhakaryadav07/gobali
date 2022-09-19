import RestApi from "../../utils/common/RestApi";
import {
  POI_LIST_REQUEST,
  POI_LIST_SUCCESS,
  POI_LIST_FAIL,

  POI_CREATE_REQUEST,
  POI_CREATE_SUCCESS,
  POI_CREATE_FAIL,

  POI_UPDATE_REQUEST,
  POI_UPDATE_SUCCESS,
  POI_UPDATE_FAIL,

  POI_DELETE_REQUEST,
  POI_DELETE_SUCCESS,
  POI_DELETE_FAIL
} from './poiConstants';
import { API_URL } from "../../config/env";
const restApi = new RestApi();

export const fetchAllPOI = () => async (dispatch) => {
  try {
    dispatch({ type: POI_LIST_REQUEST });
    const path = API_URL + '/poiinfo/all/';
    const { data } = await restApi.get(path);
    dispatch({ type: POI_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: POI_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const searchPOI = (city, category, query) => async (dispatch) => {
  try {
    let q = "";
    if (city) {
      q = q + `city=${city}&`;
    }
    if (category) {
      q = q + `category=${category}&`;
    }
    if (query) {
      q = q + `search=${query}`;
    }

    dispatch({ type: POI_LIST_REQUEST });
    const path = API_URL + `/poidetailsearch/?${q}`;
    const { data } = await restApi.get(path);
    dispatch({ type: POI_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    console.log('error: ', error);
  }
};

export const fetchNext = (path) => async (dispatch) => {
  try {
    dispatch({ type: POI_LIST_REQUEST });
    const { data } = await restApi.get(path);
    dispatch({ type: POI_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: POI_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const createPOI = (_model) => async (dispatch) => {
  try {
    dispatch({ type: POI_CREATE_REQUEST });
    const path = API_URL + '/poiinfo/create/';
    const { data } = await restApi.post(path, _model);
    dispatch({ type: POI_CREATE_SUCCESS, payload: data.results });
    return data;
  } catch (error) {
    dispatch({
      type: POI_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const updatePOI = (_model) => async (dispatch) => {
  try {
    dispatch({ type: POI_UPDATE_REQUEST, payload: _model });
    const path = API_URL + `/poiinfo/update/${_model.id}/`;
    const { data } = await restApi.put(path, _model);
    dispatch({ type: POI_UPDATE_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: POI_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });

  }
};

export const deletePOI = (_model) => async (dispatch) => {
  try {
    dispatch({ type: POI_DELETE_REQUEST, payload: _model });
    const path = API_URL + `/api-v1-admin-poi/${_model.id}`;
    await restApi.delete(path);
    dispatch({ type: POI_DELETE_SUCCESS, payload: _model });
  } catch (error) {
    dispatch({
      type: POI_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
