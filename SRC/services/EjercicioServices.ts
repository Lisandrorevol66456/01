import { injectable } from "inversify";
import { StoreProcedureDb } from "oracle-sp-types";
import { Persona } from "../models/persona";
import { getManager } from "typeorm";
import { Temas } from "../data/Temas";
import { Reparticiones } from "../data/Reparticiones";
import config from "../../config/config";
import * as jwt from "jsonwebtoken";
import { Usuario } from "../models/usuario";
import { request } from "express";

@injectable()
export class EjercicioServices {
  constructor() {}
  
  public async obtenerTemasPorSP(tema:Temas):Promise<any>{
    let sp = new StoreProcedureDb("PR_OBTENER_TEMA_ID", [tema.idTema]);
    let entity;
    await sp.executeSp().then(async (x: any) => {
      entity = x;
    });
    console.error(entity);
    return entity;

  }
  public async obtenerTemasConParametros(id:number){
    try {
      const temasRepository = await getManager().getRepository(
        Temas
      );
      const p = await temasRepository.find({idTema:id});
      return p;
    } catch (e) {
      console.log(e);
      return {};
    }
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
  public crearToken(usuario: Usuario) {
    var tokenData = {
      usuario: {
        nombre: usuario.nombre,
        id: usuario.id,
        idPerfil: usuario.perfil.id,
      },
    };
    const token = jwt.sign(tokenData, config.jwtSecret, {
      expiresIn: "12h",
      algorithm: "HS512",
    });
    return token;
  }
}
