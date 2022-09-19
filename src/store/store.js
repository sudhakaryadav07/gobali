import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
   poicategoryListReducer,
   poicategoryCreateReducer,
   poicategoryUpdateReducer,
   poicategoryDeleteReducer
} from './poicategory/poicategoryReducers';

import { poiAttributeOneReducer }
   from './poiattributes/poiAttributesReducers';

import {
   poiCreateReducer,
   poiListReducer,
   poiDeleteReducer,
   poiOneUpdateReducer,
   poiUpdateReducer
} from './poi/poiReducers';

import {
   eventListReducer,
   eventCreateReducer,
   eventUpdateReducer,
   eventDeleteReducer
} from './event/eventReducers';

import {
   cityListReducer,
   cityCreateReducer,
   cityUpdateReducer
} from './city/cityReducers';

import {
   emergencycontactListReducer,
   emergencycontactCreateReducer,
   emergencycontactUpdateReducer
} from './emergencycontact/emergencycontactReducers';

import { photoListReducer }
   from './photo/photoReducers';

import { videoListReducer }
   from './video/videoReducers';

import { savedSearchListReducer }
   from './savedsearch/savedsearchReducers'

import {
   userLoginReducer,
   userListReducer,
   userDetailsReducer,
   userCreateReducer,
   userUpdateReducer,
   userDeleteReducer,
   userMapReducer
} from './user/userReducers';

import {
   touristcircuitListReducer,
   touristcircuitCreateReducer,
   touristcircuitUpdateReducer
} from './touristcircuit/touristcircuitReducers';

import {
   videocategoryListReducer,
   videocategoryCreateReducer,
   videocategoryUpdateReducer
} from './videocategory/videocategoryReducers';

import {
   traveldeskListReducer,
   traveldeskCreateReducer,
   traveldeskUpdateReducer
} from './traveldesk/traveldeskReducers';

import {
   guideListReducer,
   guideCreateReducer,
   guideUpdateReducer
} from './guide/guideReducers';

import {
   deptoffjurisdictionListReducer,
   deptoffjurisdictionCreateReducer,
   deptoffjurisdictionUpdateReducer
} from './deptoffjurisdiction/deptoffjurisdictionReducers';

import {
   payingguestCreateReducer,
   payingguestListReducer,
   payingguestUpdateReducer
} from './payingguest/payingguestReducers';

import {
   tripListReducer,
   tripDetailsReducer,
   tripCreateReducer,
   tripUpdateReducer,
   tripDeleteReducer
} from './planyourtrip/tripReducers';


const reducer = combineReducers({
   poiCategoryList: poicategoryListReducer,
   poiCategoryCreate: poicategoryCreateReducer,
   poiCategoryUpdate: poicategoryUpdateReducer,
   poiCategoryDelete: poicategoryDeleteReducer,

   poiList: poiListReducer,
   poiDetail: poiCreateReducer,
   poiOne: poiOneUpdateReducer,
   poiUpdate: poiUpdateReducer,
   poiDelete: poiDeleteReducer,

   poiAttributeOne: poiAttributeOneReducer,

   eventList: eventListReducer,
   eventCreate: eventCreateReducer,
   eventUpdate: eventUpdateReducer,
   eventDelete: eventDeleteReducer,

   cityList: cityListReducer,
   cityCreate: cityCreateReducer,
   cityUpdate: cityUpdateReducer,

   emergencyContactList: emergencycontactListReducer,
   emergencyContactCreate: emergencycontactCreateReducer,
   emergencyContactUpdate: emergencycontactUpdateReducer,


   photoList: photoListReducer,

   videoList: videoListReducer,

   savedSearchList: savedSearchListReducer,

   userList: userListReducer,
   userDetail: userDetailsReducer,
   userCreate: userCreateReducer,
   userUpdate: userUpdateReducer,
   userDelete: userDeleteReducer,
   userLogin: userLoginReducer,
   userMap:userMapReducer,

   touristcircuitList: touristcircuitListReducer,
   touristcircuitCreate: touristcircuitCreateReducer,
   touristcircuitUpdate: touristcircuitUpdateReducer,

   videocategoryList: videocategoryListReducer,
   videocategoryCreate: videocategoryCreateReducer,
   videocategoryUpdate: videocategoryUpdateReducer,

   traveldeskList: traveldeskListReducer,
   traveldeskCreate: traveldeskCreateReducer,
   traveldeskUpdate: traveldeskUpdateReducer,

   guideList: guideListReducer,
   guideCreate: guideCreateReducer,
   guideUpdate: guideUpdateReducer,

   deptoffjurisdictionList: deptoffjurisdictionListReducer,
   deptoffjurisdictionCreate: deptoffjurisdictionCreateReducer,
   deptoffjurisdictionUpdate: deptoffjurisdictionUpdateReducer,

   payingguestList: payingguestListReducer,
   payingguestCreate: payingguestCreateReducer,
   payingguestUpdate: payingguestUpdateReducer,

   tripList: tripListReducer,
   tripDetail: tripDetailsReducer,
   tripCreate: tripCreateReducer,
   tripUpdate: tripUpdateReducer,
   tripDelete: tripDeleteReducer,

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
