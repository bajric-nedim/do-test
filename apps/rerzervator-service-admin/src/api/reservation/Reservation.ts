import { Appointment } from "../appointment/Appointment";
import { Service } from "../service/Service";
import { User } from "../user/User";

export type Reservation = {
  appointment?: Appointment | null;
  createdAt: Date;
  id: string;
  service?: Service | null;
  status: string | null;
  updatedAt: Date;
  user?: User | null;
};
