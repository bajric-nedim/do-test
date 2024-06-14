import { ReservationUpdateManyWithoutAppointmentsInput } from "./ReservationUpdateManyWithoutAppointmentsInput";

export type AppointmentUpdateInput = {
  date?: Date | null;
  doctor?: string | null;
  duration?: number | null;
  reservations?: ReservationUpdateManyWithoutAppointmentsInput;
  time?: Date | null;
};
