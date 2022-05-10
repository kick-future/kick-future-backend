import { Column } from "typeorm";
import { Length } from "class-validator";

export class CreateRequestDto {
  @Length(2)
  name: string;

  description: string;

  @Column()
  value: string;

  @Length(42, 42, { message: "Длина адреса должна быть 42 символа" })
  to: string;
}
