/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Sessions from "views/Sessions.js";
import Upgrade from "views/Upload.js";
import SessionOverview from "./views/SessionOverview";

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/upload",
    name: "Upload new session",
    icon: "nc-icon nc-cloud-upload-94",
    component: Upgrade,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/sessions",
    name: "Sessions",
    icon: "nc-icon nc-notes",
    component: Sessions,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/session/overview",
    name: "Session Overview",
    component: SessionOverview,
    layout: "/admin",
    hidden: true
  }
];

export default dashboardRoutes;
