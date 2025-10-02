import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("controlled-form", "./components/ControlledForm.jsx"),
] satisfies RouteConfig;
