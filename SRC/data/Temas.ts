import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Puntajes } from "./Puntajes";

@Index("TEMAS_PK", ["idTema"], { unique: true })
@Entity("TEMAS")
export class Temas {
  @PrimaryGeneratedColumn({ type: "number", name: "ID_TEMA" })
  idTema: number;

  @Column("varchar2", { name: "NOMBRE", nullable: true, length: 200 })
  nombre: string | null;

  @Column("varchar2", { name: "DESCRIPCION", nullable: true, length: 200 })
  descripcion: string | null;

  @Column("number", { name: "DURACION", nullable: true })
  duracion: number | null;

  @OneToMany(() => Puntajes, (puntajes) => puntajes.idTema)
  puntajes: Puntajes[];


  constructor(idTema: number, nombre: string | null, descripcion: string | null, duracion: number | null, puntajes: Puntajes[]) {
    this.idTema = idTema;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.duracion = duracion;
    this.puntajes = puntajes;
  }
}
