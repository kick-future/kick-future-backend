import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CampaignEntity } from "./campaign/entities/campaign.entity";
import { CampaignModule } from "./campaign/campaign.module";
import { RequestEntity } from "./request/entities/request.entity";
import { RequestModule } from "./request/request.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "sergejij",
      password: "123",
      database: "kick-future-bd",
      entities: [CampaignEntity, RequestEntity],
      synchronize: true,
    }),
    CampaignModule,
    RequestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
