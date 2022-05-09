import { Length } from "class-validator";
import { Column } from "typeorm";

export class UpdateCampaignDto {
  @Length(2)
  name: string;

  description: string;

  @Column("text", { array: true })
  photos: string[];
}
