import { Request, Response } from "express";
import { Temas } from "../data/Temas";
import { Persona } from "../models/persona";
import { EjemploServiceBis } from "../services/EjemploServiceBis";
import { EjercicioServices } from "../services/EjercicioServices";
import EjemploTypes from "../services/interfaces/EjemploTypes";
import EjercicioTypes from "../services/interfaces/EjercicioTypes";
import container from "../services/inversify.config";

//let _ejemploService = container.get<EjemploServiceBis>(EjemploTypes.Ejemplo);
let _ejercicioService = container.get<EjercicioServices>(EjercicioTypes.Ejercicio)

export const EjercicioController = {
  obtenerTemas,
  obtenerQTemas,
  obtenerTemasPorSP
};

async function obtenerTemas(request: Request, response: Response) {

  try {
    let a = response.status(200).json(await _ejercicioService.obtenerTemas());
    if (a) {
      return a;
    } else {
      return response.status(404);
    }
  } catch (e) {
    console.log(e);
    return response.status(409);
  }
}

async function obtenerQTemas(request: Request, response: Response) {
  let tema: Temas = request.body;
    return response.status(200).json(await _ejercicioService.obtenerTemasConParametros(tema.idTema));
    
  }

  async function obtenerTemasPorSP(request: Request, response: Response) {
    let tema: Temas = request.body;
    return response.status(200).json(await _ejercicioService.obtenerTemasPorSP(tema));
  }
