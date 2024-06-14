import { Reservation } from "../reservation/Reservation";

export type Appointment = {
  createdAt: Date;
  date: Date | null;
  doctor: string | null;
  duration: number | null;
  id: string;
  reservations?: Array<Reservation>;
  time: Date | null;
  updatedAt: Date;
};
