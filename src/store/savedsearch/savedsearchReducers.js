import {
  SAVEDSEARCH_LIST_REQUEST,
  SAVEDSEARCH_LIST_SUCCESS,
  SAVEDSEARCH_LIST_FAIL
} from './savedsearchConstants';


export const savedSearchListReducer = (state = { savedsearches: [] }, action) => {
  switch (action.type) {
    case SAVEDSEARCH_LIST_REQUEST:
      return { loading: true };
    case SAVEDSEARCH_LIST_SUCCESS:
      return { loading: false, savedsearches: action.payload };
    case SAVEDSEARCH_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};