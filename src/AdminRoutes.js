import LoginScreen from "screens/loginmanagement/login.js";
import UserManagementScreen from "./screens/user/UserManagementScreen";
import ProjectManagementScreen from "./screens/project/ProjectManagementScreen";

var routes = [
  {
    path: "/login",
    name: "Dashboard",
    icon: "fa fa-users white",
    component: LoginScreen,
    layout: "/auth"
  },
  {
    path: "/users",
    name: "User Management",
    icon: "fa fa-users white",
    component: UserManagementScreen,
    layout: "/admin"
  },
  {
    path: "/projects",
    name: "Ptoject Management",
    icon: "fa fa-sticky-note white",
    component: ProjectManagementScreen,
    layout: "/admin"
  }
];
export default routes;
