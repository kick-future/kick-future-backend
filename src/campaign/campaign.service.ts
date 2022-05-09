import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CampaignEntity } from "./entities/campaign.entity";
import { Repository } from "typeorm";
import { CreateCampaignDto } from "./dto/createCampaign.dto";
import { UpdateCampaignDto } from "./dto/updateCampaign.dto";

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(CampaignEntity)
    private repository: Repository<CampaignEntity>
  ) {}

  create(createCampaignDto: CreateCampaignDto) {
    return this.repository.save(createCampaignDto);
  }

  findAll() {
    return this.repository.find();
  }

  findByAddress(address: string) {
    return this.repository.findOne({ where: { address: address } });
  }

  findByCreatorAddress(address: string) {
    return this.repository.findOne({ where: { creator_address: address } });
  }

  update(address: string, updateCampaignDto: UpdateCampaignDto) {
    return this.repository
      .createQueryBuilder()
      .update()
      .set({
        name: updateCampaignDto.name,
        description: updateCampaignDto.description,
        photos: updateCampaignDto.photos,
      })
      .where("address = :address", { address })
      .execute();
  }
}
