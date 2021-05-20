import { Column, Entity, Index, OneToMany } from "typeorm";
import { Puntajes } from "./Puntajes";

@Index("PROFESORES_PK", ["idProfesor"], { unique: true })
@Entity("PROFESORES")
export class Profesores {
  @Column("number", { primary: true, name: "ID_PROFESOR" })
  idProfesor: number;

  @Column("number", { name: "ID_CARGO", nullable: true })
  idCargo: number | null;

  @Column("number", { name: "ID_PERSONA", nullable: true })
  idPersona: number | null;

  @OneToMany(() => Puntajes, (puntajes) => puntajes.idProfesor)
  puntajes: Puntajes[];


  constructor(idProfesor: number, idCargo: number | null, idPersona: number | null, puntajes: Puntajes[]) {
    this.idProfesor = idProfesor;
    this.idCargo = idCargo;
    this.idPersona = idPersona;
    this.puntajes = puntajes;
  }
}
