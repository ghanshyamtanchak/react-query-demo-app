import { useQuery } from "@tanstack/react-query";
import { getCustomerIdentityService } from "../../services/lookup.service";

export const useCustomerIdentity = (key: string[]) => {
  return useQuery(key, getCustomerIdentityService);
};
