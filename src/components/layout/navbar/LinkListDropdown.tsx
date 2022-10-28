import Bars3 from "../../lib/icons/Bars3";
import React, { useState } from "react";
import { ACTIVE_URLS } from "../../../config/urls";
import Link from "next/link";

/**
 * List of verical links in view then in mobile mode
 */
const LinkListDropdown = () => {
  const [open, setOpen] = useState(false);

  const linkElements = ACTIVE_URLS.map(({ url, name }) => {
    return (
      <div
        key={url}
        className="text-gray-700 block px-4 py-2 text-sm"
        role="menuitem"
      >
        <Link href={url}>
          <p className={"hover:text-primary-300 hover:font-bold"}>{name}</p>
        </Link>
      </div>
    );
  });

  return (
    <div className="relative inline-block text-left">
      <div onClick={() => setOpen(!open)}>
        <Bars3 />
      </div>

      {open && (
        <div
          className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          onClick={() => setOpen(false)}
        >
          <div className="py-1" role="none">
            {linkElements}
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkListDropdown;
