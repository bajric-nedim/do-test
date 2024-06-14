import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { StatisticsService } from "./statistics.service";

@swagger.ApiTags("statistics")
@common.Controller("statistics")
export class StatisticsController {
  constructor(protected readonly service: StatisticsService) {}
}
