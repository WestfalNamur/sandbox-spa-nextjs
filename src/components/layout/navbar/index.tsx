import useWindowSize from "../../../hooks/useWindowSize";
import LinkListHorizontal from "./LinkListHorizontal";
import LinkListDropdown from "./LinkListDropdown";
import logoPng from "../../../../public/assets/images/logo.png";
import Image from "next/image";

const NavBar = () => {
  const { isDesktop } = useWindowSize();

  // https://stackoverflow.com/questions/67421778/next-js-image-layout-fill-is-broken
  const logo = (
    <div className={"w-24"}>
      <Image src={logoPng} alt="Logo" />
    </div>
  );

  return (
    <nav className="h-20 bg-white border-b-2 border-gray-500 grid grid-cols-2 md:grid-cols-4">
      <div className={"w-24"}>
        <Image src={logoPng} alt="Logo" />
      </div>
      <div className="col-span-1 md:col-span-3 flex items-center flex-row-reverse px-8 space-x-4 space-x-reverse">
        {isDesktop ? <LinkListHorizontal /> : <LinkListDropdown />}
      </div>
    </nav>
  );
};

export default NavBar;
