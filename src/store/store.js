import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import {
   userListReducer,
   userCreateReducer,
   userUpdateReducer
} from './user/UserReducers';

const reducer = combineReducers({
   userList: userListReducer,
   userCreate: userCreateReducer,
   userUpdate: userUpdateReducer,
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

const store = configureStore({
   reducer: reducer,
   initialState: initialState,
   applyMiddleware: applyMiddleware(...middleware)
});

export default store;
