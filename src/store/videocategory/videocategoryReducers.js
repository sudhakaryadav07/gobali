import {
  VIDEO_CATEGORY_LIST_REQUEST,
  VIDEO_CATEGORY_LIST_SUCCESS,
  VIDEO_CATEGORY_LIST_FAIL,

  VIDEO_CATEGORY_CREATE_REQUEST,
  VIDEO_CATEGORY_CREATE_SUCCESS,
  VIDEO_CATEGORY_CREATE_FAIL,

  VIDEO_CATEGORY_UPDATE_INIT,
  VIDEO_CATEGORY_UPDATE_REQUEST,
  VIDEO_CATEGORY_UPDATE_SUCCESS,
  VIDEO_CATEGORY_UPDATE_FAIL
} from './videocategoryConstants';

export const videocategoryListReducer = (state = { videocategories: [] }, action) => {
  switch (action.type) {
    case VIDEO_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case VIDEO_CATEGORY_LIST_SUCCESS:
      return { loading: false, videocategories: action.payload };
    case VIDEO_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const videocategoryCreateReducer = (state = { videocategory: {} }, action) => {
  switch (action.type) {
    case VIDEO_CATEGORY_CREATE_REQUEST:
      return { loading: true };
    case VIDEO_CATEGORY_CREATE_SUCCESS:
      return { loading: false, success: true, videocategory: action.payload };
    case VIDEO_CATEGORY_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const videocategoryUpdateReducer = (state = { videocategory: {} }, action) => {
  switch (action.type) {
    case VIDEO_CATEGORY_UPDATE_INIT:
      return { videocategory: action.payload };
    case VIDEO_CATEGORY_UPDATE_REQUEST:
      return { loading: true, videocategory: action.payload };
    case VIDEO_CATEGORY_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case VIDEO_CATEGORY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};