import {
  PAYING_GUEST_LIST_REQUEST,
  PAYING_GUEST_LIST_SUCCESS,
  PAYING_GUEST_LIST_FAIL,

  PAYING_GUEST_CREATE_REQUEST,
  PAYING_GUEST_CREATE_SUCCESS,
  PAYING_GUEST_CREATE_FAIL,

  PAYING_GUEST_UPDATE_INIT,
  PAYING_GUEST_UPDATE_REQUEST,
  PAYING_GUEST_UPDATE_SUCCESS,
  PAYING_GUEST_UPDATE_FAIL
} from './payingguestConstants';

export const payingguestListReducer = (state = { payingguests: [] }, action) => {
  switch (action.type) {
    case PAYING_GUEST_LIST_REQUEST:
      return { loading: true };
    case PAYING_GUEST_LIST_SUCCESS:
      return { loading: false, payingguests: action.payload };
    case PAYING_GUEST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const payingguestCreateReducer = (state = { payingguest: {} }, action) => {
  switch (action.type) {
    case PAYING_GUEST_CREATE_REQUEST:
      return { loading: true };
    case PAYING_GUEST_CREATE_SUCCESS:
      return { loading: false, success: true, payingguest: action.payload };
    case PAYING_GUEST_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const payingguestUpdateReducer = (state = { payingguest: {} }, action) => {
  switch (action.type) {
    case PAYING_GUEST_UPDATE_INIT:
      return { payingguest: action.payload };
    case PAYING_GUEST_UPDATE_REQUEST:
      return { loading: true, payingguest: action.payload };
    case PAYING_GUEST_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case PAYING_GUEST_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};