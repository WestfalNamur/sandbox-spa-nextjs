import { useGetAccounts } from "../api/accounts";
import { isAccount } from "../types/api/accounts";

const Accounts = () => {
  const { isLoading, error, accounts } = useGetAccounts();
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error;
  if (!accounts) return "No account data.";

  const accountElements = accounts.map(({ id, owner }) => (
    <p key={id}>{owner}</p>
  ));

  return <ul>{accountElements}</ul>;
};

export default Accounts;
