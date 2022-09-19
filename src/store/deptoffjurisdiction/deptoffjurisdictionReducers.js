import {
  DEPT_OFF_JURISDICTION_LIST_REQUEST,
  DEPT_OFF_JURISDICTION_LIST_SUCCESS,
  DEPT_OFF_JURISDICTION_LIST_FAIL,

  DEPT_OFF_JURISDICTION_CREATE_REQUEST,
  DEPT_OFF_JURISDICTION_CREATE_SUCCESS,
  DEPT_OFF_JURISDICTION_CREATE_FAIL,

  DEPT_OFF_JURISDICTION_UPDATE_INIT,
  DEPT_OFF_JURISDICTION_UPDATE_REQUEST,
  DEPT_OFF_JURISDICTION_UPDATE_SUCCESS,
  DEPT_OFF_JURISDICTION_UPDATE_FAIL
} from './deptoffjurisdictionConstants';

export const deptoffjurisdictionListReducer = (state = { deptoffjurisdictions: [] }, action) => {
  switch (action.type) {
    case DEPT_OFF_JURISDICTION_LIST_REQUEST:
      return { loading: true };
    case DEPT_OFF_JURISDICTION_LIST_SUCCESS:
      return { loading: false, deptoffjurisdictions: action.payload };
    case DEPT_OFF_JURISDICTION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deptoffjurisdictionCreateReducer = (state = { deptoffjurisdiction: {} }, action) => {
  switch (action.type) {
    case DEPT_OFF_JURISDICTION_CREATE_REQUEST:
      return { loading: true };
    case DEPT_OFF_JURISDICTION_CREATE_SUCCESS:
      return { loading: false, success: true, deptoffjurisdiction: action.payload };
    case DEPT_OFF_JURISDICTION_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deptoffjurisdictionUpdateReducer = (state = { deptoffjurisdiction: {} }, action) => {
  switch (action.type) {
    case DEPT_OFF_JURISDICTION_UPDATE_INIT:
      return { deptoffjurisdiction: action.payload };
    case DEPT_OFF_JURISDICTION_UPDATE_REQUEST:
      return { loading: true, deptoffjurisdiction: action.payload };
    case DEPT_OFF_JURISDICTION_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case DEPT_OFF_JURISDICTION_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};