import { SortOrder } from "../../util/SortOrder";

export type ServiceOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
