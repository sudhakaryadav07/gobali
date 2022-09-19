import jwt_decode from "jwt-decode";
import RestApi from "../../utils/common/RestApi";
import { API_URL, SSO_SIGNIN, BACK_TO_SSO } from "../../config/env";

import {
  USER_LIST_RESET,
  USER_DETAILS_RESET,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,

  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,

  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,

  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAIL,

  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,

  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,

  USER_MAP_SUCCESS

} from './userConstants';


const restApi = new RestApi();

export const login = (model) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const path = API_URL + '/get-token/';
    const { data } = await restApi.openPost(path, model);
    const { token, refreshtoken } = data;
    const decoded = await jwt_decode(token);
    const { user_id, username, role } = decoded;
    const userRole = role && role.length > 0 ? role.join(",") : "";
    const userSavedSearch = { user: user_id, created_by: username, keyword: "", keyword_id: "keyword0", module: "" };
    const userInfo = { userId: user_id, userName: username, userRole: userRole, accessToken: token, userSavedSearch }
    await dispatch({ type: USER_LOGIN_SUCCESS, payload: userInfo });
    localStorage.setItem('userName', username);
    localStorage.setItem('userRole', role);
    localStorage.setItem('accessToken', token);
    localStorage.setItem('refreshToken', refreshtoken);
    localStorage.setItem('userProfile', JSON.stringify(userInfo));
    localStorage.setItem('userSavedSearch', JSON.stringify(userSavedSearch));
    return token;
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const fetchMapDetails = () => async (dispatch) => {
  try {
    const path = API_URL + '/map-details/';
    const { data } = await restApi.get(path);
    localStorage.setItem('apikey', JSON.stringify(data.api_key));
    dispatch({ type: USER_MAP_SUCCESS, payload: data.api_key });
    return data;
  } catch (error) {
  }
};

export const fetchDistricts = () => async (dispatch) => {
  try {
    const path = API_URL + '/district/';
    const { data } = await restApi.get(path);
    return data;
  } catch (error) {
  }
};

export const fetchPubKey = () => async (dispatch) => {
  try {
    const path = API_URL + '/pubkey/';
    const { data } = await restApi.get(path);
    localStorage.setItem('pubKey', data.results[0].public_key);
  } catch (error) {
  }
};

export const loginSSO = (sso, model) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const path = API_URL + '/validate-sso-token/';
    const { data } = await restApi.openPost(path, model);
    const { token, refreshtoken } = data;
    const decoded = await jwt_decode(token);
    console.log('decoded: ', decoded);
    const { user_id, username, role } = decoded;
    const userRole = role && role.length > 0 ? role.join(",") : "";
    const userSavedSearch = { user: user_id, created_by: username, keyword: "", keyword_id: "keyword0", module: "" };
    const userInfo = { userId: user_id, userName: username, userRole: userRole, accessToken: token, userSavedSearch }

    await dispatch({ type: USER_LOGIN_SUCCESS, payload: userInfo });
    await localStorage.setItem('userName', username);
    await localStorage.setItem('userRole', role);
    await localStorage.setItem('accessToken', token);
    await localStorage.setItem('ssoToken', sso);
    await localStorage.setItem('refreshToken', refreshtoken);
    await localStorage.setItem('userProfile', JSON.stringify(userInfo));
    await localStorage.setItem('userSavedSearch', JSON.stringify(userSavedSearch));

    return token;
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const logout = (model) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_DETAILS_RESET });
    dispatch({ type: USER_LIST_RESET });

    await localStorage.removeItem('userName');
    await localStorage.removeItem('userRole');
    await localStorage.removeItem('accessToken');
    await localStorage.removeItem('refreshToken');
    await localStorage.removeItem('ssoToken');
    await localStorage.removeItem('userProfile');
    await localStorage.removeItem('userSavedSearch');

    const path = API_URL + '/sign-out-sso/';
    const { data } = await restApi.post(path, model);
    if (data && data.res) {
      document.location.href = data.res;
    } else {
      document.location.href = SSO_SIGNIN;
    }
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const refreshJWTToken = (model) => async (dispatch) => {
  try {
    const path = API_URL + '/refreshtoken/';
    const { data } = await restApi.post(path, model);
    const { access, refresh } = data;

    await localStorage.setItem('accessToken', access);
    await localStorage.setItem('refreshToken', refresh);


    return data;
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const increaseSSOSession = (model) => async (dispatch) => {
  try {
    const path = API_URL + '/increase-session-time/';
    const { data } = await restApi.post(path, model);
    return data;
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const backToSSO = (model) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_DETAILS_RESET });
    dispatch({ type: USER_LIST_RESET });

    await localStorage.removeItem('userName');
    await localStorage.removeItem('userRole');
    await localStorage.removeItem('accessToken');
    await localStorage.removeItem('refreshToken');
    await localStorage.removeItem('userProfile');
    await localStorage.removeItem('userSavedSearch');
    await localStorage.removeItem('ssoToken');

    const path = API_URL + '/back-to-sso/';
    const { data } = await restApi.post(path, model);
    if (data && data.res) {
      document.location.href = data.res;
    } else {
      document.location.href = BACK_TO_SSO;
    }
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const fetchAllUser = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const path = API_URL + '/admin/user/';
    const { data } = await restApi.get(path);
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const searchUser = (username, first_name, last_name) => async (dispatch) => {
  try {
    let q = "";
    if (username) {
      q = q + `username=${username}&`;
    }
    if (first_name) {
      q = q + `first_name=${first_name}&`;
    }
    if (last_name) {
      q = q + `last_name=${last_name}`;
    }

    dispatch({ type: USER_LIST_REQUEST });
    const path = API_URL + `/user/search/?${q}`;
    const { data } = await restApi.get(path);
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    console.log('error: ', error);
  }
};

export const fetchNext = (path) => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const { data } = await restApi.get(path);
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const fetchOne = (_id) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const path = API_URL + `/admin/user/${_id}`;
    const { data } = await restApi.get(path);
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const createUser = (_model) => async (dispatch) => {
  try {
    dispatch({ type: USER_CREATE_REQUEST });
    const path = API_URL + '/admin/user/';
    const { data } = await restApi.post(path, _model);
    dispatch({ type: USER_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const updateUser = (_model) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST, payload: _model });
    const path = API_URL + `/admin/user/${_model.id}/`;
    const { data } = await restApi.put(path, _model);
    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const deleteUser = (_model) => async (dispatch) => {
  try {
    dispatch({ type: USER_DELETE_REQUEST, payload: _model });
    const path = API_URL + `/user/delete/${_model.id}/`;
    await restApi.delete(path);
    dispatch({ type: USER_DELETE_SUCCESS, payload: _model });
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

