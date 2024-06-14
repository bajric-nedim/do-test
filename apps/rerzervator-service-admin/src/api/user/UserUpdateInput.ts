import { ReservationUpdateManyWithoutUsersInput } from "./ReservationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  reservations?: ReservationUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
