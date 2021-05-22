import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import {Alumnos} from "./Alumnos";
@Index("REPARTICIONES_PK", ["idReparticion"], { unique: true })
@Entity("REPARTICIONES")
export class Reparticiones {
  @PrimaryGeneratedColumn({ type: "number", name: "ID_REPARTICION" })
  idReparticion: number;

  @Column("varchar2", { name: "NOMBRE", nullable: true, length: 200 })
  nombre: string | null;

  @OneToMany(() => Alumnos, (alumnos) => alumnos.idReparticion)
  alumnos: Alumnos[];


  constructor(idReparticion: number, nombre: string | null, alumnos: Alumnos[]) {
    this.idReparticion = idReparticion;
    this.nombre = nombre;
    this.alumnos = alumnos;
  }
}
