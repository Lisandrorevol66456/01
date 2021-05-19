import { Request, Response } from "express";
import { Persona } from "../models/persona";
export class EjemploService {
  constructor() {}
  public async ejemploAction(request: Request, response: Response) {
    return response.status(201).json("Esto es un ejemplo");
  }
  public async ejemploActionConParametros(
    request: Request,
    response: Response
  ) {
    return response
      .status(201)
      .json(`Hola ${request.params.nombre} ${request.params.apellido}`);
  }
  public async ejemploActionConQParametros(
    request: Request,
    response: Response
  ) {
    return response
      .status(201)
      .json(`Hola ${request.query.nombre} ${request.query.apellido}`);
  }
  public async ejemploActionPost(request: Request, response: Response) {
    let persona: Persona = request.body;
    return response
      .status(201)
      .json(
        `Soy ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años`
      );
  }
}
