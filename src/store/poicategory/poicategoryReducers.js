import {

  POICATEGORY_LIST_REQUEST,
  POICATEGORY_LIST_SUCCESS,
  POICATEGORY_LIST_FAIL,

  POICATEGORY_CREATE_REQUEST,
  POICATEGORY_CREATE_SUCCESS,
  POICATEGORY_CREATE_FAIL,

  POICATEGORY_UPDATE_REQUEST,
  POICATEGORY_UPDATE_SUCCESS,
  POICATEGORY_UPDATE_FAIL,

  POICATEGORY_DELETE_REQUEST,
  POICATEGORY_DELETE_SUCCESS,
  POICATEGORY_DELETE_FAIL

} from './poicategoryConstants';


export const poicategoryListReducer = (state = { poicategories: [] }, action) => {
  switch (action.type) {
    case POICATEGORY_LIST_REQUEST:
      return { loading: true };
    case POICATEGORY_LIST_SUCCESS:
      return { loading: false, poicategories: action.payload };
    case POICATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const poicategoryCreateReducer = (state = { poicategory: {} }, action) => {
  switch (action.type) {
    case POICATEGORY_CREATE_REQUEST:
      return { loading: true };
    case POICATEGORY_CREATE_SUCCESS:
      return { loading: false, success: true, poicategory: action.payload };
    case POICATEGORY_CREATE_FAIL:
      return { loading: false,  error: action.payload };
    default:
      return state;
  }
};

export const poicategoryUpdateReducer = (state = { poicategory: {} }, action) => {
  switch (action.type) {
    case POICATEGORY_UPDATE_REQUEST:
      return { loading: true, poicategory: action.payload };
    case POICATEGORY_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case POICATEGORY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const poicategoryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case POICATEGORY_DELETE_REQUEST:
      return { loading: true };
    case POICATEGORY_DELETE_SUCCESS:
      return { loading: false, success: true };
    case POICATEGORY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


