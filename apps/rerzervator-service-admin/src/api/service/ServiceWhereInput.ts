import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";

export type ServiceWhereInput = {
  description?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  reservations?: ReservationListRelationFilter;
};
