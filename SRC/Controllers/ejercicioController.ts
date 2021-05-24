import { Request, Response } from "express";
import { Temas } from "../data/Temas";
import { Persona } from "../models/persona";
import { EjemploServiceBis } from "../services/EjemploServiceBis";
import EjemploTypes from "../services/interfaces/EjemploTypes";
import container from "../services/inversify.config";

let _ejemploService = container.get<EjemploServiceBis>(EjemploTypes.Ejemplo);

export const EjercicioController = {
  obtenerTemas,
  obtenerQTemas
};

async function obtenerTemas(request: Request, response: Response) {

  try {
    let a = response.status(200).json(await _ejemploService.obtenerTemas());
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
    
    
  }
