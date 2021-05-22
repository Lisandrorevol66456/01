import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import {Alumnos} from "./Alumnos";
import { Profesores } from "./Profesores";
import { Temas } from "./Temas";

@Index("PUNTAJES_PK", ["idPuntaje"], { unique: true })
@Entity("PUNTAJES")
export class Puntajes {
  @Column("number", { name: "INTERES", nullable: true })
  interes: number | null;

  @Column("number", { name: "COMPLEJIDAD", nullable: true })
  complejidad: number | null;

  @Column("number", { name: "ENTENDIMIENTO", nullable: true })
  entendimiento: number | null;

  @Column("number", { name: "VALORACION", nullable: true })
  valoracion: number | null;

  @Column("varchar2", { name: "OBSERVACIONES", nullable: true, length: 500 })
  observaciones: string | null;

  @PrimaryGeneratedColumn({ type: "number", name: "ID_PUNTAJE" })
  idPuntaje: number;

  @ManyToOne(() => Alumnos, (alumnos) => alumnos.puntajes)
  @JoinColumn([{ name: "ID_ALUMNO", referencedColumnName: "idAlumno" }])
  idAlumno: Alumnos;

  @ManyToOne(() => Profesores, (profesores) => profesores.puntajes)
  @JoinColumn([{ name: "ID_PROFESOR", referencedColumnName: "idProfesor" }])
  idProfesor: Profesores;

  @ManyToOne(() => Temas, (temas) => temas.puntajes)
  @JoinColumn([{ name: "ID_TEMA", referencedColumnName: "idTema" }])
  idTema: Temas;


  constructor(interes: number | null, complejidad: number | null, entendimiento: number | null, valoracion: number | null, observaciones: string | null, idPuntaje: number, idAlumno: Alumnos, idProfesor: Profesores, idTema: Temas) {
    this.interes = interes;
    this.complejidad = complejidad;
    this.entendimiento = entendimiento;
    this.valoracion = valoracion;
    this.observaciones = observaciones;
    this.idPuntaje = idPuntaje;
    this.idAlumno = idAlumno;
    this.idProfesor = idProfesor;
    this.idTema = idTema;
  }
}
