import { Request, Response } from "express";
import { Reparticiones } from "../data/Reparticiones";
import { Temas } from "../data/Temas";
import { Persona } from "../models/persona";
import { EjemploService } from "../services/EjemploService";
import { EjemploServiceBis } from "../services/EjemploServiceBis";
import EjemploTypes from "../services/interfaces/EjemploTypes";
import container from "../services/inversify.config";
//import "reflect-metadata";

let _ejemploService = container.get<EjemploServiceBis>(EjemploTypes.Ejemplo);

async function ejemploAction(request: Request, response: Response) {
  return response.status(201).json(await _ejemploService.ejemplo());
}
async function ejemploActionConParametros(
  request: Request,
  response: Response
) {
  return response
    .status(201)
    .json(
      await _ejemploService.ejemploConParametros(
        request.params.nombre,
        request.params.apellido
      )
    );
}
async function ejemploActionConQParametros(
  request: Request,
  response: Response
) {
  return response
    .status(201)
    .json(
      await _ejemploService.ejemploConQParametros(
        request.params.nombre,
        request.params.apellido
      )
    );
}
async function ejemploActionPost(request: Request, response: Response) {
  let persona: Persona = request.body;

  return response.status(201).json(await _ejemploService.ejemploPost(persona));
}
export const EjemploController = {
  ejemploAction,
  ejemploActionConParametros,
  ejemploActionConQParametros,
  ejemploActionPost,
  obtenerPorSP,
  obtenerReparticiones,
  crearToken,
};
async function obtenerPorSP(request: Request, response: Response) {
  let persona: Persona = request.body;
  return response.status(201).json(await _ejemploService.obtenerPorSP());
}

async function obtenerReparticiones(request: Request, response: Response) {
  let reparticion: Reparticiones = request.body;
  return response
    .status(201)
    .json(await _ejemploService.obtenerReparticiones());
}
async function crearToken(request: Request, response: Response) {
  let usuario = request.body;
  response.setHeader("authorization", _ejemploService.crearToken(usuario));
  return response.status(200).send();
}
