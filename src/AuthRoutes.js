import Login from "screens/loginmanagement/login";
import EmailVerification from "screens/loginmanagement/emailVerification";
import ChangePassword from "screens/loginmanagement/changePassword";
import OtpVerification from "screens/loginmanagement/otpVerification";
import SuccessfullyUpdatePassword from "screens/loginmanagement/successfullyUpdatePassword";

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
  },
  {
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
  },
  {
    path: "/successfullyUpdatePassword",
    name: "SuccessfullyUpdatePassword",
    icon: "ni ni-key-25 text-info",
    component: SuccessfullyUpdatePassword,
    layout: "/auth"
  }
];
export default routes;
