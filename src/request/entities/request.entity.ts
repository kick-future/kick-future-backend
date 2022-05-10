import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("requests")
export class RequestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  value: string;

  @Column()
  to: string;
}
