import { Length } from "class-validator";
import { Column } from "typeorm";

export class CreateCampaignDto {
  @Length(2)
  name: string;

  description: string;

  @Length(42, 42, { message: "Длина адреса должна быть 42 символа" })
  address: string;

  @Length(42, 42, {
    message: "Длина адреса создателя контракта должна быть 42 символа",
  })
  creator_address: string;

  @Column("text", { array: true })
  photos: string[];

  @Column("int", { array: true })
  request_ids?: number[];
}
