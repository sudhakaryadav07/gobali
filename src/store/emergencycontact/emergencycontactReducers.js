import {
  EMERGENCYCONTACT_GET_ONE_REQUEST,
  EMERGENCYCONTACT_GET_ONE_SUCCESS,
  EMERGENCYCONTACT_GET_ONE_FAIL,

  EMERGENCYCONTACT_CREATE_REQUEST,
  EMERGENCYCONTACT_CREATE_SUCCESS,
  EMERGENCYCONTACT_CREATE_FAIL,

  EMERGENCYCONTACT_UPDATE_REQUEST,
  EMERGENCYCONTACT_UPDATE_SUCCESS,
  EMERGENCYCONTACT_UPDATE_FAIL
} from './emergencycontactConstants';

export const emergencycontactListReducer = (state = { emergencycontact: {} }, action) => {
  switch (action.type) {
    case EMERGENCYCONTACT_GET_ONE_REQUEST:
      return { loading: true };
    case EMERGENCYCONTACT_GET_ONE_SUCCESS:
      return { loading: false, emergencycontact: action.payload };
    case EMERGENCYCONTACT_GET_ONE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const emergencycontactCreateReducer = (state = { emergencycontact: {} }, action) => {
  switch (action.type) {
    case EMERGENCYCONTACT_CREATE_REQUEST:
      return { loading: true };
    case EMERGENCYCONTACT_CREATE_SUCCESS:
      return { loading: false, emergencycontact: action.payload };
    case EMERGENCYCONTACT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const emergencycontactUpdateReducer = (state = { emergencycontact: {} }, action) => {
  switch (action.type) {
    case EMERGENCYCONTACT_UPDATE_REQUEST:
      return { loading: true, emergencycontact: action.payload };
    case EMERGENCYCONTACT_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case EMERGENCYCONTACT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

