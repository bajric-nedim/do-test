import { Module } from "@nestjs/common";
import { StatisticsService } from "./statistics.service";
import { StatisticsController } from "./statistics.controller";
import { StatisticsResolver } from "./statistics.resolver";

@Module({
  controllers: [StatisticsController],
  providers: [StatisticsService, StatisticsResolver],
  exports: [StatisticsService],
})
export class StatisticsModule {}
