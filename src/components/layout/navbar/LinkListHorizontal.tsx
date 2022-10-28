import { useRouter } from "next/router";
import { ACTIVE_URLS } from "../../../config/urls";
import Link from "next/link";

/**
 * List of horizonal links in view then desktop mode
 */
const LinkListHorizontal = () => {
  const { pathname } = useRouter();

  const linkList = ACTIVE_URLS.map((link) => {
    const { url, name } = link;
    return url === pathname ? (
      <Link href={url}>
        <p className="text-primary-500 font-bold">{name}</p>
      </Link>
    ) : (
      <Link href={url}>
        <p className="hover:text-primary-300">{name}</p>
      </Link>
    );
  });

  return <>{linkList}</>;
};

export default LinkListHorizontal;
