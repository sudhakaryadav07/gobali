import Login from "screens/LoginManagement/LoginScreen";
import EmailVerification from "screens/LoginManagement/EmailVerificationScreen";
import ChangePassword from "screens/LoginManagement/ChangePasswordScreen";
import OtpVerification from "screens/LoginManagement/OtpVerificationScreen";
import SuccessfullyUpdatePassword from "screens/LoginManagement/SuccessfullyUpdatePasswordScreen";
import UserManagementScreen from "./screens/UserManagement/UserManagementScreen";

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
  },
  {
    path: "/users",
    name: "User Management",
    icon: "ni ni-key-25 text-info",
    component: UserManagementScreen,
    layout: "/admin"
  }
];
export default routes;
