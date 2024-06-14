import { Reservation } from "../reservation/Reservation";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  reservations?: Array<Reservation>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
