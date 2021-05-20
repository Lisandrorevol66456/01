import { id } from "inversify";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Alumnos } from "./Alumnos";
import { Temas } from "./Temas";

@Entity("CURSADO")
export class Cursado {
  @Column("number", { name: "ESTADO", scale: 0 })
  estado: number;

  @ManyToOne(() => Alumnos, (alumnos) => alumnos.cursados)
  @JoinColumn([{ name: "ID_ALUMNO", referencedColumnName: "idAlumno" }])
  idAlumno: Alumnos;

  @ManyToOne(() => Temas, (temas) => temas.cursados)
  @JoinColumn([{ name: "ID_TEMA", referencedColumnName: "idTema" }])
  idTema: Temas;

  constructor(estado: number,idAlumno: Alumnos,idTema: Temas){
    this.estado=estado,
    this.idAlumno=idAlumno,
    this.idTema=idTema
  }
}
