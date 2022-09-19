import {
  TOURIST_CIRCUIT_LIST_REQUEST,
  TOURIST_CIRCUIT_LIST_SUCCESS,
  TOURIST_CIRCUIT_LIST_FAIL,

  TOURIST_CIRCUIT_CREATE_REQUEST,
  TOURIST_CIRCUIT_CREATE_SUCCESS,
  TOURIST_CIRCUIT_CREATE_FAIL,

  TOURIST_CIRCUIT_UPDATE_INIT,
  TOURIST_CIRCUIT_UPDATE_REQUEST,
  TOURIST_CIRCUIT_UPDATE_SUCCESS,
  TOURIST_CIRCUIT_UPDATE_FAIL
} from './touristcircuitConstants';

export const touristcircuitListReducer = (state = { touristcircuits: [] }, action) => {
  switch (action.type) {
    case TOURIST_CIRCUIT_LIST_REQUEST:
      return { loading: true };
    case TOURIST_CIRCUIT_LIST_SUCCESS:
      return { loading: false, touristcircuits: action.payload };
    case TOURIST_CIRCUIT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const touristcircuitCreateReducer = (state = { touristcircuit: {} }, action) => {
  switch (action.type) {
    case TOURIST_CIRCUIT_CREATE_REQUEST:
      return { loading: true };
    case TOURIST_CIRCUIT_CREATE_SUCCESS:
      return { loading: false, success: true, touristcircuit: action.payload };
    case TOURIST_CIRCUIT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const touristcircuitUpdateReducer = (state = { touristcircuit: {} }, action) => {
  switch (action.type) {
    case TOURIST_CIRCUIT_UPDATE_INIT:
      return { touristcircuit: action.payload };
    case TOURIST_CIRCUIT_UPDATE_REQUEST:
      return { loading: true, touristcircuit: action.payload };
    case TOURIST_CIRCUIT_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case TOURIST_CIRCUIT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};