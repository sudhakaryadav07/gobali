import {

  POI_LIST_REQUEST,
  POI_LIST_SUCCESS,
  POI_LIST_FAIL,

  POI_CREATE_REQUEST,
  POI_CREATE_SUCCESS,
  POI_CREATE_FAIL,

  POI_UPDATE_INIT,

  POI_UPDATE_REQUEST,
  POI_UPDATE_SUCCESS,
  POI_UPDATE_FAIL,

  POI_DELETE_REQUEST,
  POI_DELETE_SUCCESS,
  POI_DELETE_FAIL

} from './poiConstants';


export const poiListReducer = (state = { pois: [] }, action) => {
  switch (action.type) {
    case POI_LIST_REQUEST:
      return { loading: true };
    case POI_LIST_SUCCESS:
      return { loading: false, pois: action.payload };
    case POI_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const poiCreateReducer = (state = { poi: {} }, action) => {
  switch (action.type) {
    case POI_CREATE_REQUEST:
      return { loading: true };
    case POI_CREATE_SUCCESS:
      return { loading: false, poi: action.payload };
    case POI_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const poiOneUpdateReducer = (state = { poi: {} }, action) => {
  switch (action.type) {
    case POI_UPDATE_INIT:
      return { loading: true, poi: action.payload };
    default:
      return state;
  }
};

export const poiUpdateReducer = (state = { poi: {} }, action) => {
  switch (action.type) {
    case POI_UPDATE_REQUEST:
      return { loading: true, poi: action.payload };
    case POI_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case POI_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const poiDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case POI_DELETE_REQUEST:
      return { loading: true };
    case POI_DELETE_SUCCESS:
      return { loading: false, success: true };
    case POI_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


