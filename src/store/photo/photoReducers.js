import {
  PHOTOS_LIST_REQUEST,
  PHOTOS_LIST_SUCCESS,
  PHOTOS_LIST_FAIL
} from './photoConstants';

export const photoListReducer = (state = { photos: [] }, action) => {
  switch (action.type) {
    case PHOTOS_LIST_REQUEST:
      return { loading: true };
    case PHOTOS_LIST_SUCCESS:
      return { loading: false, photos: action.payload };
    case PHOTOS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};