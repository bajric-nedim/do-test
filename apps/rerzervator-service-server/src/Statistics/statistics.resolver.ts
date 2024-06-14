import * as graphql from "@nestjs/graphql";
import { StatisticsService } from "./statistics.service";

export class StatisticsResolver {
  constructor(protected readonly service: StatisticsService) {}
}
