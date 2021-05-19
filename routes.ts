import { EjemploController } from "./SRC/Controllers/EjemploController";
export const AppRoutes = [
  { path: "/ejemplo", method: "get", action: EjemploController.ejemploAction },
  {
    path: "/ejemploParams/:nombre/:apellido",
    method: "get",
    action: EjemploController.ejemploActionConParametros,
  },
  {
    path: "/ejemploQParams",
    method: "get",
    action: EjemploController.ejemploActionConQParametros,
  },
  {
    path: "/ejemploPost",
    method: "post",
    action: EjemploController.ejemploActionPost,
  },
];
