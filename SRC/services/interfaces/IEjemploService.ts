import { Persona } from "../../models/persona";
export interface IEjemploService {
  ejemplo(): Promise<any>;
  ejemploConParametros(nombre: string, apellido: string): Promise<any>;
  ejemploConQParametros(nombre: string, apellido: string): Promise<any>;
  ejemploPost(persona: Persona): Promise<any>;
}
