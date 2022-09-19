import RestApi from "../../utils/common/RestApi";
import {
  VIDEO_LIST_REQUEST,
  VIDEO_LIST_SUCCESS,
  VIDEO_LIST_FAIL,

  VIDEO_UPDATE_REQUEST,
  VIDEO_UPDATE_SUCCESS,
  VIDEO_UPDATE_FAIL

} from './videoConstants';
import { API_URL, VIDEO_UPDATE_URL, VIDEO_URL } from "../../config/env";

const restApi = new RestApi();

export const fetchAllVideos = (_model) => async (dispatch) => {
  try {
    dispatch({ type: VIDEO_LIST_REQUEST });
    const path = API_URL + '/videolibrary/all/';
    const { data } = await restApi.get(path, _model);
    dispatch({ type: VIDEO_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: VIDEO_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const searchVideo = (query) => async (dispatch) => {
  try {
    const path = API_URL + `/videosearch/?search=${query}`;
    dispatch({ type: VIDEO_LIST_REQUEST });
    const { data } = await restApi.get(path);
    dispatch({ type: VIDEO_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    console.log('error: ', error);
  }
};


export const fetchNext = (path) => async (dispatch) => {
  try {
    dispatch({ type: VIDEO_LIST_REQUEST });
    const { data } = await restApi.get(path);
    dispatch({ type: VIDEO_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: VIDEO_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const uploadVideo = async (formdata) => {
  try {
    const path = VIDEO_URL;
    const data = await restApi.upload(path, formdata);
    return data
  } catch (error) {
    console.log('error: ', error);
  }
}

export const updateVideo = async (id, formdata) => {
  try {
    const path = VIDEO_UPDATE_URL + id + "/";
    const data = await restApi.uploadUpdate(path, formdata);
    return data
  } catch (error) {
    console.log('error: ', error);
  }
}

export const deleteVideo = (_model) => async (dispatch) => {
  try {
    dispatch({ type: VIDEO_UPDATE_REQUEST, payload: _model });
    const path = API_URL + `/videolibrary/update/${_model.id}/`;
    const { data } = await restApi.delete(path, _model);
    dispatch({ type: VIDEO_UPDATE_SUCCESS, payload: data.results });
  } catch (error) {
    dispatch({
      type: VIDEO_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

