import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReservationCreateInput = {
  appointment?: AppointmentWhereUniqueInput | null;
  service?: ServiceWhereUniqueInput | null;
  status?: string | null;
  user?: UserWhereUniqueInput | null;
};
