import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReservationWhereInput = {
  appointment?: AppointmentWhereUniqueInput;
  id?: StringFilter;
  service?: ServiceWhereUniqueInput;
  status?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
