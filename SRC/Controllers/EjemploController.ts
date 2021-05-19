import { Request, Response } from "express";
import { Persona } from "../models/persona";
import { EjemploService } from "../services/EjemploService";
import { EjemploServiceBis } from "../services/EjemploServiceBis";
import EjemploTypes from "../services/interfaces/EjemploTypes";
import container from "../services/inversify.config";
//import "reflect-metadata";

let _ejemploService = container.get<EjemploServiceBis>(EjemploTypes.Ejemplo);

async function ejemploAction(request: Request, response: Response) {
  let service: EjemploServiceBis = new EjemploServiceBis();
  return response.status(201).json(await service.ejemplo());
}
async function ejemploActionConParametros(
  request: Request,
  response: Response
) {
  let service: EjemploServiceBis = new EjemploServiceBis();
  return response
    .status(201)
    .json(
      await service.ejemploConParametros(
        request.params.nombre,
        request.params.apellido
      )
    );
}
async function ejemploActionConQParametros(
  request: Request,
  response: Response
) {
  let service: EjemploServiceBis = new EjemploServiceBis();
  return response
    .status(201)
    .json(
      await service.ejemploConQParametros(
        request.params.nombre,
        request.params.apellido
      )
    );
}
async function ejemploActionPost(request: Request, response: Response) {
  let persona: Persona = request.body;
  let service: EjemploServiceBis = new EjemploServiceBis();
  return response.status(201).json(await service.ejemploPost(persona));
}
export const EjemploController = {
  ejemploAction,
  ejemploActionConParametros,
  ejemploActionConQParametros,
  ejemploActionPost,
};

// export async function ejemploAction(request: Request, response: Response) {
//   return response.status(201).json("Esto es un ejemplo");
// }
// async function ejemploAction(request: Request, response: Response) {
//   let service: EjemploService = new EjemploService();
//   service.ejemploAction(request, response);
// }
// async function ejemploAction(request: Request, response: Response) {
//   let service: EjemploServiceBis = new EjemploServiceBis();
//   return response.status(201).json(await service.ejemplo());
// }
// export async function ejemploActionConParametros(
//   request: Request,
//   response: Response
// ) {
//   return response
//     .status(201)
//     .json(`Hola ${request.params.nombre} ${request.params.apellido}`);
// }
// export async function ejemploActionConQParametros(
//   request: Request,
//   response: Response
// ) {
//   return response
//     .status(201)
//     .json(`Hola ${request.query.nombre} ${request.query.apellido}`);
// }

// export async function ejemploActionPost(request: Request, response: Response) {
//   let persona: Persona = request.body;
//   return response
//     .status(201)
//     .json(
//       `Soy ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años`
//     );
// }

// export const EjemploController = {
//   ejemploAction,
//   ejemploActionConParametros,
//   ejemploActionConQParametros,
//   ejemploActionPost,
// };
