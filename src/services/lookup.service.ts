import { CUSTOMER_IDENTITY } from "../constants/apis";
import { getRequest } from "./utils";

export const getCustomerIdentityService = async () => {
  const { data } = await getRequest(CUSTOMER_IDENTITY);
  return data;
};
