import { ReservationCreateNestedManyWithoutServicesInput } from "./ReservationCreateNestedManyWithoutServicesInput";

export type ServiceCreateInput = {
  description?: string | null;
  duration?: number | null;
  name?: string | null;
  reservations?: ReservationCreateNestedManyWithoutServicesInput;
};
