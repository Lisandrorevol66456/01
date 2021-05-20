import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("CURSADO_TIPO_PK", ["id"], { unique: true })
@Entity("CURSADO_TIPO")
export class CursadoTipo {
  @PrimaryGeneratedColumn({ type: "number", name: "ID", scale: 0 })
  id: number;

  @Column("varchar2", { name: "NOMBRE", length: 60 })
  nombre: string;

  constructor(id: number, nombre: string){
    this.id = id,
   this.nombre = nombre
  }
}
