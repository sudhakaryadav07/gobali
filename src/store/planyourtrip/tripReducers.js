import {
  TRIP_LIST_REQUEST,
  TRIP_LIST_SUCCESS,
  TRIP_LIST_FAIL,
  TRIP_LIST_RESET,
  TRIP_DETAILS_INIT,
  TRIP_DETAILS_FAIL,
  TRIP_DETAILS_REQUEST,
  TRIP_DETAILS_RESET,
  TRIP_DETAILS_SUCCESS,
  TRIP_CREATE_REQUEST,
  TRIP_CREATE_SUCCESS,
  TRIP_CREATE_FAIL,
  TRIP_CREATE_RESET,
  TRIP_UPDATE_REQUEST,
  TRIP_UPDATE_SUCCESS,
  TRIP_UPDATE_FAIL,
  TRIP_UPDATE_RESET,
  TRIP_DELETE_REQUEST,
  TRIP_DELETE_SUCCESS,
  TRIP_DELETE_FAIL,
} from './tripConstants';

export const tripListReducer = (state = { trips: [] }, action) => {
  switch (action.type) {
    case TRIP_LIST_REQUEST:
      return { loading: true };
    case TRIP_LIST_SUCCESS:
      return { loading: false, trips: action.payload };
    case TRIP_LIST_FAIL:
      return { loading: false, error: action.payload };
    case TRIP_LIST_RESET:
      return { trips: [] };
    default:
      return state;
  }
};


export const tripDetailsReducer = (state = { trip: {} }, action) => {
  switch (action.type) {
    case TRIP_DETAILS_INIT:
      return { ...state, loading: false, trip: action.payload };
    case TRIP_DETAILS_REQUEST:
      return { ...state, loading: true };
    case TRIP_DETAILS_SUCCESS:
      return { loading: false, trip: action.payload };
    case TRIP_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case TRIP_DETAILS_RESET:
      return { trip: {} };
    default:
      return state;
  }
};


export const tripCreateReducer = (state = { trip: {} }, action) => {
  switch (action.type) {
    case TRIP_CREATE_REQUEST:
      return { loading: true };
    case TRIP_CREATE_SUCCESS:
      return { loading: false, trip: action.payload };
    case TRIP_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case TRIP_CREATE_RESET:
      return {};
    default:
      return state;
  }
};


export const tripUpdateReducer = (state = { trip: {} }, action) => {
  switch (action.type) {
    case TRIP_UPDATE_REQUEST:
      return { loading: true, trip: action.payload };
    case TRIP_UPDATE_SUCCESS:
      return { loading: false, success: true, trip: action.payload };
    case TRIP_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case TRIP_UPDATE_RESET:
      return {
        trip: {},
      };
    default:
      return state;
  }
};


export const tripDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case TRIP_DELETE_REQUEST:
      return { loading: true };
    case TRIP_DELETE_SUCCESS:
      return { loading: false, success: true };
    case TRIP_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
