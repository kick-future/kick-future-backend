import { Controller, Get, Post, Body, Param, Put } from "@nestjs/common";
import { CampaignService } from "./campaign.service";
import { CreateCampaignDto } from "./dto/createCampaign.dto";
import { UpdateCampaignDto } from "./dto/updateCampaign.dto";

@Controller("campaign")
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Post()
  create(@Body() createCampaignDto: CreateCampaignDto) {
    return this.campaignService.create(createCampaignDto);
  }

  @Get()
  findAll() {
    return this.campaignService.findAll();
  }

  @Get(":address")
  findByAddress(@Param("address") address: string) {
    return this.campaignService.findByAddress(address);
  }

  @Get("/creator_address/:address")
  findByCreatorAddress(@Param("address") address: string) {
    return this.campaignService.findByCreatorAddress(address);
  }

  @Put(":address")
  update(
    @Param("address") address: string,
    @Body() updateCampaignDto: UpdateCampaignDto
  ) {
    return this.campaignService.update(address, updateCampaignDto);
  }
}
