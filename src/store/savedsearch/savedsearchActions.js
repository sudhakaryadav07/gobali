import RestApi from "../../utils/common/RestApi";
import {
  SAVEDSEARCH_LIST_REQUEST,
  SAVEDSEARCH_LIST_SUCCESS,
  SAVEDSEARCH_LIST_FAIL
} from './savedsearchConstants';
import { API_URL } from "../../config/env";
const restApi = new RestApi();

export const fetchAllSavedSearches = (_model) => async (dispatch) => {
  try {
    dispatch({ type: SAVEDSEARCH_LIST_REQUEST });
    const path = API_URL + '/savedsearch/';
    const { data } = await restApi.get(path, _model);
    dispatch({ type: SAVEDSEARCH_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: SAVEDSEARCH_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const searchSavedSearch = (module, search, datefilter) => async (dispatch) => {
  try {
    let q = "";
    if (module) {
      q = q + `module=${module}&`;
    }
    if (search) {
      q = q + `search=${search}&`;
    }
    if (datefilter) {
      q = q + `datefilter=${datefilter}`;
    }

    dispatch({ type: SAVEDSEARCH_LIST_REQUEST });
    const path = API_URL + `/savedsearch/?${q}`;
    const { data } = await restApi.get(path);
    dispatch({ type: SAVEDSEARCH_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    console.log('error: ', error);
  }
};

export const fetchNext = (path) => async (dispatch) => {
  try {
    dispatch({ type: SAVEDSEARCH_LIST_REQUEST });
    const { data } = await restApi.get(path);
    dispatch({ type: SAVEDSEARCH_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: SAVEDSEARCH_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const createSaveSearch = async (_model) => {
  try {
    if (!_model) return;
    if (!_model.keyword || !_model.module) return;

    const { user, created_by, keyword_id } = _model;

    if (!user) {
      _model = { ..._model, user: "default" }
    }
    if (!created_by) {
      _model = { ..._model, created_by: "default" }
    }
    if (!keyword_id) {
      _model = { ..._model, keyword_id: "default" }
    }

    const path = API_URL + '/savedsearch/';
    await restApi.post(path, _model);
  } catch (error) {
    console.log('error: ', error);
  }
};