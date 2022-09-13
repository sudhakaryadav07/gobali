import Login from "views/loginmanagement/login";
import EmailVerification from "views/loginmanagement/emailVerification";
import ChangePassword from "views/loginmanagement/changePassword";
import OtpVerification from "views/loginmanagement/otpVerification";
import SuccessfullyUpdatePassword from "views/loginmanagement/successfullyUpdatePassword";

var routes = [
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/emailVerification",
    name: "EmailVerification",
    icon: "ni ni-key-25 text-info",
    component: EmailVerification,
    layout: "/auth"
  }, {
    path: "/ChangePassword",
    name: "ChangePassword",
    icon: "ni ni-key-25 text-info",
    component: ChangePassword,
    layout: "/auth"
  }, {
    path: "/otpVerification",
    name: "OtpVerification",
    icon: "ni ni-key-25 text-info",
    component: OtpVerification,
    layout: "/auth"
  }, {
    path: "/successfullyUpdatePassword",
    name: "SuccessfullyUpdatePassword",
    icon: "ni ni-key-25 text-info",
    component: SuccessfullyUpdatePassword,
    layout: "/auth"
  }
];
export default routes;
