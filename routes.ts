import { EjemploController } from "./SRC/Controllers/EjemploController";
import { Schema } from "./middlewares/ValidationSchema";
import { EjercicioController } from "./SRC/Controllers/ejercicioController";


export const AppRoutes = [
  { path: "/ejemplo", 
  method: "get", 
  action: EjemploController.ejemploAction,
  schema: Schema.schemaEjemplo, },
  {
    path: "/ejemploParams/:nombre/:apellido",
    method: "get",
    action: EjemploController.ejemploActionConParametros,
    schema: Schema.schemaEjemploParams,
  },
  {
    path: "/ejemploQParams",
    method: "get",
    action: EjemploController.ejemploActionConQParametros,
    schema: Schema.schemaEjemploQParams
  },
  {
    path: "/ejemploPost",
    method: "post",
    action: EjemploController.ejemploActionPost,
    schema: Schema.schemaPost
  },
  {
    path: "/obtenerPorSP",
    method: "get",
    action: EjemploController.obtenerPorSP,
    schema: Schema.schemaPorSP
   },
   {
    path: "/obtenerTemas",
    method: "get",
    action: EjercicioController.obtenerTemas,
    schema: Schema.schemaTemas
   },
   {
    path: "/obtenerReparticiones",
    method: "get",
    action: EjemploController.obtenerReparticiones,
    schema : Schema.schemaReparticiones
   },
   {
    path: "/token",
    method: "post",
    action: EjemploController.crearToken,
    schema : Schema.schematoken
   },
   {
    path: "/obtenerTemasPorSP",
    method: "get",
    action: EjercicioController.obtenerTemasPorSP,
    schema: Schema.schemaObtenerTemasPorSP
   },
   {
    path: "/obtenerQTemas",
    method: "get",
    action: EjercicioController.obtenerQTemas,
    schema: Schema.schemaobtenerQTemas
   },

];
