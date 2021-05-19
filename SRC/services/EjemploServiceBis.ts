import { injectable } from "inversify";
import { Persona } from "../models/persona";

@injectable()

export class EjemploServiceBis {
  constructor() {}
  public async ejemplo() {
    return "Esto es un ejemplo";
  }
  public async ejemploConParametros(nombre: string, apellido: string) {
    return `Hola ${nombre} ${apellido}`;
  }
  public async ejemploConQParametros(nombre: string, apellido: string) {
    return `Hola ${nombre} ${apellido}`;
  }
  public async ejemploPost(persona: Persona) {
    return `Soy ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años`;
  }
}
