import { useQuery, useQueryClient } from "react-query";
import { BASE_URL } from "./apiConfig";
import { Account, isAccount } from "../types/api/accounts";

const accountsUrl = BASE_URL + "/accounts";

export const useGetAccounts = () => {
  // Fetch
  const fetcher = (): Promise<Account[]> =>
    fetch(accountsUrl).then((res) => res.json());
  const { isLoading, error, data } = useQuery("accounts", fetcher);

  // Guard
  const accounts = data && data.filter((account) => isAccount(account));

  return { isLoading, error, accounts };
};
