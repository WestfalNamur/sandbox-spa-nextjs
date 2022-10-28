export interface URL {
  url: string;
  name: string;
}

/*
 * List of urls that are actively used in out app. This list does not necessary
 * equal pages.
 */
export const ACTIVE_URLS: URL[] = [
  { url: "/", name: "Home" },
  { url: "/Accounts", name: "accounts" },
  { url: "/Transfers", name: "transfers" },
];
