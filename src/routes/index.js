import Login from "../pages/common/Login";
import Register from "../pages/common/Register";
import Dashboard from "../pages/inside/Dashboard";
import BookingPage from "../pages/outside/BookingPage";
import DetailPage from "../pages/outside/DetailPage";
import Homepage from "../pages/outside/Homepage";

const routes = [
  {
    exact: true,
    path: "/",
    component: Homepage,
    title: "ToToTicket",
    type: "public",
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailPage,
    title: "",
    type: "public",
  },
  {
    exact: false,
    path: "/booking/:id",
    component: BookingPage,
    title: "",
    type: "public",
  },
  {
    exact: false,
    path: "/login",
    component: Login,
    title: "Login",
    type: "common",
  },
  {
    exact: false,
    path: "/register",
    component: Register,
    title: "Register",
    type: "common",
  },
  {
    exact: false,
    path: "/dashboard",
    component: Dashboard,
    title: "Admin ToToTicket",
    type: "private",
  },
];

export default routes;
