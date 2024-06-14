import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  doctor?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
