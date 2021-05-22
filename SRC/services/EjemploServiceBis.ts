import { injectable } from "inversify";
import { StoreProcedureDb } from "oracle-sp-types";
import { Persona } from "../models/persona";
import { getManager } from "typeorm";
import { Temas } from "../data/Temas";
import { Reparticiones } from "../data/Reparticiones";
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
  public async obtenerPorSP(): Promise<any> {
    let sp = new StoreProcedureDb("PR_OBTENER_TEMAS", []);
    let entity;
    await sp.executeSp().then(async (x: any) => {
      entity = x;
    });
    console.error(entity);
    return entity;
  }
  public async obtenerTemas() {
    try {
      const t: any = await getManager()
        .createQueryBuilder(Temas, "t")
        .addSelect("t.idTema", "id")
        .addSelect("t.nombre", "nombre")
        .addSelect("t.descripcion", "descripcion")
        .addSelect("t.duracion", "duracion")
        .orderBy("t.idTema", "DESC")
        .getRawMany();
      return t;
    } catch (e) {
      console.log(e);
      return {};
    }
  }
  public async obtenerReparticiones() {
    try {
      const reparticionesRepository = await getManager().getRepository(
        Reparticiones
      );
      const p = await reparticionesRepository.find();
      return p;
    } catch (e) {
      console.log(e);
      return {};
    }
  }
}
