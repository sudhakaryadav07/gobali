import RestApi from "../../utils/common/RestApi";
import {
  POI_ATTRIBUTE_LIST_REQUEST,
  POI_ATTRIBUTE_LIST_SUCCESS,
  POI_ATTRIBUTE_LIST_FAIL,

  POI_ATTRIBUTE_CREATE_REQUEST,
  POI_ATTRIBUTE_CREATE_SUCCESS,
  POI_ATTRIBUTE_CREATE_FAIL,

  POI_ATTRIBUTE_GET_ONE_REQUEST,
  POI_ATTRIBUTE_GET_ONE_SUCCESS,
  POI_ATTRIBUTE_GET_ONE_FAIL,

  POI_ATTRIBUTE_UPDATE_INIT,

  POI_ATTRIBUTE_UPDATE_REQUEST,
  POI_ATTRIBUTE_UPDATE_SUCCESS,
  POI_ATTRIBUTE_UPDATE_FAIL,

  POI_ATTRIBUTE_DELETE_REQUEST,
  POI_ATTRIBUTE_DELETE_SUCCESS,
  POI_ATTRIBUTE_DELETE_FAIL
} from './poiAttributesConstants';
import { API_URL } from "../../config/env";
const restApi = new RestApi();

export const fetchAllPOIAttributes = (_model) => async (dispatch) => {
  try {
    dispatch({ type: POI_ATTRIBUTE_LIST_REQUEST });
    const path = API_URL + `/admin/category-field/${_model.id}/`;
    const { data } = await restApi.get(path, _model);
    dispatch({ type: POI_ATTRIBUTE_LIST_SUCCESS, payload: data.results });
    return data.results;
  } catch (error) {
    dispatch({
      type: POI_ATTRIBUTE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const fetchOnePOIAttributes = (_model) => async (dispatch) => {
  try {
    dispatch({ type: POI_ATTRIBUTE_GET_ONE_REQUEST });
    const path = API_URL + `/admin/category-field/${_model.id}/`;
    const { data } = await restApi.get(path, _model);
    let reversedFields = await data.fields.reverse();
    dispatch({ type: POI_ATTRIBUTE_GET_ONE_SUCCESS, payload: reversedFields });
    return reversedFields;
  } catch (error) {
    dispatch({
      type: POI_ATTRIBUTE_GET_ONE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const createPOIAttributes = (_model) => async (dispatch) => {
  try {
    dispatch({ type: POI_ATTRIBUTE_CREATE_REQUEST });
    const path = API_URL + '/poiinfo/create/';
    const { data } = await restApi.post(path, _model);
    dispatch({ type: POI_ATTRIBUTE_CREATE_SUCCESS, payload: data.results });
  } catch (error) {
    dispatch({
      type: POI_ATTRIBUTE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const updateOnePOIAttributes = (_model) => async (dispatch) => {
  try {
    dispatch({ type: POI_ATTRIBUTE_UPDATE_INIT, payload: _model });
  } catch (error) {

  }
};

export const updatePOIAttributes = (_model) => async (dispatch) => {
  try {
    dispatch({ type: POI_ATTRIBUTE_UPDATE_REQUEST, payload: _model });
    const path = API_URL + `/poiinfo/update/${_model.id}/`;
    const { data } = await restApi.put(path, _model);
    dispatch({ type: POI_ATTRIBUTE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POI_ATTRIBUTE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const deletePOIAttributes = (_model) => async (dispatch) => {
  try {
    dispatch({ type: POI_ATTRIBUTE_DELETE_REQUEST, payload: _model });
    const path = API_URL + `/api-v1-admin-poi/${_model.id}`;
    await restApi.delete(path);
    dispatch({ type: POI_ATTRIBUTE_DELETE_SUCCESS, payload: _model });
  } catch (error) {
    dispatch({
      type: POI_ATTRIBUTE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
