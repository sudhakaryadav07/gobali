import {
  TRAVEL_DESK_LIST_REQUEST,
  TRAVEL_DESK_LIST_SUCCESS,
  TRAVEL_DESK_LIST_FAIL,

  TRAVEL_DESK_CREATE_REQUEST,
  TRAVEL_DESK_CREATE_SUCCESS,
  TRAVEL_DESK_CREATE_FAIL,

  TRAVEL_DESK_UPDATE_INIT,
  TRAVEL_DESK_UPDATE_REQUEST,
  TRAVEL_DESK_UPDATE_SUCCESS,
  TRAVEL_DESK_UPDATE_FAIL
} from './traveldeskConstants';

export const traveldeskListReducer = (state = { traveldesks: [] }, action) => {
  switch (action.type) {
    case TRAVEL_DESK_LIST_REQUEST:
      return { loading: true };
    case TRAVEL_DESK_LIST_SUCCESS:
      return { loading: false, traveldesks: action.payload };
    case TRAVEL_DESK_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const traveldeskCreateReducer = (state = { traveldesk: {} }, action) => {
  switch (action.type) {
    case TRAVEL_DESK_CREATE_REQUEST:
      return { loading: true };
    case TRAVEL_DESK_CREATE_SUCCESS:
      return { loading: false, success: true, traveldesk: action.payload };
    case TRAVEL_DESK_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const traveldeskUpdateReducer = (state = { traveldesk: {} }, action) => {
  switch (action.type) {
    case TRAVEL_DESK_UPDATE_INIT:
      return { traveldesk: action.payload };
    case TRAVEL_DESK_UPDATE_REQUEST:
      return { loading: true, traveldesk: action.payload };
    case TRAVEL_DESK_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case TRAVEL_DESK_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};