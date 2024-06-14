import { ReservationUpdateManyWithoutServicesInput } from "./ReservationUpdateManyWithoutServicesInput";

export type ServiceUpdateInput = {
  description?: string | null;
  duration?: number | null;
  name?: string | null;
  reservations?: ReservationUpdateManyWithoutServicesInput;
};
