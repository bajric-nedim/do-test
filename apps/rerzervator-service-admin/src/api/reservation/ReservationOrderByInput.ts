import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  appointmentId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  serviceId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
