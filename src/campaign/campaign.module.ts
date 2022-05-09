import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CampaignEntity } from "./entities/campaign.entity";
import { CampaignController } from "./campaign.controller";
import { CampaignService } from "./campaign.service";

@Module({
  imports: [TypeOrmModule.forFeature([CampaignEntity])],
  controllers: [CampaignController],
  providers: [CampaignService],
  exports: [CampaignService],
})
export class CampaignModule {}
