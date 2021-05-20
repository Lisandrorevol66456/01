import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Reparticiones } from "./Reparticiones";
import { Personas } from "./Personas";
import { Puntajes } from "./Puntajes";

@Index("ALUMNOS_PK", ["idAlumno"], { unique: true })
@Entity("ALUMNOS")
export class Alumnos {
  @PrimaryGeneratedColumn({ type: "number", name: "ID_ALUMNO" })
  idAlumno: number;

  @ManyToOne(() => Reparticiones, (reparticiones) => reparticiones.alumnos)
  @JoinColumn([
    { name: "ID_REPARTICION", referencedColumnName: "idReparticion" },
  ])
  idReparticion: Reparticiones;

  @ManyToOne(() => Personas, (personas) => personas.alumnos)
  @JoinColumn([{ name: "ID_PERSONA", referencedColumnName: "idPersona" }])
  idPersona: Personas;

  @OneToMany(() => Puntajes, (puntajes) => puntajes.idAlumno)
  puntajes: Puntajes[];

  constructor(idAlumno: number, idReparticion: Reparticiones, idPersona: Personas, puntajes: Puntajes[]) {
    this.idAlumno = idAlumno;
    this.idReparticion = idReparticion;
    this.idPersona = idPersona;
    this.puntajes = puntajes;
  }
}
