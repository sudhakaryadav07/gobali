import RestApi from "../../utils/common/RestApi";
import {
  PHOTOS_LIST_REQUEST,
  PHOTOS_LIST_SUCCESS,
  PHOTOS_LIST_FAIL,

  PHOTOS_UPDATE_REQUEST,
  PHOTOS_UPDATE_SUCCESS,
  PHOTOS_UPDATE_FAIL

} from './photoConstants';

import { API_URL, MEDIA_URL, MULTIPLE_MEDIA_URL } from "../../config/env";
const restApi = new RestApi();

export const fetchAllPhotos = (_model) => async (dispatch) => {
  try {
    dispatch({ type: PHOTOS_LIST_REQUEST });
    const path = API_URL + '/media/mediaview/';
    const { data } = await restApi.get(path, _model);
    dispatch({ type: PHOTOS_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: PHOTOS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const searchPhoto = (query) => async (dispatch) => {
  try {
    const path = API_URL + `/mediasearch/?search=${query}`;
    dispatch({ type: PHOTOS_LIST_REQUEST });
    const { data } = await restApi.get(path);
    dispatch({ type: PHOTOS_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    console.log('error: ', error);
  }
};


export const fetchNext = (path) => async (dispatch) => {
  try {
    dispatch({ type: PHOTOS_LIST_REQUEST });
    const { data } = await restApi.get(path);
    dispatch({ type: PHOTOS_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: PHOTOS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const uploadPicture = async (formdata) => {
  try {
    const path = MEDIA_URL;
    const data = await restApi.upload(path, formdata);
    return data
  } catch (error) {
    console.log('error: ', error);
  }
}

export const uploadMultiplePicture = async (formdata) => {
  try {
    const path = MULTIPLE_MEDIA_URL;
    const data = await restApi.upload(path, formdata);
    return data
  } catch (error) {
    console.log('error: ', error);
  }
}

export const deletePhoto = (_model) => async (dispatch) => {
  try {
    dispatch({ type: PHOTOS_UPDATE_REQUEST, payload: _model });
    const path = API_URL + `/media/mediaupdate/${_model.id}/`;
    const { data } = await restApi.delete(path, _model);
    dispatch({ type: PHOTOS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PHOTOS_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

