import Table from "views/examples/Tables";

var routes = [
  {
    path: "/tables",
    name: "Dashboard",
    icon: "ni ni-bullet-list-67 text-red",
    component: Table,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "User Management",
    icon: "ni ni-bullet-list-67 text-red",
    component: Table,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Project Management",
    icon: "ni ni-bullet-list-67 text-red",
    component: Table,
    layout: "/admin"
  }
];
export default routes;
