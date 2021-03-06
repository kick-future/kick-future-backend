import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("campaigns")
export class CampaignEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  creator_address: string;

  @Column("text", { array: true })
  photos: string[];
}
