import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Alumnos } from "./Alumnos";

@Index("PERSONAS_PK", ["idPersona"], { unique: true })
@Entity("PERSONAS")
export class Personas {
  @PrimaryGeneratedColumn({ type: "number", name: "ID_PERSONA" })
  idPersona: number;

  @Column("varchar2", { name: "NOMBRE", nullable: true, length: 200 })
  nombre: string | null;

  @Column("varchar2", { name: "APELLIDO", nullable: true, length: 200 })
  apellido: string | null;

  @Column("number", { name: "EDAD", nullable: true })
  edad: number | null;

  @Column("varchar2", { name: "CUIL", length: 200 })
  cuil: string;

  @OneToMany(() => Alumnos, (alumnos) => alumnos.idPersona)
  alumnos: Alumnos[];


  constructor(idPersona: number, nombre: string | null, apellido: string | null, edad: number | null, cuil: string, alumnos: Alumnos[]) {
    this.idPersona = idPersona;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cuil = cuil;
    this.alumnos = alumnos;
  }
}
