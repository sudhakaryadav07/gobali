import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
   cityListReducer,
   cityCreateReducer,
   cityUpdateReducer
} from './city/cityReducers';

const reducer = combineReducers({

   cityList: cityListReducer,
   cityCreate: cityCreateReducer,
   cityUpdate: cityUpdateReducer,


});

const userProfile = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : null;
let userLogin = {};
if (userProfile) {
   userLogin = { ...userProfile, userProfile, loading: false, }
}

const initialState = {
   userLogin: userLogin
};

const middleware = [thunk];

const store = createStore(
   reducer,
   initialState,
   applyMiddleware(...middleware)
);

export default store;
