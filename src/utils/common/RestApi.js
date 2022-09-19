import axios from 'axios';
import { showAlert } from "./Utils";
import { BACK_TO_SSO } from "../../config/env";

window.axios = axios;
// axios.defaults.withCredentials = true;

export default class RestApi {
   async get(url) {
      try {
         let token = localStorage.getItem('accessToken');
         let config = {
            headers: {
               'Content-Type': 'application/json',
               'token': token,
               'Authorization-DOIT': `JWT ${token}`
            },
         };

         const response = await axios.get(url, config);
         return response;
      } catch (error) {
         this.handle(error);
         throw error;
      }
   }

   async post(url, args) {
      try {
         let token = localStorage.getItem('accessToken');
         let config = {
            headers: {
               'Content-Type': 'application/json',
               'token': token,
               'Authorization-DOIT': `JWT ${token}`
            },
         };
         const response = await axios.post(url, args, config);
         return response;
      } catch (error) {
         this.handle(error);
         throw error;
      }
   }

   async openPost(url, args) {
      try {
         let config = {
            headers: {
               'Content-Type': 'application/json',
            },
         };
         const response = await axios.post(url, args, config);
         return response;
      } catch (error) {
         this.handle(error);
         throw error;
      }
   }

   async patch(url, args) {
      try {
         let token = localStorage.getItem('accessToken');
         let config = {
            headers: {
               'Content-Type': 'application/json',
               'token': token,
               'Authorization-DOIT': `JWT ${token}`
            },
         };
         const response = await axios.patch(url, args, config);
         return response;
      } catch (error) {
         this.handle(error);
         throw error;
      }
   }

   async put(url, args) {
      try {
         let token = localStorage.getItem('accessToken');
         let config = {
            headers: {
               'Content-Type': 'application/json',
               'token': token,
               'Authorization-DOIT': `JWT ${token}`
            },
         };
         const response = await axios.put(url, args, config);
         return response;

      } catch (error) {
         this.handle(error);
         throw error;
      }
   }

   async delete(url, args) {
      try {
         let token = localStorage.getItem('accessToken');
         let config = {
            headers: {
               'Content-Type': 'application/json',
               'token': token,
               'Authorization-DOIT': `JWT ${token}`
            },
         };
         const response = await axios.delete(url, config);
         return response;
      } catch (error) {
         this.handle(error);
         throw error;
      }
   }

   async upload(url, formdata) {
      try {
         let token = localStorage.getItem('accessToken');
         const myHeaders = new Headers();
         myHeaders.append("token", token);
         myHeaders.append("Authorization-DOIT", `JWT ${token}`);

         const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
         };

         const response = await fetch(url, requestOptions)
         const jsonResponse = await response.json();
         return jsonResponse;
      } catch (error) {
         this.handle(error);
         throw error;
      }
   }

   async uploadUpdate(url, formdata) {
      try {
         let token = localStorage.getItem('accessToken');
         const myHeaders = new Headers();
         myHeaders.append("token", token);
         myHeaders.append("Authorization-DOIT", `JWT ${token}`);

         const requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
         };

         const response = await fetch(url, requestOptions)
         const jsonResponse = await response.json();
         return jsonResponse;
      } catch (error) {
         this.handle(error);
         throw error;
      }
   }


   async fetch(url, formdata) {
      try {
         let token = localStorage.getItem('accessToken');
         const myHeaders = new Headers();
         myHeaders.append("token", token);
         myHeaders.append("Authorization-DOIT", `JWT ${token}`);

         const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
         };

         const response = await fetch(url, requestOptions)
         const jsonResponse = await response.json();
         return jsonResponse;
      } catch (error) {
         this.handle(error);
         throw error;
      }
   }

   handle(error) {
      try {
         const { response } = error;
         console.log('response: ', response);
         const { data, status, statusText } = response;
         if (status === 401) {
            localStorage.removeItem('userName');
            localStorage.removeItem('userRole');
            localStorage.removeItem('accessToken');
            localStorage.removeItem('ssoToken');
            localStorage.removeItem('userProfile');
            localStorage.removeItem('refreshToken');

            showAlert(`Server Error: Unknown user. You will be redirected to login page (${status})`);
            setTimeout(function () { document.location.href = BACK_TO_SSO; }, 4000);
         } else {
            showAlert(`${data.error_message}`);
         }
      } catch (err) {
         console.log('err: ', err);
      }
   }
}
