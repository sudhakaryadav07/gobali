import {
  GUIDE_LIST_REQUEST,
  GUIDE_LIST_SUCCESS,
  GUIDE_LIST_FAIL,

  GUIDE_CREATE_REQUEST,
  GUIDE_CREATE_SUCCESS,
  GUIDE_CREATE_FAIL,

  GUIDE_UPDATE_INIT,
  GUIDE_UPDATE_REQUEST,
  GUIDE_UPDATE_SUCCESS,
  GUIDE_UPDATE_FAIL
} from './guideConstants';

export const guideListReducer = (state = { guides: [] }, action) => {
  switch (action.type) {
    case GUIDE_LIST_REQUEST:
      return { loading: true };
    case GUIDE_LIST_SUCCESS:
      return { loading: false, guides: action.payload };
    case GUIDE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const guideCreateReducer = (state = { guide: {} }, action) => {
  switch (action.type) {
    case GUIDE_CREATE_REQUEST:
      return { loading: true };
    case GUIDE_CREATE_SUCCESS:
      return { loading: false, success: true, guide: action.payload };
    case GUIDE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const guideUpdateReducer = (state = { guide: {} }, action) => {
  switch (action.type) {
    case GUIDE_UPDATE_INIT:
      return { guide: action.payload };
    case GUIDE_UPDATE_REQUEST:
      return { loading: true, guide: action.payload };
    case GUIDE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case GUIDE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};