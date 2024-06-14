import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";

export type AppointmentWhereInput = {
  date?: DateTimeNullableFilter;
  doctor?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  reservations?: ReservationListRelationFilter;
  time?: DateTimeNullableFilter;
};
