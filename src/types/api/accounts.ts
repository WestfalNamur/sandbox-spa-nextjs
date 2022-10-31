export interface Account {
  id: number;
  owner: string;
  email: string;
  password_hash: string;
  balance: number;
}

export const isAccount = (account: Account): boolean => {
  if (typeof account.id !== "number") {
    return false;
  }
  if (typeof account.owner !== "string") {
    return false;
  }
  if (typeof account.email !== "string") {
    return false;
  }
  if (typeof account.password_hash !== "string") {
    return false;
  }
  if (typeof account.balance !== "number") {
    return false;
  }
  return true;
};
