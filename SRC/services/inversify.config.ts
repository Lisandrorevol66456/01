//import "reflect-metadata";
import { Container } from "inversify";
import { EjemploServiceBis } from "./EjemploServiceBis";
import { EjercicioServices } from "./EjercicioServices";
import EjemploTypes from "./interfaces/EjemploTypes";
import EjercicioTypes from "./interfaces/EjercicioTypes";
import { IEjemploService } from "./interfaces/IEjemploService";
import { IEjercicioService } from "./interfaces/IEjercicioService";

var container = new Container();
container.bind<IEjemploService>(EjemploTypes.Ejemplo).to(EjemploServiceBis);
container
  .bind<IEjercicioService>(EjercicioTypes.Ejercicio)
  .to(EjercicioServices);
export default container;
