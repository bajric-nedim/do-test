import { ReservationCreateNestedManyWithoutAppointmentsInput } from "./ReservationCreateNestedManyWithoutAppointmentsInput";

export type AppointmentCreateInput = {
  date?: Date | null;
  doctor?: string | null;
  duration?: number | null;
  reservations?: ReservationCreateNestedManyWithoutAppointmentsInput;
  time?: Date | null;
};
