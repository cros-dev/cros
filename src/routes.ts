import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("projetos", "routes/projetos.tsx"),
  route("curriculo", "routes/curriculo.tsx"),
] satisfies RouteConfig;
