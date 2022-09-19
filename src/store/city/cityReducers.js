import {

  CITY_LIST_REQUEST,
  CITY_LIST_SUCCESS,
  CITY_LIST_FAIL,

  CITY_CREATE_REQUEST,
  CITY_CREATE_SUCCESS,
  CITY_CREATE_FAIL,


  CITY_UPDATE_REQUEST,
  CITY_UPDATE_SUCCESS,
  CITY_UPDATE_FAIL

} from './cityConstants';


export const cityListReducer = (state = { cities: [] }, action) => {
  switch (action.type) {
    case CITY_LIST_REQUEST:
      return { loading: true };
    case CITY_LIST_SUCCESS:
      return { loading: false, cities: action.payload };
    case CITY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const cityCreateReducer = (state = { city: {} }, action) => {
  switch (action.type) {
    case CITY_CREATE_REQUEST:
      return { loading: true };
    case CITY_CREATE_SUCCESS:
      return { loading: false, city: action.payload };
    case CITY_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const cityUpdateReducer = (state = { city: {} }, action) => {
  switch (action.type) {
    case CITY_UPDATE_REQUEST:
      return { loading: true, city: action.payload };
    case CITY_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case CITY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
