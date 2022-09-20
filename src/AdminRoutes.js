import CityScreen from "./screens/city/CityScreen.js";

var routes = [
  {
    path: "/tables",
    name: "Dashboard",
    icon: "ni ni-bullet-list-67 white",
    component: CityScreen,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "User Management",
    icon: "ni ni-bullet-list-67 white",
    component: CityScreen,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Ptoject Management",
    icon: "ni ni-bullet-list-67 white",
    component: CityScreen,
    layout: "/admin"
  }
];
export default routes;
