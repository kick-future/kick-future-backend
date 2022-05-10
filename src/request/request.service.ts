import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RequestEntity } from "./entities/request.entity";
import { CreateRequestDto } from "./dto/createRequest.dto";

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(RequestEntity)
    private repository: Repository<RequestEntity>
  ) {}

  create(createRequestDto: CreateRequestDto) {
    return this.repository.save(createRequestDto);
  }

  findAll() {
    return this.repository.find();
  }
}
