import {

  POI_ATTRIBUTE_LIST_REQUEST,
  POI_ATTRIBUTE_LIST_SUCCESS,
  POI_ATTRIBUTE_LIST_FAIL,

  POI_ATTRIBUTE_CREATE_REQUEST,
  POI_ATTRIBUTE_CREATE_SUCCESS,
  POI_ATTRIBUTE_CREATE_FAIL,

  POI_ATTRIBUTE_GET_ONE_REQUEST,
  POI_ATTRIBUTE_GET_ONE_SUCCESS,
  POI_ATTRIBUTE_GET_ONE_FAIL,

  POI_ATTRIBUTE_UPDATE_INIT,

  POI_ATTRIBUTE_UPDATE_REQUEST,
  POI_ATTRIBUTE_UPDATE_SUCCESS,
  POI_ATTRIBUTE_UPDATE_FAIL,

  POI_ATTRIBUTE_DELETE_REQUEST,
  POI_ATTRIBUTE_DELETE_SUCCESS,
  POI_ATTRIBUTE_DELETE_FAIL

} from './poiAttributesConstants';


export const poiAttributeListReducer = (state = { poiAttributes: [] }, action) => {
  switch (action.type) {
    case POI_ATTRIBUTE_LIST_REQUEST:
      return { loading: true };
    case POI_ATTRIBUTE_LIST_SUCCESS:
      return { loading: false, poiAttributes: action.payload };
    case POI_ATTRIBUTE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const poiAttributeOneReducer = (state = { poiAttribute: [] }, action) => {
  switch (action.type) {
    case POI_ATTRIBUTE_GET_ONE_REQUEST:
      return { loading: true };
    case POI_ATTRIBUTE_GET_ONE_SUCCESS:
      return { loading: false, poiAttribute: action.payload };
    case POI_ATTRIBUTE_GET_ONE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const poiAttributeCreateReducer = (state = { poiAttribute: {} }, action) => {
  switch (action.type) {
    case POI_ATTRIBUTE_CREATE_REQUEST:
      return { loading: true };
    case POI_ATTRIBUTE_CREATE_SUCCESS:
      return { loading: false, poiAttribute: action.payload };
    case POI_ATTRIBUTE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const poiAttributeOneUpdateReducer = (state = { poiAttribute: {} }, action) => {
  switch (action.type) {
    case POI_ATTRIBUTE_UPDATE_INIT:
      return { loading: true, poiAttribute: action.payload };
    default:
      return state;
  }
};

export const poiAttributeUpdateReducer = (state = { poiAttribute: {} }, action) => {
  switch (action.type) {
    case POI_ATTRIBUTE_UPDATE_REQUEST:
      return { loading: true, poiAttribute: action.payload };
    case POI_ATTRIBUTE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case POI_ATTRIBUTE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const poiAttributeDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case POI_ATTRIBUTE_DELETE_REQUEST:
      return { loading: true };
    case POI_ATTRIBUTE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case POI_ATTRIBUTE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


