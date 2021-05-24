import { Temas } from "../../data/Temas";
import { Persona } from "../../models/persona";
export interface IEjercicioService {
  //ejemplo(): Promise<any>;
  //ejemploConParametros(nombre: string, apellido: string): Promise<any>;
  //ejemploConQParametros(nombre: string, apellido: string): Promise<any>;
  //ejemploPost(persona: Persona): Promise<any>;
  obtenerTemasConParametros(id:number):Promise<any>;
  //obtenerQTemas(id:number):Promise<any>;
}