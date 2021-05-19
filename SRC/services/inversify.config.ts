//import "reflect-metadata";
import { Container } from "inversify";
import { EjemploServiceBis } from "./EjemploServiceBis";
import EjemploTypes from "./interfaces/EjemploTypes";
import { IEjemploService } from "./interfaces/IEjemploService";

var container = new Container();
container.bind<IEjemploService>(EjemploTypes.Ejemplo).to(EjemploServiceBis);
export default container;
