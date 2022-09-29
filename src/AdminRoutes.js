import LoginScreen from "./screens/LoginManagement/LoginScreen";
import UserManagementScreen from "./screens/UserManagement/UserManagementScreen";
import ProjectManagementScreen from "./screens/ProjectManagement/ProjectManagementScreen";
import ProjectManagementDetail from "./screens/ProjectManagement/ProjectManagementDetail";

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
    name: "Project Management",
    icon: "fa fa-sticky-note white",
    component: ProjectManagementScreen,
    layout: "/admin"
  },
  {
    path: "/project/detail",
    name: "Project Detail",
    icon: "fa fa-sticky-note white",
    component: ProjectManagementDetail,
    layout: "/admin"
  }
];
export default routes;
