import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("CARGOS_PK", ["idCargo"], { unique: true })
@Entity("CARGOS")
export class Cargos {
  @PrimaryGeneratedColumn({ type: "number", name: "ID_CARGO" })
  idCargo: number;

  @Column("varchar2", { name: "NOMBRE", nullable: true, length: 200 })
  nombre: string | null;


  constructor(idCargo: number, nombre: string | null) {
    this.idCargo = idCargo;
    this.nombre = nombre;
  }
}
