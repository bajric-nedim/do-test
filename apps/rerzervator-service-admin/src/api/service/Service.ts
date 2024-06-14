import { Reservation } from "../reservation/Reservation";

export type Service = {
  createdAt: Date;
  description: string | null;
  duration: number | null;
  id: string;
  name: string | null;
  reservations?: Array<Reservation>;
  updatedAt: Date;
};
